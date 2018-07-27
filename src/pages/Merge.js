import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Card, Icon } from 'react-native-elements'
import { themeColor, WINDOW_WIDTH } from '../public'

export default class Merge extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: '拼餐',
    headerStyle: { backgroundColor: themeColor },
    headerLeft: (
      <Icon
        name="ios-arrow-back"
        type="ionicon"
        color="#rgba(5, 5, 5, 1)"
        containerStyle={{ marginLeft: 20 }}
        onPress={() => navigation.pop()}
      />
    )
  })

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
    const item = this.props.navigation.getParam('item', {})

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#rgba(243, 246, 248, 1.00)'
        }}
      >
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            width: WINDOW_WIDTH,
            backgroundColor: 'white'
          }}
        >
          <Text style={{ color: '#rgba(103, 103, 103, 1.00)' }}>
            店铺： 过桥米线
          </Text>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Image
              source={item.picUrl}
              style={{
                width: 81,
                height: 81,
                borderColor: '#rgba(240, 240, 240, 1.00)',
                borderWidth: 1
              }}
            />
            <View style={{ marginLeft: 15 }}>
              <Text style={{ fontSize: 17, marginBottom: 12 }}>
                {item.title}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'flex-end',
                  marginBottom: 7
                }}
              >
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 17,
                    color: 'red'
                  }}
                >
                  ￥{item.price}
                </Text>
                <View style={{ marginLeft: 10 }}>
                  <Text
                    style={{
                      color: '#rgba(100, 100, 100, 1.00)',
                      fontSize: 14
                    }}
                  >
                    ￥{item.orginPrice}
                  </Text>
                  <View
                    style={{
                      position: 'absolute',
                      left: 0,
                      right: 0,
                      top: 7,
                      height: 1,
                      backgroundColor: '#rgba(100, 100, 100, 1.00)'
                    }}
                  />
                </View>
              </View>
              <View
                style={{
                  width: 65,
                  height: 22,
                  backgroundColor: themeColor,
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Text>2人拼团</Text>
              </View>
            </View>
          </View>
        </View>
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
            width: 315,
            borderColor: 'transparent',
            borderRadius: 5,
            backgroundColor: 'white'
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start'
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
              source={require('../images/user.png')}
              style={{
                width: 52,
                height: 52,
                borderRadius: 26,
                backgroundColor: 'lightgray'
              }}
            />
          </View>
          <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 8 }}>
            剩余<Text>03: 21: 11</Text>失效
          </Text>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity
              style={{
                marginTop: 15,
                height: 35,
                width: 225,
                backgroundColor: themeColor,
                borderRadius: 5,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text>邀请好友参加团</Text>
            </TouchableOpacity>
          </View>
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
