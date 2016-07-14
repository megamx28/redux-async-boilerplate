import { IndexRoute, Route }  from 'react-router';
import React                  from 'react';
import MainLayout             from '../layouts/main';
import AuthenticatedContainer from '../containers/authenticated';
import RegistrationsNew       from '../views/registrations/new';
import SessionsNew            from '../views/sessions/new';
import UserIndexView          from '../views/user';

export default function configRoutes(store) {
  const _ensureAuthenticated = (nextState, replace, callback) => {
    const { dispatch } = store;
    const { sessions } = store.getState();
    const { currentUser } = sessions;

    if (!currentUser && localStorage.getItem('token')) {
      dispatch(Actions.currentUser());
    } else if (!localStorage.getItem('token')) {
      replace('/sign-in');
    }

    callback();
  };

  return (
    <Route component={MainLayout}>
      <Route path="/sign-up" component={RegistrationsNew} />
      <Route path="/sign-in" component={SessionsNew} />

      <Route path="/" component={AuthenticatedContainer} onEnter={_ensureAuthenticated}>
        <IndexRoute component={UserIndexView} />
      </Route>
    </Route>
  );
}