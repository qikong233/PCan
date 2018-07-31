import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import HomeScreen from './Home'
import ChatScreen from './Chat'
import ShoppingScreen from './Shopping'
import MeScreen from './Me'

import { themeColor } from '../public'
import Icon from 'react-native-vector-icons/FontAwesome'

export default (Tab = createBottomTabNavigator(
  {
    chat: ChatScreen,
    home: HomeScreen,
    shopping: ShoppingScreen,
    me: MeScreen
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'home') {
          iconName = 'home'
        } else if (routeName === 'chat') {
          iconName = 'comment'
        } else if (routeName === 'shopping') {
          iconName = 'shopping-cart'
        } else if (routeName === 'me') {
          iconName = 'user'
        }
        return <Icon name={iconName} size={25} color={tintColor} />
      }
    }),
    tabBarOptions: {
      activeTintColor: themeColor
    }
  }
))

