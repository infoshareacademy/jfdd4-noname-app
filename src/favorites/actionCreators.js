import {
    REQUEST_FAVORITE_STOPS,
    RECEIVE_FAVORITE_STOPS,
    REQUEST_FAVORITE_BUSES,
    RECEIVE_FAVORITE_BUSES,
    ADD_FAVORITE_STOP_BEGIN,
    ADD_FAVORITE_STOP_END,
    ADD_FAVORITE_BUS_BEGIN,
    ADD_FAVORITE_BUS_END,
    DELETE_FAVORITE_STOP_BEGIN,
    DELETE_FAVORITE_STOP_END,
    DELETE_FAVORITE_BUS_BEGIN,
    DELETE_FAVORITE_BUS_END,
    PREVENT_ADDING_FAVORITES
} from './actionTypes'

import fetch from 'isomorphic-fetch'
import store from '../store'

var favoriteStopsUrl = 'https://stark-peak-50225.herokuapp.com/api/favoriteStops/';
var favoriteBusesUrl = 'https://stark-peak-50225.herokuapp.com/api/favoriteBuses/';


function requestFavoriteStops() {
    return {
        type: REQUEST_FAVORITE_STOPS
    }
}
function receiveFavoriteStops(stops) {
    return {
        type: RECEIVE_FAVORITE_STOPS,
        favoriteStops: stops
    }
}

export function fetchFavoriteStops() {
    return function (dispatch) {
        dispatch(requestFavoriteStops());
        return fetch(favoriteStopsUrl + '?filter[where][userId]=' + store.getState().login.userId )
            .then(response => response.json())
            .then(favoriteStops => dispatch(receiveFavoriteStops(favoriteStops)))
    }
}


function requestFavoriteBuses() {
    return {
        type: REQUEST_FAVORITE_BUSES
    }
}
function receiveFavoriteBuses(buses) {
    return {
        type: RECEIVE_FAVORITE_BUSES,
        favoriteBuses: buses
    }
}

export function fetchFavoriteBuses() {
    return function (dispatch) {
        dispatch(requestFavoriteBuses());
        return fetch(favoriteBusesUrl + '?filter[where][userId]=' + store.getState().login.userId)
            .then(response => response.json())
            .then(favoriteBuses => dispatch(receiveFavoriteBuses(favoriteBuses)))
    }
}


function addFavoriteStopBegin() {
    return {
        type: ADD_FAVORITE_STOP_BEGIN
    }
}
function addFavoriteStopEnd() {
    return {
        type: ADD_FAVORITE_STOP_END
    }
}

export function addFavoriteStop(stopId) {
    return function (dispatch) {
        dispatch(addFavoriteStopBegin());
        return fetch(favoriteStopsUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: stopId,
                userId: store.getState().login.userId
            })
        })
            .then(response => response.json())
            .then(stopId => {
                dispatch(addFavoriteStopEnd());
                dispatch(fetchFavoriteStops())
            })
    }
}


function addFavoriteBusBegin() {
    return {
        type: ADD_FAVORITE_BUS_BEGIN
    }
}
function addFavoriteBusEnd() {
    return {
        type: ADD_FAVORITE_BUS_END
    }
}

export function addFavoriteBus(lineNumber) {
    return function (dispatch) {
        console.debug(store.getState().login.userId)
        if (store.getState().login.userId === null) {
            dispatch({ type: PREVENT_ADDING_FAVORITES })
            return;
        }
        dispatch(addFavoriteBusBegin());
        return fetch(favoriteBusesUrl, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                lineNumber: lineNumber,
                userId: store.getState().login.userId
            })
        })
            .then(response => response.json())
            .then(lineNumber => {
                dispatch(addFavoriteBusEnd());
                dispatch(fetchFavoriteBuses())
            })
    }
}

function deleteFavoriteStopBegin() {
    return {
        type: DELETE_FAVORITE_STOP_BEGIN
    }
}
function deleteFavoriteStopEnd() {
    return {
        type: DELETE_FAVORITE_STOP_END
    }
}

export function deleteFavoriteStop(stopId) {
    console.log('TEST', stopId);
    return function (dispatch) {
        dispatch(deleteFavoriteStopBegin());
        return fetch(favoriteStopsUrl + stopId, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(stopId => {
                dispatch(deleteFavoriteStopEnd());
                dispatch(fetchFavoriteStops())
            })
    }
}


function deleteFavoriteBusBegin() {
    return {
        type: DELETE_FAVORITE_BUS_BEGIN
    }
}
function deleteFavoriteBusEnd() {
    return {
        type: DELETE_FAVORITE_BUS_END
    }
}

export function deleteFavoriteBus(lineNumber) {
    return function (dispatch) {
        dispatch(deleteFavoriteBusBegin());
        return fetch(favoriteBusesUrl + lineNumber, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(lineNumber => {
                dispatch(deleteFavoriteBusEnd());
                dispatch(fetchFavoriteBuses())
            })
    }
}

export function preventAddingFavorites() {
    return {
        type: PREVENT_ADDING_FAVORITES
    }
}