import {
    REQUEST_FAVORITE_STOPS,
    RECEIVE_FAVORITE_STOPS,
    REQUEST_FAVORITE_BUSES,
    RECEIVE_FAVORITE_BUSES,
} from './actionTypes'

const initialState = {
    fetchingFavoriteStops: false,
    fetchingFavoriteBuses: false,
    favoriteStops: [],
    favoriteBuses: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_FAVORITE_STOPS:
            return Object.assign({}, state, {
                fetchingFavoriteStops: true
            });
        case RECEIVE_FAVORITE_STOPS:
            return Object.assign({}, state, {
                favoriteStops: action.favoriteStops,
                fetchingFavoriteStops: false
            });
        case REQUEST_FAVORITE_BUSES:
            return Object.assign({}, state, {
                fetchingFavoriteBuses: true
            });
        case RECEIVE_FAVORITE_BUSES:
            return Object.assign({}, state, {
                favoriteBuses: action.favoriteBuses,
                fetchingFavoriteBuses: false
            });
        default:
            return state
    }
}