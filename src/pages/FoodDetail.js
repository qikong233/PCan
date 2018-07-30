import React, { Component } from 'react'
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper'
import { Header, Icon } from 'react-native-elements'
import { isIPX, themeColor, WINDOW_WIDTH } from '../public'

export default class FoodDetail extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    select: 0,
    count: 1
  }

  render() {
    const { navigation } = this.props
    const item = navigation.getParam('item')
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: '#rgba(254, 254, 254, 1.00)' }}
      >
        <Header
          backgroundColor="transparent"
          outerContainerStyles={{
            marginTop: isIPX ? 24 : 0,
            borderBottomColor: 'transparent',
            zIndex: 2
          }}
          leftComponent={
            <Icon
              name="ios-arrow-back"
              type="ionicon"
              color="#rgba(5, 5, 5, 1)"
              onPress={() => this.props.navigation.pop()}
            />
          }
        />
        <ScrollView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: isIPX ? 34 + 45 : 45,
            backgroundColor: '#rgba(242, 247, 248, 1)'
          }}
        >
          <Swiper style={{ height: 342 }}>
            <Image
              style={{ flex: 1, width: null, height: null }}
              source={item.picUrl}
              resizeMode="cover"
            />
          </Swiper>

          <View style={{ backgroundColor: 'white', paddingHorizontal: 10 }}>
            <View
              style={{
                marginVertical: 10,
                flexDirection: 'row',
                justifyContent: 'space-between'
              }}
            >
              <Text style={{ color: 'red', fontSize: 19, fontWeight: 'bold' }}>
                ￥{item.price}
              </Text>
              <Text style={{ color: '#rgba(153, 153, 153, 1)', fontSize: 12 }}>
                已拼{item.count}件 · 2人拼单
              </Text>
            </View>
            <Text
              style={{ fontSize: 19, fontWeight: 'bold', marginBottom: 15 }}
            >
              {item.foodName}
            </Text>
            <Text
              style={{
                color: '#rgba(153, 153, 153, 1)',
                fontSize: 12,
                marginBottom: 15
              }}
            >
              月售229 好评率98%
            </Text>
            <Text style={{ fontSize: 17, marginBottom: 10 }}>规格</Text>
            <View style={{ flexDirection: 'row', marginBottom: 15 }}>
              <TouchableOpacity
                style={[
                  {
                    width: 55,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: 'lightgray',
                    borderWidth: 1,
                    marginRight: 18
                  },
                  this.state.select === 0 && { backgroundColor: themeColor }
                ]}
                onPress={() => this.setState({ select: 0 })}
              >
                <Text>大份</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  {
                    width: 55,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderColor: 'lightgray',
                    borderWidth: 1
                  },
                  this.state.select === 1 && { backgroundColor: themeColor }
                ]}
                onPress={() => this.setState({ select: 1 })}
              >
                <Text>小份</Text>
              </TouchableOpacity>
            </View>
            <Text>数量</Text>
            <View
              style={{
                flexDirection: 'row',
                marginBottom: 15,
                marginTop: 10,
                alignItems: 'center'
              }}
            >
              <TouchableOpacity
                style={{ marginHorizontal: 10 }}
                onPress={() => {
                  var count = this.state.count - 1
                  this.setState({ count: count <= 1 ? 1 : count })
                }}
              >
                <Text>➖</Text>
              </TouchableOpacity>
              <View
                style={{
                  width: 55,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor: 'lightgray',
                  borderWidth: 1
                }}
              >
                <Text style={{ marginHorizontal: 10, textAlign: 'center' }}>
                  {this.state.count}
                </Text>
              </View>
              <TouchableOpacity
                style={{ marginHorizontal: 10 }}
                onPress={() =>
                  this.setState({ count: (this.state.count += 1) })
                }
              >
                <Text>➕</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 200,
              marginTop: 7,
              backgroundColor: 'white',
              paddingHorizontal: 10,
              overflow: 'hidden'
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginVertical: 9
              }}
            >
              <Text style={{ fontSize: 15 }}>29人在拼单，可直接参与</Text>
              <Text style={{ color: '#rgba(153, 153, 153, 1)' }}>
                查看更多>
              </Text>
            </View>
            <View
              style={{
                height: 1,
                width: WINDOW_WIDTH - 20,
                backgroundColor: '#rgba(244, 244, 244, 1)'
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 15
              }}
            >
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                  style={{ width: 41, height: 41, borderRadius: 41 * 0.5 }}
                  source={require('../images/qikong.jpg')}
                />
                <Text style={{ fontSize: 15, marginLeft: 10 }}>qikong</Text>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ alignItems: 'center', marginRight: 15 }}>
                  <Text style={{ fontSize: 15 }}>
                    还差<Text style={{ color: 'red' }}>1人</Text>拼成
                  </Text>
                  <Text style={{ fontSize: 10 }}>剩余23: 56: 32</Text>
                </View>
                <TouchableOpacity
                  style={{
                    width: 55,
                    height: 30,
                    backgroundColor: themeColor,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text style={{ fontSize: 13 }}>去拼单</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            backgroundColor: '#rgba(254, 254, 254, 1.00)',
            position: 'absolute',
            bottom: isIPX ? 34 : 0,
            left: 0,
            right: 0,
            height: 45,
            flexDirection: 'row'
          }}
        >
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              left: 0,
              height: 1,
              backgroundColor: '#rgba(220, 220, 220, 1)'
            }}
          />
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Icon
              color="#rgba(51, 51, 51, 1.00)"
              name="star-o"
              type="font-awesome"
              size={22}
              containerStyle={{ marginBottom: 6 }}
            />
            <Text style={{ color: 'gray', fontSize: 13 }}>收藏</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Icon
              color="#rgba(51, 51, 51, 1.00)"
              name="shop"
              type="entypo"
              size={22}
              containerStyle={{ marginBottom: 4 }}
            />
            <Text style={{ color: 'gray', fontSize: 13 }}>店铺</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <Icon
              color="#rgba(51, 51, 51, 1.00)"
              name="commenting-o"
              type="font-awesome"
              size={22}
              containerStyle={{ marginBottom: 5 }}
            />
            <Text style={{ color: 'gray', fontSize: 13 }}>客服</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 2,
              backgroundColor: themeColor,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Text>￥30</Text>
            <Text>单独购买</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              flex: 2,
              backgroundColor: '#rgba(252, 223, 59, 1.00)',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onPress={() =>
              this.props.navigation.navigate('merge', { item: item })
            }
          >
            <Text>￥15</Text>
            <Text>发起拼单</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}
