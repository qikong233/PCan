import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

export default class ShoopingCell extends Component {
  render() {
    const { item, count } = this.props
    return (
      <View
        style={[
          {
            height: 103,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#rgba(242, 242, 242, 1.00)'
          },
          this.props.innerStyle
        ]}
      >
        <View style={{ flexDirection: 'row' }}>
          <Image
            style={{
              width: 80,
              height: 80,
              borderColor: '#rgba(232, 232, 232, 1.00)',
              borderWidth: 1
            }}
            source={item.picUrl}
            resizeMode="cover"
          />
          <View
            style={{
              height: 80,
              justifyContent: 'space-between',
              marginLeft: 15
            }}
          >
            <Text style={{ fontSize: 17 }}>{item.foodName}</Text>
            <Text style={{ color: '#rgba(153, 153, 153, 1.00)', fontSize: 12, marginTop: 5}}>
              规格：标准
            </Text>
            {this.props.isPayment && (
              <Text style={{ color: '#rgba(153, 153, 153, 1.00)', fontSize: 12 }}>
              数量：{count}
            </Text>
            )}
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'red' }}>
              ￥ {item.price }
            </Text>
          </View>
        </View>
        {!this.props.isPayment && (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity>
              <Text>➖</Text>
            </TouchableOpacity>
            <View
              style={{
                height: 25,
                width: 50,
                marginHorizontal: 12,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#rgba(232, 232, 232, 1.00)',
                borderWidth: 1
              }}
            >
              <Text>{count}</Text>
            </View>
            <TouchableOpacity>
              <Text>➕</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}
