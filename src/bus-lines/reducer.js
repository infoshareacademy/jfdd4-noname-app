import {
    REQUEST_LINE_NUMBERS,
    RECEIVE_LINE_NUMBERS
} from './actionTypes'

const initialState = {
    lineNumber: [],
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

        default:
            return state
    }
}