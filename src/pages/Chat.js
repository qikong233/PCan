import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { themeColor } from '../public'
import { Icon, List } from '../../node_modules/react-native-elements'

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

  chatList = []

  render() {
    return (
      <View style={{flex: 1}}>
        <List>
          {this.chatList}
        </List>
      </View>
    )
  }
}

export default createStackNavigator({
  Chat
})
