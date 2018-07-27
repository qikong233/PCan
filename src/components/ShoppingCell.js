import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'

export default class ShoopingCell extends Component {
  render() {
    const { item, count } = this.props
    return (
      <View style={{ height: 103, flexDirection: 'row' }}>
        <Image style={{ width: 80, hegiht: 80 }} />
        <View>
          <Text>{item.foodName}</Text>
          <Text>规格：标准</Text>
          <Text>￥ {item.price}</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>➖</Text>
          <View>
            <Text>{count}</Text>
          </View>
          <Text>➕</Text>
        </View>
      </View>
    )
  }
}
