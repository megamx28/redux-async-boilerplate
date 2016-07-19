import { combineReducers }        from 'redux';
import { routerReducer }          from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import sessions                   from './sessions';
import registrations              from './registrations';
import users                      from './users';
import quotes                     from './quotes';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  sessions: sessions,
  registrations: registrations,
  users: users,
  quotes: quotes
});