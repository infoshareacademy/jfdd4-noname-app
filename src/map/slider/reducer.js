import { REGISTER_HOUR } from './actionTypes'

const initialState = {
    hourValue: 0,
}

export default (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case REGISTER_HOUR:
            return Object.assign({}, state, {
                hourValue: action.payload
            })
        default:
            return state
    }
}

