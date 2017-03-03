import { createReducer } from '../utils';
import Constants from '../constants/example';

const initialState = {
  users: [],
  loading: false,
};

export default createReducer(initialState, {
  [Constants.EXAMPLE_REQUEST]: (state, action) => { // eslint-disable-line no-unused-vars
    return state;
  },

  [Constants.EXAMPLE_REQUEST_SUCCESS]: (state, action) => { // eslint-disable-line no-unused-vars
    return state;
  },

  [Constants.EXAMPLE_REQUEST_FAILURE]: (state, action) => { // eslint-disable-line no-unused-vars
    return state;
  },
});
