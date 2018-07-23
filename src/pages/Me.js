import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { Avatar } from 'react-native-elements'
import { themeColor, WINDOW_HEIGHT, WINDOW_WIDTH } from '../public'

class Me extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: themeColor,
      borderBottomColor: 'transparent'
    },
    headerRight: (
      <TouchableOpacity style={{ marginRight: 10 }}>
        <Text>设置</Text>>
      </TouchableOpacity>
    )
  }

  state = {
    userName: 'W',
    favoriteProduct: 123,
    favoriteShop: 66,
    myFootprint: 333
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: themeColor,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 180
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
            <Avatar
              large
              rounded
              icon={{ name: 'user', type: 'font-awesome' }}
              activeOpacity={1}
            />
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
              <View style={{justifyContent: 'space-around', alignItems: 'center'}}>
                <Text>{this.state.favoriteProduct}</Text>
                <Text>收藏商品</Text>
              </View>
              <View style={{justifyContent: 'space-around', alignItems: 'center'}}>
                <Text>{this.state.favoriteShop}</Text>
                <Text>收藏店铺</Text>
              </View>
              <View style={{justifyContent: 'space-around', alignItems: 'center'}}>
                <Text>{this.state.myFootprint}</Text>
                <Text>我的足迹</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              width: WINDOW_WIDTH,
              backgroundColor: '#rgba(243, 246, 248, 1)'
            }}
          >
            <View style={{}}>
              <View
                style={{
                  width: WINDOW_WIDTH,
                  height: 123,
                  marginVertical: 7,
                  backgroundColor: 'white'
                }}
              />
              <View
                style={{
                  width: WINDOW_WIDTH,
                  height: WINDOW_HEIGHT - 123 - 172 - 64 - 44,
                  backgroundColor: 'white'
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default createStackNavigator({
  Me
})
