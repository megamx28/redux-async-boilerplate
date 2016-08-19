import { createReducer } from 'utils';
import Constants         from 'constants/example';

const initialState = {
  users: []
};

export default createReducer(initialState, {
  [Constants.EXAMPLE_REQUEST]: (state, action) => {
    return state;
  },

  [Constants.EXAMPLE_REQUEST_SUCCESS]: (state, action) => {
    return state;
  },

  [Constants.EXAMPLE_REQUEST_FAILURE]: (state, action) => {
    return state;
  }
});
