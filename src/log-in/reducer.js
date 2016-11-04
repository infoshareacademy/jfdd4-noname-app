import {
    LOGIN_SUCCESS,
    RECEIVE_USER,
    LOGOUT_SUCCESS
} from './actionTypes'

const initialState = {
    key: null,
    username: 'Zaloguj się',
    userId: ''
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
                username: 'Witaj, ' + action.username,
                userId: action.userId
            })
        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                username: 'Zaloguj się',
                userId: ''
            })
        default:
            return state
    }
}
