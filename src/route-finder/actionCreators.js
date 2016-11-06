import {
    SAVE_DEPART_STOP,
    SAVE_ARRIVE_STOP
} from './actionTypes'

export function saveDepartStop(departValue) {
    return {
        type: SAVE_DEPART_STOP,
        departValue: departValue
    }
}

export function saveArriveStop(arriveValue) {
    return {
        type: SAVE_ARRIVE_STOP,
        arriveValue: arriveValue
    }
}