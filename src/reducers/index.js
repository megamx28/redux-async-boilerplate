import { combineReducers }  from 'redux';
import { routerReducer }    from 'react-router-redux';
import sessions             from './sessions'
import registrations        from './registrations'
import users                from './users'

export default combineReducers({
  routing: routerReducer,
  sessions: sessions,
  registrations: registrations,
  users: users
});