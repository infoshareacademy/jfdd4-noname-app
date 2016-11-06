import {
    SAVE_DESTINATIONS
} from './actionTypes'

export function saveDestinations(departValue, arriveValue) {
    return {
        type: SAVE_DESTINATIONS,
        departValue: departValue,
        arriveValue: arriveValue
    }
}