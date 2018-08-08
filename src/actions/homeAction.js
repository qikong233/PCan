import * as types from './actionTypes'

export let getRecommend = () => {
    return {
        type: types.GETRECOMMEND
    }
}

export let addOrder = (item) => {
    return {
        type: types.ADDORDER,
        order: item,
    }
}