import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'
import { SearchBar, Icon, Button, List } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation'
import { getRecommend } from '../actions/homeAction'

import Swiper from 'react-native-swiper'
import { themeColor, WINDOW_WIDTH } from '../public'
import FoodCell from '../components/FoodCell'
import FoodDetail from './FoodDetail'
import Merge from './Merge'

class Home extends Component {
  static navigationOptions = {
    // title: '首页',
    tabBarVisible: false,
    headerStyle: {
      backgroundColor: themeColor
    },
    headerTitle: (
      <SearchBar
        round
        lightTheme
        containerStyle={{
          backgroundColor: 'transparent',
          flex: 1,
          borderTopColor: 'transparent',
          borderBottomColor: 'transparent'
        }}
        inputStyle={{ backgroundColor: 'white' }}
      />
    ),
    headerLeft: (
      <TouchableOpacity>
        <Icon
          name="qrcode"
          type="font-awesome"
          color="#rgba(74, 80, 86, 1)"
          containerStyle={{ marginLeft: 15 }}
        />
      </TouchableOpacity>
    ),
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

  state = {
    IntegratedSortDown: true,
    FilterDown: true
  }

  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getRecommend())
  }

  render() {
    const IntegratedSort = this.state.IntegratedSortDown
      ? 'chevron-down'
      : 'chevron-up'
    const Filter = this.state.FilterDown ? 'chevron-down' : 'chevron-up'
    const recommendData = this.props.home.recommendData

    return (
      <View style={styles.container}>
        <ScrollView>
          <Swiper
            containerStyle={styles.warpper}
            autoplay
            activeDotColor={themeColor}
          >
            <Image
              source={require('../images/swiper_1.jpg')}
              style={styles.slide}
              resizeMode="cover"
            />
            <Image
              source={require('../images/swiper_2.jpg')}
              style={styles.slide}
              resizeMode="cover"
            />
            <Image
              source={require('../images/swiper_3.jpg')}
              style={styles.slide}
              resizeMode="cover"
            />
          </Swiper>
          <View
            style={{
              width: WINDOW_WIDTH,
              height: 94,
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              backgroundColor: 'white'
            }}
          >
            <TouchableOpacity>
              <Icon
                name="calendar-check-o"
                type="font-awesome"
                color={themeColor}
              />
              <Text style={{ marginTop: 10 }}>去签到</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon
                name="ticket-confirmation"
                type="material-community"
                color={themeColor}
              />
              <Text style={{ marginTop: 10 }}>快领券</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="clipboard" type="feather" color={themeColor} />
              <Text style={{ marginTop: 10 }}>发起拼团</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="gift" type="material-community" color={themeColor} />
              <Text style={{ marginTop: 10 }}>新人礼物</Text>
            </TouchableOpacity>
          </View>
          <View style={{ backgroundColor: '#rgba(242, 246, 249, 1)' }}>
            <View
              style={{
                marginTop: 12,
                backgroundColor: 'white',
                alignItems: 'center'
              }}
            >
              <View
                style={{
                  marginVertical: 12,
                  width: 130,
                  flexDirection: 'row',
                  alignItems: 'center'
                }}
              >
                <View
                  style={{ flex: 1, height: 1, backgroundColor: themeColor }}
                />
                <Text style={{ marginHorizontal: 10 }}>推荐拼团</Text>
                <View
                  style={{ flex: 1, height: 1, backgroundColor: themeColor }}
                />
              </View>
              <View
                style={{
                  marginLeft: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center'
                }}
              >
                <Button
                  title="综合排序"
                  iconRight={{
                    name: IntegratedSort,
                    type: 'feather',
                    color: themeColor
                  }}
                  textStyle={{ fontSize: 12, color: 'black' }}
                  backgroundColor="transparent"
                  buttonStyle={{ width: 75 }}
                />
                <Button
                  title="好评优先"
                  textStyle={{ fontSize: 12, color: 'black' }}
                  backgroundColor="transparent"
                  buttonStyle={{ width: 75 }}
                />
                <Button
                  title="距离最近"
                  textStyle={{ fontSize: 12, color: 'black' }}
                  backgroundColor="transparent"
                  buttonStyle={{ width: 75 }}
                />
                <Button
                  title="筛选"
                  iconRight={{
                    name: Filter,
                    type: 'feather',
                    color: themeColor
                  }}
                  textStyle={{ fontSize: 12, color: 'black' }}
                  backgroundColor="transparent"
                  buttonStyle={{ width: 75 }}
                />
              </View>
              <List>
                {recommendData.map((item, i) => {
                  return (
                    <FoodCell
                      key={`foodCell_${i}`}
                      item={item}
                      index={i}
                      onPress={() =>
                        this.props.navigation.navigate('detail', { item: item })
                      }
                    />
                  )
                })}
              </List>
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  warpper: {
    width: WINDOW_WIDTH,
    height: 171
  },
  slide: {
    flex: 1,
    height: null,
    width: null
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  }
})

let mapStateToProps = state => {
  const { home } = state
  return { home }
}

const connectHome = connect(mapStateToProps)(Home)
const Navigator = createStackNavigator({
  home: connectHome,
  detail: FoodDetail,
  merge: Merge
})

Navigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true
  if (navigation.state.index > 0) {
    tabBarVisible = false
  }

  return {
    tabBarVisible
  }
}

export default Navigator
