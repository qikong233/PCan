import React, { Component } from 'react'
import { View, Text } from 'react-native'
import ShoppingCell from './ShoppingCell'

export default class ShopCart extends Component {
  render() {
    const { item } = this.props
    return (
      <View style={{backgroundColor: 'white'}}>
        <Text style={{ paddingHorizontal: 15, marginTop: 10, marginBottom: 5 }}>
          店铺：{item.storeName}
        </Text>
        {item.foods.map((food, foodIndex) => {
          return (
            <ShoppingCell
              isPayment={this.props.isPayment}
              item={food.foodItem}
              count={food.count}
              key={`Sotre_cell_${foodIndex}`}
              innerStyle={{ paddingHorizontal: 15 }}
            />
          )
        })}
        <View style={{backgroundColor: 'white', height: 14}}/>
      </View>
    )
  }
}
