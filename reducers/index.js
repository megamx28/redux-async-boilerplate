import * as ActionTypes                 from '../actions/users'
import merge                            from 'lodash/object/merge'
import { routerStateReducer as router } from 'redux-router'
import { combineReducers }              from 'redux'
import { Map, fromJS }                  from 'immutable'

const initialState = Map({
    users: []
})

function users(state = initialState.get('users'), action) {
    if (action.response && action.response.entities && action.response.entities.users) {
        let usersObj = action.response.entities.users
        let arr = Object.keys(usersObj).map((k) => usersObj[k])

        return state.concat(arr)
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
