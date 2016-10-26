import { REGISTER_HOUR } from './actionTypes'
import fetch from 'isomorphic-fetch'

export function registerHour(value) {
    console.log(value);
    return {
        type: REGISTER_HOUR,
        payload: value
    }}
