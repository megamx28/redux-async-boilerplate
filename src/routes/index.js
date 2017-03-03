import { IndexRoute, Route } from 'react-router';
import React from 'react';
import MainLayout from '../layouts/main';
import ExampleIndexView from '../views/example';

export default function configRoutes() {
  return (
    <Route component={MainLayout}>
      <Route component={IndexRoute} />
      <Route path="/" component={ExampleIndexView} />
    </Route>
  );
}
