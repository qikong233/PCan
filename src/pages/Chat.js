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
    { name: 'John', avatar_url: '', department: '太平洋汽车网' },
    { name: 'Sarah', avatar_url: '', department: '太平洋电脑网' },
    { name: 'Brayden', avatar_url: '', department: '太平洋亲子网' },
    { name: 'Brian', avatar_url: '', department: '太平洋家居网' },
    { name: 'Daisy', avatar_url: '', department: '研发中心' }
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
          key={`chat_${index}`}
        >
          <Image
            style={{
              width: 55,
              height: 55,
              // backgroundColor: 'lightgray',
              borderRadius: 55 * 0.5,
              overflow: 'hidden'
            }}
            // source={require('')}
            resizeMode='center'
          />
          <View
            style={{
              height: 55,
              marginLeft: 14,
            }}
          >
            <View style={{flexDirection: 'row', alignItems: 'flex-end', height: 27}}>
            <Text style={{fontSize: 17, marginTop: 7}}>{item.name}</Text>
            <Text style={{fontSize: 15, color: 'gray', marginLeft: 3}}>/{item.department}</Text>
            </View>
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
