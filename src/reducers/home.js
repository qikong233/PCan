import * as types from '../actions/actionTypes'
import { GetRecommendData } from '../net/fetch'

const initialState = {
  recommendData: []
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case types.GETRECOMMEND: {
      return Object.assign({}, state, {
        recommendData: GetRecommendData()
      })
    }
    case types.ADDORDER: {
      console.log(action.order)
      return Object.assign({}, state, {
        recommendData: [action.order.foodItem, ...state.recommendData]
      })
    }
    default: {
      return state
    }
  }
}
