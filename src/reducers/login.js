import * as types from '../actions/actionTypes'

const initialState = {
  isLogin: true
}

export default function login(state = initialState, action) {
  switch (action.type) {
    case types.LOGIN: {
      return Object.assign({}, state, {
        isLogin: true
      })
    }
    case types.LOGOUT: {
      return Object.assign({}, state, {
        isLogin: false
      })
    }
    default: {
      return state
    }
  }
}
