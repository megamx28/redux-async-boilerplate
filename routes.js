import React     from 'react'
import { Route } from 'react-router'
import App       from './containers/App'
import TestPage  from './views/TestPage'

export default (
    <Route path="/" component={App}>
        <Route path="/testing" component={TestPage} />
    </Route>
)
