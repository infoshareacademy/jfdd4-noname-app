import { REQUEST_STOPS, RECEIVE_STOPS, SET_FILTER_VALUE} from './actionTypes'

const initialState = {
    stops: [],
    fetchingCourses: false,
    currentFilterValue: ''
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
        case SET_FILTER_VALUE:
            return Object.assign({}, state, {
                currentFilterValue: action.filterValue
            })
        default:
            return state
    }
}