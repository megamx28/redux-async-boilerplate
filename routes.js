import React                 from 'react'
import { Route, IndexRoute } from 'react-router'
import App                   from './containers/App'
import TestPage              from './views/TestPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={TestPage} />
        <Route path="/testing" component={TestPage} />
    </Route>
)
