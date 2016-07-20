import React, { PropTypes }         from 'react';
import { Provider }                 from 'react-redux';
import { Router, RoutingContext }   from 'react-router';
import invariant                    from 'invariant';
import configRoutes                 from 'routes/index';
import DevTools                     from 'containers/DevTools';

const propTypes = {
  routerHistory: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired
};

const Root = ({ routerHistory, store }) => {
  invariant(
    routerHistory,
    '<Root /> needs either a routingContext or routerHistory to render.'
  );

  return (
    <Provider store={store}>
      <div>
        <Router history={routerHistory}>
          {configRoutes(store)}
        </Router>

        <DevTools />
      </div>
    </Provider>
  );
};

Root.propTypes = propTypes;

export default Root;
