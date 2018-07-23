import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { SearchBar, Icon } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation'
import { themeColor, WINDOW_WIDTH } from '../public'

class Home extends Component {
  static navigationOptions = {
    // title: '首页',
    headerStyle: {
      backgroundColor: themeColor
    },
    headerTitle: (
      <SearchBar
        round
        lightTheme
        containerStyle={{
          backgroundColor: 'transparent',
          width: WINDOW_WIDTH - 80,
          borderTopColor: 'transparent'
        }}
        inputStyle={{ backgroundColor: 'white' }}
      />
    ),
    headerLeft: (
      <Icon
        name="qrcode"
        type="font-awesome"
        color="#rgba(74, 80, 86, 1)"
        iconStyle={{ marginLeft: 10 }}
      />
    ),
    headerRight: (
      <Icon
        name="ellipsis-h"
        type="font-awesome"
        color="#rgba(74, 80, 86, 1)"
        iconStyle={{ marginRight: 10 }}
      />
    )
  }

  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }
}

export default createStackNavigator({
  Home
})
