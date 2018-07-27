import * as types from './actionTypes'

export let addFood = item => {
  return {
    type: types.addFood,
    item: item
  }
}

export let delFood = item => {
  return {
    type: types.delFood,
    item: item
  }
}
