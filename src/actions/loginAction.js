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

export let showld = () => {
    return {
        type: types.SHOWLD
    }
}

export let dissld = () => {
    return {
        type: types.DISSLD
    }
}

export let showerr = () => {
    return {
        type: types.SHOWERR
    }
}

export let disserr = () => {
    return {
        type: types.DISSERR
    }
}