import * as types from './actionTypes'

export let sendmsg = (action) => {
  return {
    type: types.SENDMSG,
    msg: action.msg,
    name: action.name
  }
}
