import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { themeColor, WINDOW_WIDTH } from '../public'

export default class FoodCell extends Component {
  render() {
    const item = this.props.item
    return (
      <View
        style={{ backgroundColor: 'white' }}
        key={`foodCell_${this.props.index}`}
      >
        <TouchableOpacity
          style={{ width: WINDOW_WIDTH, height: 165 }}
          activeOpacity={1}
          onPress={this.props.onPress}
        >
          <Image
            source={item.picUrl}
            style={{ flex: 1, width: null, height: null }}
          />
        </TouchableOpacity>
        <View
          style={{
            marginVertical: 7,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginHorizontal: 10
          }}
        >
          <View>
            <Text style={{ fontSize: 17 }}>{item.foodName}</Text>
            <Text style={{ marginTop: 4, color: 'red', fontSize: 17 }}>
              ￥{item.price}
              <Text
                style={{
                  marginLeft: 8,
                  fontSize: 12,
                  color: 'gray'
                }}
              >
                {' '}
                已拼{item.count}件
              </Text>
            </Text>
          </View>
          <TouchableOpacity
            onPress={this.props.onPress ? this.props.onPress : () => {}}
            style={{
              width: 86,
              height: 30,
              backgroundColor: themeColor,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5
            }}
          >
            <Text>去拼餐></Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
