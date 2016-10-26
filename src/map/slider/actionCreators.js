import { REGISTER_HOUR } from './actionTypes'

export function registerHour(value) {
    console.log(value);
    return {
        type: REGISTER_HOUR,
        payload: value.toFixed(2)
    }}
