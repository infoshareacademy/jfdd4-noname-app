import { REGISTER_HOUR } from './actionTypes'

export function registerHour(date) {
    console.log(date);
    return {
        type: REGISTER_HOUR,
        payload: date
    }}
