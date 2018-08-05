import * as types from '../actions/actionTypes'

const initialState = {
  isLogin: true,
  loading: false,
  err: false
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
    case types.SHOWLD: {
      return Object.assign({}, state, {
        loading: true,
        err: false,
      })
    }
    case types.DISSLD: {
      return Object.assign({}, state, {
        loading: false
      })
    }
    case types.SHOWERR: {
      return Object.assign({}, state, {
        err: true,
      })
    }
    case types.DISSERR: {
      return Object.assign({}, state, {
        err: false,
        loading: false,
      })
    }
    default: {
      return state
    }
  }
}
