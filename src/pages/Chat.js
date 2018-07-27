import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { themeColor } from '../public'
import { Icon, List, ListItem } from '../../node_modules/react-native-elements'

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

  chatList = [
    { name: 'John', avatar_url: '' },
    { name: 'Sarah', avatar_url: '' },
    { name: 'Brayden', avatar_url: '' },
    { name: 'Brian', avatar_url: '' },
    { name: 'Daisy', avatar_url: '' }
  ]

  renderChatList() {
    var arr = []
    this.chatList.map((item, index) => {
      arr.push(
        <TouchableOpacity
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            height: 88,
            paddingHorizontal: 14
          }}
        >
          <Image
            style={{
              width: 55,
              height: 55,
              backgroundColor: 'lightgray',
              borderRadius: 55 * 0.5
            }}
          />
          <View
            style={{
              height: 55,
              marginLeft: 14,
            }}
          >
            <Text style={{fontSize: 17, marginTop: 7}}>{item.name}</Text>
            <Text>{item.subTitle}</Text>
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

export default createStackNavigator({
  Chat
})
