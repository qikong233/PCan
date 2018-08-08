import React, { Component } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements'
import ShoppingCart from '../components/ShopCart'
import Payment from '../components/Payment'
import { themeColor, isIPX } from '../public'

export default class Pay extends Component {
  static navigationOptions = {
    title: '拼餐',
    headerStyle: { backgroundColor: themeColor },
    headerTintColor: '#rgba(47, 52, 54, 1.00)',
    headerRight: (
      <TouchableOpacity>
        <Icon
          name="ellipsis-h"
          type="font-awesome"
          color="#rgba(74, 80, 86, 1)"
          containerStyle={{ marginRight: 15 }}
        />
      </TouchableOpacity>
    )
  }

  constructor(props) {
    super(props)
    this.item = props.navigation.getParam('item')
  }

  state = { select: 0, pay: false, paydone: false }

  payment = [
    {
      name: '支付宝支付',
      icon_url: require('../images/biao.png')
    },
    {
      name: '微信支付',
      icon_url: require('../images/wechat.png')
    }
  ]

  renderPaymentMethod = () => {
    var arr = []
    this.payment.map((item, index) => {
      arr.push(
        <TouchableOpacity
          key={`payment_${index}`}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 14,
            backgroundColor: 'white',
            height: 53
          }}
          activeOpacity={1}
          onPress={() => this.setState({ select: index })}
        >
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center'
            }}
          >
            <Image
              source={item.icon_url}
              style={{ width: 33, height: 33, marginRight: 8 }}
            />
            <Text>{item.name}</Text>
          </View>
          {this.state.select === index ? (
            <Icon name="check" type="feather" color={themeColor} />
          ) : null}
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              right: 5,
              left: 5,
              height: 1,
              backgroundColor: '#rgba(243, 243, 243, 1.00)'
            }}
          />
        </TouchableOpacity>
      )
    })
    return arr
  }

  getPrice = () => {
    var price = 0
    this.item.foods.map(item => {
      price += item.foodItem.price * item.count
    })
    return price
  }

  donePay = () => {
    this.setState({ pay: false, paydone: true }, () => {
      this.props.navigation.navigate('merge', { item: this.item.foods })
    })
  }

  renderBottom = () => {
    return (
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          left: 0,
          height: isIPX ? 79 : 45,
          backgroundColor: 'white',
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
            backgroundColor: '#rgba(220, 220, 220, 1.00)'
          }}
        />
        <View
          style={{
            flex: 1,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <Text style={{ fontSize: 17, fontWeight: '100' }}>
            总计: <Text style={{ color: 'red' }}>￥ {this.getPrice()}</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flex: 1,
            backgroundColor: themeColor,
            height: 45,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => this.setState({ pay: true })}
        >
          <Text style={{ fontSize: 17, fontWeight: '500' }}>立即支付</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderFood = () => {
    return <ShoppingCart item={this.item} isPayment />
  }

  render() {
    return (
      <SafeAreaView
        style={{ flex: 1, backgroundColor: '#rgba(242, 246, 249, 1.00)' }}
      >
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 14,
            backgroundColor: 'white',
            height: 50,
            alignItems: 'center'
          }}
        >
          <Text style={{ fontSize: 15 }}>添加收货地址</Text>
          <Icon name="chevron-right" type="feather" />
        </TouchableOpacity>
        <View style={{ marginTop: 6 }}>{this.renderFood()}</View>
        <View style={{ marginTop: 6 }}>{this.renderPaymentMethod()}</View>
        {this.renderBottom()}
        {!this.state.paydone && (
          <Payment
            visible={this.state.pay}
            close={() => this.setState({ pay: false })}
            donePay={this.donePay}
          />
        )}
      </SafeAreaView>
    )
  }
}

const WaitToPay = props => {
  return null
}

const DonePay = props => {
  return null
}
