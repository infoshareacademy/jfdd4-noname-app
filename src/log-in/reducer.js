import {
    LOGIN_SUCCESS,
    RECEIVE_USER,
    LOGOUT_SUCCESS
} from './actionTypes'

const initialState = {
    key: null,
    username: 'Zaloguj się'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state, key: action.key}
        // return Object.assign({}, state, {
        //     key: action.key
        // })
        case RECEIVE_USER:
            return Object.assign({}, state, {
                username: 'Witaj, ' + action.username
            })
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                username: 'Zaloguj się'
            })
        default:
            return state
    }
}
