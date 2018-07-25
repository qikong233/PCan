import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import { themeColor, WINDOW_WIDTH } from '../public'

export default class Merge extends Component {
  static navigationOptions = {
    title: '拼餐',
    headerStyle: { backgroundColor: themeColor }
  }

  flow = [
    '选择心怡商品',
    '支付开团或参团',
    '等待好友参团支付',
    '到达人数拼团成功'
  ]

  renderFlow() {
    var arr = []
    this.flow.map((item, i) => {
      if (i === this.flow.length - 1) {
        arr.push(
          <View style={{ alignItems: 'center', marginHorizontal: 3 }}>
            <View
              style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                backgroundColor: themeColor,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 15
              }}
            >
              <Text>{i}</Text>
            </View>
            <Text
              style={{
                width: 60,
                textAlign: 'center',
                color: '#rgba(114, 114, 115, 1.00)'
              }}
            >
              {item}
            </Text>
          </View>
        )
      } else {
        arr.push(
          <View style={{ flexDirection: 'row' }}>
            <View style={{ alignItems: 'center', marginHorizontal: 3 }}>
              <View
                style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  backgroundColor: themeColor,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 15
                }}
              >
                <Text>{i}</Text>
              </View>
              <Text
                style={{
                  width: 60,
                  textAlign: 'center',
                  color: '#rgba(114, 114, 115, 1.00)'
                }}
              >
                {item}
              </Text>
            </View>
            <Icon
              name="arrow-right"
              type="material-community"
              color={themeColor}
              containerStyle={{ marginTop: 25 }}
            />
          </View>
        )
      }
    })
    return arr
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#rgba(243, 246, 248, 1.00)'
        }}
      >
        <View
          style={{ height: 128, width: WINDOW_WIDTH, backgroundColor: 'white' }}
        />
        <Text
          style={{
            color: themeColor,
            fontSize: 18,
            marginTop: 29,
            fontWeight: 'bold'
          }}
        >
          开团成功
        </Text>
        <Text style={{ fontSize: 15, marginVertical: 7 }}>
          还差一人，快喊小伙伴来拼餐吧~
        </Text>
        <Card
          containerStyle={{
            height: 169,
            width: 315,
            borderColor: 'transparent',
            borderRadius: 5,
            backgroundColor: 'white',
            alignItems: 'center'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              width: 315 - 40
            }}
          >
            <View style={{ alignItems: 'center', marginRight: 20 }}>
              <Image
                source={require('../images/qikong.jpg')}
                style={{ width: 52, height: 52, borderRadius: 26 }}
              />
              <View
                style={{
                  marginTop: 15,
                  width: 44,
                  height: 18,
                  borderRadius: 2,
                  backgroundColor: themeColor,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text style={{ fontSize: 12 }}>团长</Text>
              </View>
            </View>
            <Image
              source={require('../images/qikong.jpg')}
              style={{ width: 52, height: 52, borderRadius: 26 }}
            />
          </View>
          <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 8 }}>
            剩余<Text>03: 21: 11</Text>失效
          </Text>
          <TouchableOpacity style={{marginTop: 10, height: 28, width: 225, backgroundColor: themeColor, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
            <Text>邀请好友参加团</Text>
          </TouchableOpacity>
        </Card>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 38
          }}
        >
          <View style={{ backgroundColor: themeColor, height: 1, width: 30 }} />
          <Text style={{ marginHorizontal: 10, fontSize: 17 }}>拼餐</Text>
          <View style={{ backgroundColor: themeColor, height: 1, width: 30 }} />
        </View>
        <View
          style={{
            marginTop: 28,
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          {this.renderFlow()}
        </View>
      </View>
    )
  }
}
