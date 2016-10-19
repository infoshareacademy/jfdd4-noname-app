import { REQUEST_STOPS, RECEIVE_STOPS, SET_FILTER_VALUE, MARK_STOP_AS_FAVORITE} from './actionTypes'
import fetch from 'isomorphic-fetch'

export function markStopAsFavorite(stopId) {
    return {
        type: MARK_STOP_AS_FAVORITE,
        stopId: stopId
    }
}
function requestStops() {
    return {
        type: REQUEST_STOPS
    }
}

function receiveStops(stops) {
    return {
        type: RECEIVE_STOPS,
        stops: stops
    }
}

export const fetchStops = () => dispatch => {
    dispatch(requestStops());
    return fetch(`${process.env.PUBLIC_URL}/data/data-stops.json`)
        .then(response => { console.log(response); return response.json()})
        .then(json => { console.log(json); return dispatch(receiveStops(json))})
};
}

export function setFilterValue(newFilterValue) {
    return {
        type: SET_FILTER_VALUE,
        filterValue: newFilterValue
    }
}