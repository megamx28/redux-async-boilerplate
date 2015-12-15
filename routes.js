import React                 from 'react'
import { Route, IndexRoute } from 'react-router'
import App                   from './containers/App'
import UsersPage             from './views/UsersPage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={UsersPage} />
        <Route path="/users" component={UsersPage} />
    </Route>
)
