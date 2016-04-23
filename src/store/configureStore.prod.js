import { createStore, applyMiddleware, compose } from 'redux'
import { reduxReactRouter }                      from 'redux-router'
import { browserHistory }                        from 'react-router'
import routes                                    from '../routes'
import thunk                                     from 'redux-thunk'
import api                                       from '../middleware/api'
import rootReducer                               from '../reducers'

const finalCreateStore = compose(
    applyMiddleware(thunk, api),
    reduxReactRouter({ routes, browserHistory })
)(createStore)

export default function configureStore(initialState) {
    return finalCreateStore(rootReducer, initialState)
}
