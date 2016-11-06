import {
    SAVE_DEPART_STOP,
    SAVE_ARRIVE_STOP
} from './actionTypes'


const initialState = {
    departValue: [],
    arriveValue: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SAVE_DEPART_STOP:
            return Object.assign({}, state, {
                departValue: action.departValue
            });
        case SAVE_ARRIVE_STOP:
            return Object.assign({}, state, {
                arriveValue: action.arriveValue
            });
        default:
            return state
    }
}