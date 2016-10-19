import { REQUEST_STOPS, RECEIVE_STOPS, SET_FILTER_VALUE, MARK_STOP_AS_FAVORITE} from './actionTypes'

const initialState = {
    stops: [],
    fetchingStops: false,
    favoriteStopsIds: JSON.parse(localStorage.getItem('favoriteStopsIds')) || []
    currentFilterValue: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_STOPS:
            return Object.assign({}, state, {
                fetchingStops: true
            });
        case RECEIVE_STOPS:
            return Object.assign({}, state, {
                stops: action.stops,
                fetchingStops: false
            });
        case MARK_STOP_AS_FAVORITE:
            return Object.assign({}, state, {
                favoriteStopsIds: state.favoriteStopsIds.indexOf(action.stopId) === -1
                    ? state.favoriteStopsIds.concat([action.stopId])
                    : state.favoriteStopsIds
            });

        case SET_FILTER_VALUE:
            return Object.assign({}, state, {
                currentFilterValue: action.filterValue
            });
        default:
            return state
    }
}