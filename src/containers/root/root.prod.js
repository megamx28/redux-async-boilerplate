import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';
import invariant from 'invariant';
import configRoutes from '../../routes/index';

const Root = ({ routerHistory, store }) => {
  invariant(
    routerHistory,
    '<Root /> needs either a routingContext or routerHistory to render.',
  );

  return (
    <Provider store={store}>
      <Router history={routerHistory}>
        {configRoutes(store)}
      </Router>
    </Provider>
  );
};

Root.propTypes = {
  routerHistory: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default Root;
