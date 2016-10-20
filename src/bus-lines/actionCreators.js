import {
    REQUEST_LINE_NUMBERS,
    RECEIVE_LINE_NUMBERS,
    SET_FILTER_VALUE

} from './actionTypes'

import fetch from 'isomorphic-fetch'

function requestLineNumbers() {
    return {
        type: REQUEST_LINE_NUMBERS
    }
}

function receiveLineNumbers(lineNumber) {
    return {
        type: RECEIVE_LINE_NUMBERS,
        lineNumber: lineNumber.sort((l1,l2) => l1.lineNumber - l2.lineNumber)
    }
}

export const fetchLineNumbers = () => dispatch => {
    dispatch(requestLineNumbers())
    return fetch(`${process.env.PUBLIC_URL}/data/data-buses.json`)
        .then(response => { console.log(response); return response.json()})
        .then(json => { console.log(json); return dispatch(receiveLineNumbers(json))})
}

export function setFilterValue(newFilterValue) {
    return {
        type: SET_FILTER_VALUE,
        filterValue: newFilterValue
    }
}