import { combineReducers }        from 'redux';
import { routerReducer }          from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import sessions                   from 'reducers/sessions';
import registrations              from 'reducers/registrations';
import users                      from 'reducers/users';
import quotes                     from 'reducers/quotes';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  sessions: sessions,
  registrations: registrations,
  users: users,
  quotes: quotes
});