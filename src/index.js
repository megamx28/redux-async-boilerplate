import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createHashHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import DevTools from './devTools';
import apiMiddleware from './middleware/api';
import reducers from './reducers';
import ExampleIndexView from './views/example';

const reducer = reducers;
const history = createHistory();

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

const store = createStore(reducer, undefined, compose(
  applyMiddleware(
    routerMiddleware(history),
    thunkMiddleware,
    loggerMiddleware,
    apiMiddleware,
  ),
  DevTools.instrument(),
));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={ExampleIndexView} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
