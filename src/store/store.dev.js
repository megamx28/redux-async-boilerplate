import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware }                      from 'react-router-redux';
import createLogger                              from 'redux-logger';
import thunkMiddleware                           from 'redux-thunk';
import DevTools                                  from 'containers/DevTools';
import apiMiddleware                             from 'middleware/api'
import reducers                                  from 'reducers';

const loggerMiddleware = createLogger({
  level: 'info',
  collapsed: true,
});

export default function configureStore(browserHistory) {
  const reduxRouterMiddleware = routerMiddleware(browserHistory);

  const createStoreWithMiddleware = compose(
    applyMiddleware(reduxRouterMiddleware, thunkMiddleware, apiMiddleware, loggerMiddleware),
    DevTools.instrument()
  )(createStore);

  return createStoreWithMiddleware(reducers);
}