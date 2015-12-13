import * as ActionTypes                 from '../actions'
import merge                            from 'lodash/object/merge'
import { routerStateReducer as router } from 'redux-router'
import { combineReducers }              from 'redux'
import { Map }                          from 'immutable'

// Updates an entity cache in response to any action with response.users
function users(state = Map({users: {}}), action) {
    if (action.response && action.response.entities) {
        return state.set('users', users => users.push(action.response.entities.users.undefined[0]))
    }

    return state
}

// Updates error message to notify about the failed fetches.
function errorMessage(state = null, action) {
    const { type, error } = action

    if (type === ActionTypes.RESET_ERROR_MESSAGE) {
        return null
    } else if (error) {
        return action.error
    }

    return state
}

const rootReducer = combineReducers({
    users,
    errorMessage,
    router
})

export default rootReducer
