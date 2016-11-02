import {
    REQUEST_BUSES,
    RECEIVE_BUSES,
    SET_FILTER_VALUE,
    MARK_BUS_AS_FAVORITE
} from './actionTypes'

import fetch from 'isomorphic-fetch'

export function markBusAsFavorite(busId) {
    return {
        type: MARK_BUS_AS_FAVORITE,
        busId: busId
    }
}

function requestBuses() {
    return {
        type: REQUEST_BUSES
    }
}

function receiveBuses(buses) {
    return {
        type: RECEIVE_BUSES,
        lineNumber: buses.sort((l1,l2) => l1.lineNumber - l2.lineNumber),
        buses: buses
    }
}

export const fetchBuses = () => dispatch => {
    dispatch(requestBuses());
    return fetch(`${process.env.PUBLIC_URL}/data/data-buses.json`)
        .then(response => { return response.json()})
        .then(json => { return dispatch(receiveBuses(json))})
};

export function setFilterValue(newFilterValue) {
    return {
        type: SET_FILTER_VALUE,
        filterValue: newFilterValue
    }
};