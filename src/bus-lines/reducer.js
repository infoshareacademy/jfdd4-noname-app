import {
    REQUEST_LINE_NUMBERS,
    RECEIVE_LINE_NUMBERS,
    SET_FILTER_VALUE
} from './actionTypes'

const initialState = {
    lineNumber: [],
    currentFilterValue: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_LINE_NUMBERS:
            return Object.assign({}, state, {
                fetchingLineNumber: true
            })
        case RECEIVE_LINE_NUMBERS:
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