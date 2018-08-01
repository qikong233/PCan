import React, { Component } from 'react'
import {
  SafeAreaView,
  Keyboard,
  Animated,
  Easing,
  FlatList,
  KeyboardAvoidingView,
  PanResponder
} from 'react-native'
import { connect } from 'react-redux'
import { themeColor, isIPX, isAndroid } from '../public'
import ChatCell from '../components/ChatCell'
import ReplyBox from '../components/Replybox'
import { sendmsg } from '../actions/chatAction'

class Conversation extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('chatItem').name,
    headerStyle: { backgroundColor: themeColor },
    headerTintColor: '#rgba(47, 52, 54, 1.00)'
  })

  state = {
    conversation: []
  }

  componentWillMount() {
    this.chat = this.props.navigation.getParam('chatItem')
    this.setState({ conversation: this.chat.conversation })
    this.gesture = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {this.replaybox && this.replaybox.blur()}
    })
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.flatList && this.flatList.scrollToEnd({animated: false})
    }, 50);
    const showName = 'keyboardWillShow'
    const dissName = 'keyboardWillHide'
    this.keyboardShow = Keyboard.addListener(showName, e => {
      Animated.timing(this.keyboardAnim, {
        duration: e.duration,
        easing: Easing.keyboard,
        toValue: e.endCoordinates.height
      }).start()
    })
    this.keyboardHide = Keyboard.addListener(dissName, e => {
      Animated.timing(this.keyboardAnim, {
        duration: e.duration,
        easing: Easing.keyboard,
        toValue: this.keyboardBottom
      }).start()
    })
  }

  sendMsg = () => {
    if (!this.msg || this.msg === '') return
    this.props.dispatch(sendmsg({ name: this.chat.name, msg: this.msg }))
    this.flatList && this.flatList.scrollToEnd()
  }

  componentWillUnmount() {
    this.timeout && clearTimeout(this.timeout)
    this.keyboardShow && this.keyboardShow.remove()
    this.keyboardHide && this.keyboardHide.remove()
  }

  keyboardBottom = isIPX ? 34 : 0
  keyboardAnim = new Animated.Value(this.keyboardBottom)

  renderItem = ({ item, index }) => {
    return (
      <ChatCell
        item={item}
        key={`chatCell_${index}`}
        avatar={this.chat.avatar_url}
      />
    )
  }

  render() {
    var offset = isIPX ? 88 : 64
    if (isAndroid) offset = 0
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: '#rgba(245, 245, 245, 1.00)' }}
      >
        <KeyboardAvoidingView
          behavior='padding'
          style={{ flex: 1 }}
          keyboardVerticalOffset={offset}
        >
          <FlatList
            {...this.gesture.panHandlers}
            style={{ flex: 1, marginBottom: 50 }}
            data={this.state.conversation}
            renderItem={this.renderItem}
            showsVerticalScrollIndicator={false}
            ref={r => (this.flatList = r)}
            // onScroll={() => this.replaybox && this.replaybox.blur()}
          />
        </KeyboardAvoidingView>
        <Animated.View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: this.keyboardAnim
          }}
        >
          <ReplyBox
            style={{ flex: 1 }}
            onSubmitEditing={this.sendMsg}
            onChangeText={msg => (this.msg = msg)}
            ref={r => (this.replaybox = r)}
            onTouchStart={() => this.flatList.scrollToEnd()}
          />
        </Animated.View>
      </SafeAreaView>
    )
  }
}

mapStateToProps = state => {
  const { chat } = state
  return { chat }
}

export default connect(mapStateToProps)(Conversation)
