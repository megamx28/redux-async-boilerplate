import { createReducer }     from '../utils'
import * as Constants        from '../constants/users'
import { Map, List, fromJS } from 'immutable'

const initialState = {
  users: []
}

export default createReducer(initialState, {
  [Constants.default.USERS_REQUEST]: (state, action) => {
    return state
  },

  [Constants.default.USERS_REQUEST_SUCCESS]: (state, action) => {
    if (action) {
      return state.users.concat(action)
    }

    return state
  },

  [Constants.default.USERS_REQUEST_FAILURE]: (state, action) => {
    return state
  }
})
