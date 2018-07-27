import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { createStackNavigator } from 'react-navigation'
import { themeColor } from '../public';

class Shopping extends Component {

  static navigationOptions = {
    title: '购物车',
    headerStyle: {backgroundColor: themeColor}
  }

  render() {
    return(
      <View>
        <Text>Shopping</Text>
      </View>
    )
  }
}

export default createStackNavigator({
  Shopping
})