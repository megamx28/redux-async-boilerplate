import { IndexRoute, Route }  from 'react-router';
import React                  from 'react';
import MainLayout             from 'layouts/main';
import ExampleView            from 'views/example';

export default function configRoutes(store) {
  return (
    <Route component={MainLayout}>
      <Route path="/" component={ExampleView} />
    </Route>
  );
}
