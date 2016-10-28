import {
    REQUEST_FAVORITE_STOPS,
    RECEIVE_FAVORITE_STOPS,
    REQUEST_FAVORITE_BUSES,
    RECEIVE_FAVORITE_BUSES,
    ADD_FAVORITE_STOP_BEGIN,
    ADD_FAVORITE_STOP_END,
    ADD_FAVORITE_BUS_BEGIN,
    ADD_FAVORITE_BUS_END
} from './actionTypes'

import fetch from 'isomorphic-fetch'

var favoriteStopsUrl = 'https://stark-peak-50225.herokuapp.com/favoriteStops/';
var favoriteBusesUrl = 'https://stark-peak-50225.herokuapp.com/favoriteBuses/';


function requestFavoriteStops() {
    return {
        type: REQUEST_FAVORITE_STOPS
    }
}
function receiveFavoriteStops() {
    return {
        type: RECEIVE_FAVORITE_STOPS
    }
}

export function fetchFavoriteStops()


function requestFavoriteBuses() {
    return {
        type: REQUEST_FAVORITE_BUSES
    }
}
function receiveFavoriteBuses() {
    return {
        type: RECEIVE_FAVORITE_BUSES
    }
}

export function fetchFavoriteBuses()
