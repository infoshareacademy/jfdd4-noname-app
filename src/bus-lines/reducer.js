import {
    REQUEST_BUSES,
    RECEIVE_BUSES,
    SET_FILTER_VALUE,
    MARK_BUS_AS_FAVORITE
} from './actionTypes'

const initialState = {
    lineNumber: [],
    buses: [],
    currentFilterValue: [],
    favoriteBusesIds: JSON.parse(localStorage.getItem('favoriteBusesIds')) || []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_BUSES:
            return Object.assign({}, state, {
                fetchingLineNumber: true
            });
        case RECEIVE_BUSES:
            return Object.assign({}, state, {
                lineNumber: action.lineNumber,
                buses: action.buses,
                fetchingLineNumber: false
            });
        case SET_FILTER_VALUE:
            return Object.assign({}, state, {
                currentFilterValue: action.filterValue
            });
        case MARK_BUS_AS_FAVORITE:
            return Object.assign({}, state, {
                favoriteBusesIds: state.favoriteBusesIds.indexOf(action.busId) === -1
                    ? state.favoriteBusesIds.concat([action.busId])
                    : state.favoriteBusesIds
            });

        default:
            return state
    }
}