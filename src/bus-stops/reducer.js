import { REQUEST_STOPS, RECEIVE_STOPS} from './actionTypes'

const initialState = {
    stops: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_STOPS:
            return Object.assign({}, state, {
                fetchingStops: true
            })
        case RECEIVE_STOPS:
            return Object.assign({}, state, {
                stops: action.stops,
                fetchingStops: false
            })

        default:
            return state
    }
}