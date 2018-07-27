import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { Button } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation'
import { themeColor } from '../public'
import ShoppingCell from '../components/ShoppingCell'

class Shopping extends Component {
  static navigationOptions = {
    title: '购物车',
    headerStyle: { backgroundColor: themeColor }
  }

  shoppingCar = [{ storeName: '', food: [] }]

  renderFoodInCar() {
    var arr = []
    this.props.shopping.car.map((item, index) => {
      arr.push(
        <View key={`store_${index}`}>
          <Text>{item.storeName}</Text>
          {item.foods.map((foodItem, foodIndex) => {
            return (
              <ShoppingCell
                item={foodItem}
                count={item.count}
                key={`Sotre_${index}_cell_${foodIndex}`}
              />
            )
          })}
        </View>
      )
    })
    return arr
  }

  componentDidMount() {}

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#rgba(243, 246, 248, 1.00)' }}>
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: 'white',
            marginBottom: 45,
            marginTop: 8
          }}
        >
          {this.renderFoodInCar}
        </ScrollView>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: '#rgba(242, 242, 242, 1.00)',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 45
          }}
        >
          <Text style={{ fontSize: 16 }}>
            合计:{' '}
            <Text style={{ fontWeight: 'bold', color: 'red' }}>
              ￥{this.allCount}
            </Text>
          </Text>
          <Button
            containerViewStyle={{ marginRight: 0 }}
            buttonStyle={{ width: 138, height: 45 }}
            title="结算"
            textStyle={{ color: 'black' }}
            backgroundColor={themeColor}
          />
        </View>
      </View>
    )
  }
}

let mapStateToProps = state => {
  const { shopping } = state
  return { shopping }
}

const connectShop = connect(mapStateToProps)(Shopping)

export default createStackNavigator({
  connectShop
})
