import * as types from '../actions/actionTypes'

const initialState = {
  car: [
    {
      storeName: 'store two',
      foods: [
        {
          foodItem: {
            storeName: 'store two',
            picUrl: require('../images/pic_2.jpg'),
            foodName: '下午茶套餐',
            price: '40',
            orginPrice: '80',
            recommend: 6,
            count: 163
          },
          count: 2
        }
      ]
    }
  ]
}

function getList(stores, Field) {
  var list = []
  for (var i = 0; i < stores.length; i++) {
    list.push(stores[i][Field])
  }
  return list
}

export default function shopping(state = initialState, action) {
  switch (action.type) {
    case types.ADDFOOD: {
      var car = state.car
      const storesList = getList(state.car, 'storeName')
      const storeIndex = storesList.indexOf(action.item.storeName)
      if (storeIndex) {
        const foodsList = getList(store.foods, 'foodItem')
        const foodIndex = foodsList.indexOf(action.item)
        if (foodIndex) {
          car[storeIndex].foods[foodIndex].count += 1
        } else {
          car[storeIndex].foods.push({
            foodItem: action.item,
            count: 0
          })
        }
        return Object.assign({}, state, {
          car: car
        })
      } else {
        return Object.assign({}, state, {
          car: car.push({
            storeName: action.item.storeName,
            foods: [{ foodItem: action.item, count: 0 }]
          })
        })
      }
    }
    case types.DELFOOD: {
    }
    default:
      return state
  }
}
