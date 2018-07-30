import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Icon, List, ListItem, Header } from 'react-native-elements'
import { themeColor, WINDOW_HEIGHT, WINDOW_WIDTH } from '../public'

class Me extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    userName: 'W',
    favoriteProduct: 123,
    favoriteShop: 66,
    myFootprint: 333
  }

  menuList = [
    { title: '我的财产', iconName: 'credit-card' },
    { title: '优惠券', iconName: 'ticket' },
    { title: '地址管理', iconName: 'map' },
    { title: '消息中心', iconName: 'comment' }
  ]

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          outerContainerStyles={{backgroundColor: themeColor, borderBottomColor: 'transparent'}}
          rightComponent={
            <TouchableOpacity>
              <Text>设置</Text>
            </TouchableOpacity>
          }
        />
        <View
          style={{
            backgroundColor: themeColor,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 180,
            zIndex: -1
          }}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: 'transparent' }}
        >
          <View
            style={{
              width: WINDOW_WIDTH,
              height: 172,
              backgroundColor: themeColor,
              alignItems: 'center'
            }}
          >
            <TouchableOpacity
              style={{
                width: 63,
                height: 63,
                borderRadius: 63 * 0.5,
                overflow: 'hidden'
              }}
            >
              <Image
                style={{ flex: 1, width: null, height: null }}
                source={require('../images/qikong.jpg')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={{ fontSize: 17, marginTop: 12 }}>
              {this.state.userName}
            </Text>
            <View
              style={{
                paddingTop: 10,
                width: WINDOW_WIDTH,
                height: 65,
                flexDirection: 'row',
                justifyContent: 'space-around'
              }}
            >
              <TouchableOpacity
                style={{ justifyContent: 'space-around', alignItems: 'center' }}
              >
                <Text>{this.state.favoriteProduct}</Text>
                <Text>收藏商品</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ justifyContent: 'space-around', alignItems: 'center' }}
              >
                <Text>{this.state.favoriteShop}</Text>
                <Text>收藏店铺</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ justifyContent: 'space-around', alignItems: 'center' }}
              >
                <Text>{this.state.myFootprint}</Text>
                <Text>我的足迹</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              width: WINDOW_WIDTH,
              backgroundColor: '#rgba(243, 246, 248, 1)'
            }}
          >
            <View
              style={{
                width: WINDOW_WIDTH,
                height: 123,
                marginVertical: 7,
                backgroundColor: 'white'
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  height: 37,
                  width: WINDOW_WIDTH,
                  paddingHorizontal: 12,
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Text style={{ color: '#rgba(51, 51, 51, 1)', fontSize: 16 }}>
                  我的订单
                </Text>
                <TouchableOpacity>
                  <Text style={{ color: 'gray' }}>全部订单></Text>
                </TouchableOpacity>
                <View
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 12,
                    right: 12,
                    height: 1,
                    backgroundColor: '#rgba(243, 243, 243, 1)'
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingHorizontal: 35
                }}
              >
                <TouchableOpacity>
                  <Icon
                    name="credit-card"
                    type="font-awesome"
                    color={themeColor}
                  />
                  <Text style={{ marginTop: 12 }}>待付款</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon name="ios-list-box" type="ionicon" color={themeColor} />
                  <Text style={{ marginTop: 12 }}>待配送</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name="van-utility"
                    type="material-community"
                    color={themeColor}
                  />
                  <Text style={{ marginTop: 12 }}>配送中</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon
                    name="comment-text-outline"
                    type="material-community"
                    color={themeColor}
                  />
                  <Text style={{ marginTop: 12 }}>待评价</Text>
                </TouchableOpacity>
              </View>
            </View>
            <List
              containerStyle={{
                marginTop: 0,
                width: WINDOW_WIDTH,
                height: WINDOW_HEIGHT - 123 - 172 - 64 - 44,
                backgroundColor: 'white',
                borderTopColor: 'transparent'
              }}
            >
              {this.menuList.map((item, i) => {
                return (
                  <ListItem
                    key={`me_${i}`}
                    containerStyle={{
                      borderTopColor: 'transparent',
                      borderBottomColor: '#rgba(243, 243, 243, 1)'
                    }}
                    title={item.title}
                    titleStyle={{ fontSize: 17 }}
                    titleContainerStyle={{ marginLeft: 8 }}
                    leftIcon={
                      <Icon
                        name={item.iconName}
                        size={17}
                        type="font-awesome"
                        color={themeColor}
                      />
                    }
                  />
                )
              })}
            </List>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default createStackNavigator({
  Me
})
