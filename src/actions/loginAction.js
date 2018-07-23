import * as types from './actionTypes'

export let login = () => {
    return {
        type: types.LOGIN
    }
}

export let logout = () => {
    return {
        type: types.LOGOUT
    }
}