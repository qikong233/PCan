import React, { Component } from 'react'
import {
  SafeAreaView,
  Keyboard,
  Animated,
  Easing,
  FlatList
} from 'react-native'
import { connect } from 'react-redux'
import { themeColor, isIPX } from '../public'
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
  }

  componentDidMount() {
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
    console.log(1)
    this.props.dispatch(sendmsg({ name: this.chat.name, msg: this.msg }))
  }

  componentWillUnmount() {
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
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: '#rgba(245, 245, 245, 1.00)' }}
      >
        <FlatList
          style={{ flex: 1 }}
          data={this.state.conversation}
          renderItem={this.renderItem}
        />
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
