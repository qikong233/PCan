import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { createStackNavigator } from 'react-navigation'

class Chat extends Component {

  static navigationOptions = {
    title: '对话'
  }

  render() {
    return(
      <View>
        <Text>Chat</Text>
      </View>
    )
  }
}

export default createStackNavigator({
  Chat
})