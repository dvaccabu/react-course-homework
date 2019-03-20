import * as ActionTypes from './ActionTypes'
const DEFAULT_STATE = { open: false }

export const modal = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case ActionTypes.OPEN_MODAL:
            return {open: true}
        case ActionTypes.CLOSE_MODAL:
            return {open: false}
        default:
            return state
    }
}