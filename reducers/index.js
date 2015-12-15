import { combineReducers }              from 'redux'
import { routeReducer }                 from 'redux-simple-router'
import { routerStateReducer as router } from 'redux-router'
import users                            from './users'

export default combineReducers({
    users,
    router
})
