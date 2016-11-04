import {
    LOGIN_SUCCESS,
    RECEIVE_USER,
    LOGOUT_SUCCESS
} from './actionTypes'

import fetch from 'isomorphic-fetch'
import { fetchFavoriteStops } from '../favorites/actionCreators'

var url = 'https://stark-peak-50225.herokuapp.com/';

export function logIn(username, password) {
    return function (dispatch) {
        return fetch(url + 'api/Users/login', {
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
        return fetch(url + 'api/Users/' + userId + '?access_token=' + token)
            .then(response => response.json())
            .then(user => dispatch({
                type: RECEIVE_USER,
                username: user.username,
                userId: user.id
            })).then(() => dispatch(fetchFavoriteStops()))
    }
}

export function logOut(token) {
    return function (dispatch) {
        return fetch(url + 'api/Users/logout?access_token=' + token, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(
            response => {
                dispatch({
                    type: LOGOUT_SUCCESS
                })
            }).then(() => dispatch(fetchFavoriteStops()))
    }
}
