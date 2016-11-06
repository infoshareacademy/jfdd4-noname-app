import {
    SAVE_DESTINATIONS
} from './actionTypes'


const initialState = {
    departValue: [],
    arriveValue: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_DESTINATIONS:
            return Object.assign({}, state, {
                departValue: action.departValue,
                arriveValue: action.arriveValue
            });
        default:
            return state
    }
}