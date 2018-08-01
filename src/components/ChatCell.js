import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { themeColor, isAndroid } from '../public'

const Radius = isAndroid ? 1 : 0.5

export default class ChatCell extends Component {
  render() {
    const item = this.props.item
    const imageSource = this.props.item.isMe
      ? require('../images/user0.jpg')
      : this.props.avatar

    const icon = (
      <Image
        key="icon"
        source={imageSource}
        style={{
          width: 50,
          height: 50,
          borderRadius: 50 * Radius,
          marginHorizontal: 10
        }}
      />
    )

    const content = (
      <View
        key="content"
        style={{
          flex: 1,
          alignItems: this.props.item.isMe ? 'flex-end' : 'flex-start',
          paddingLeft: this.props.item.isMe ? 65 : 0,
          paddingRight: this.props.item.isMe ? 0 : 65,
        }}
      >
        <View
          style={{
            backgroundColor: this.props.item.isMe ? themeColor : 'white',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 5,
          }}
        >
          <Text style={{ fontSize: 15, marginHorizontal: 10, marginVertical: 12 }}>{item.content}</Text>
        </View>
      </View>
    )

    var arr = []

    if (this.props.item.isMe) {
      arr.push(content)
      arr.push(icon)
    } else {
      arr.push(icon)
      arr.push(content)
    }

    return (
      <View
        style={{
          flexDirection: 'row',
          marginVertical: 7.5,
          justifyContent: this.props.item.isMe ? 'flex-end' : 'flex-start',
          paddingHorizontal: 5
        }}
      >
        {arr}
      </View>
    )
  }
}
