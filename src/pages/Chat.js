import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { connect } from 'react-redux'
import { createStackNavigator } from 'react-navigation'
import Conversation from './Conversation'
import { themeColor, isAndroid, WINDOW_WIDTH } from '../public'
import { Icon, List } from 'react-native-elements'

const radius = isAndroid ? 1 : 0.5

class Chat extends Component {
  static navigationOptions = {
    title: '对话',
    headerStyle: { backgroundColor: themeColor },
    headerRight: (
      <TouchableOpacity>
        <Icon
          name="plus"
          type="feather"
          containerStyle={{ marginRight: 15 }}
          color="#rgba(114, 107, 64, 1.00)"
        />
      </TouchableOpacity>
    )
  }

  renderChatList() {
    var arr = []
    this.props.chat.chatList.map((item, index) => {
      arr.push(
        <TouchableOpacity
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            height: 88,
            paddingHorizontal: 14
          }}
          key={`chat_${index}`}
          onPress={() =>
            this.props.navigation.navigate('Conversation', {
              chatItem: item
            })
          }
        >
          <Image
            style={{
              width: 55,
              height: 55,
              borderRadius: 55 * radius,
              overflow: 'hidden'
            }}
            source={item.avatar_url}
            resizeMode="center"
          />
          <View
            style={{
              height: 55,
              marginLeft: 14,
              justifyContent: 'space-between'
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'flex-end',
                height: 27,
              }}
            >
              <Text style={{ fontSize: 17}}>{item.name}</Text>
              <Text style={{ fontSize: 15, color: 'gray', marginLeft: 3 }}>
                /{item.department}
              </Text>
            </View>
            <Text ellipsizeMode='tail' numberOfLines={1} style={{ fontSize: 15, color: 'gray', width: WINDOW_WIDTH * 0.7 }}>
              {item.conversation[item.conversation.length - 1].content}
            </Text>
          </View>
          <View
            style={{
              position: 'absolute',
              left: 10,
              right: 10,
              bottom: 0,
              height: 1,
              backgroundColor: '#rgba(244, 245, 246, 1.00)'
            }}
          />
        </TouchableOpacity>
      )
    })
    return arr
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView>
          <List
            containerStyle={{ borderTopColor: 'transparent', marginTop: 0 }}
          >
            {this.renderChatList()}
          </List>
        </ScrollView>
      </View>
    )
  }
}

const mapPropToState = state => {
  const { chat } = state
  return { chat }
}

const connectChat = connect(mapPropToState)(Chat)

const Navigator = createStackNavigator({
  Chat: { screen: connectChat, navigationOptions: { headerBackTitle: ' ' } },
  Conversation
})

Navigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  return {
    tabBarVisible
  }
}

export default Navigator
