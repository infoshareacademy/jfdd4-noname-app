import {
    LOGIN_ATTEMPT,
    LOGIN_FAILURE,
    LOGIN_SUCCESS,
    RECEIVE_USER,
} from './actionTypes'

import fetch from 'isomorphic-fetch'

export function logIn(username, password) {
    return function (dispatch) {
        return fetch('http://localhost:3010/api/Users/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        }).then(
            response => response.json()
        ).then(
            authData => {
                dispatch({
                    type: LOGIN_SUCCESS,
                    key: authData.id,
                    userId: authData.userId
                })

                dispatch(fetchUser(authData.id, authData.userId))
            }
        )

    }
}

export function fetchUser(token, userId) {
    return function (dispatch) {
        return fetch('http://localhost:3010/api/Users/' + userId + '?access_token=' + token)
            .then(response => response.json())
            .then(user => dispatch({
                type: RECEIVE_USER,
                username: user.username
            }))
    }
}
