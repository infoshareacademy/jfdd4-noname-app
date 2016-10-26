import { REGISTER_HOUR } from './actionTypes'


export default (state = 0, action) => {
    console.log(action, "hhhhhhhhhhhhhhhhhhhhhhhhhh");
    switch (action.type) {
        case REGISTER_HOUR:
            return action.payload;
        default:
            return state
    }
}
