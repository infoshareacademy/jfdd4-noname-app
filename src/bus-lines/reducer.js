import {
    REQUEST_BUSES,
    RECEIVE_BUSES,
    SET_FILTER_VALUE
} from './actionTypes'

const initialState = {
    lineNumber: [],
    currentFilterValue: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_BUSES:
            return Object.assign({}, state, {
                fetchingLineNumber: true
            })
        case RECEIVE_BUSES:
            return Object.assign({}, state, {
                lineNumber: action.lineNumber,
                fetchingLineNumber: false
            })
        case SET_FILTER_VALUE:
            return Object.assign({}, state, {
                currentFilterValue: action.filterValue
            })

        default:
            return state
    }
}