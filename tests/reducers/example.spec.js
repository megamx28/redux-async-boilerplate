import Constants from '../../src/constants/example';
import ExampleReducer from '../../src/reducers/example';

describe('Example Reducer', () => {
  it('returns the initial state if the action is unknown', () => {
    let newState = ExampleReducer(undefined, {});

    expect(newState).toEqual({
      users: [],
      loading: false
    });
  });

  it('handles EXAMPLE_REQUEST', () => {
    let newState = ExampleReducer(undefined, { type: Constants.EXAMPLE_REQUEST });

    expect(newState).toEqual({
      users: [],
      loading: false
    });
  });

  it('handles EXAMPLE_REQUEST_SUCCESS', () => {
    let newState = ExampleReducer(undefined, { type: Constants.EXAMPLE_REQUEST_SUCCESS });

    expect(newState).toEqual({
      users: [],
      loading: false
    });
  });

  it('handles EXAMPLE_REQUEST_FAILURE', () => {
    let newState = ExampleReducer(undefined, { type: Constants.EXAMPLE_REQUEST_FAILURE });

    expect(newState).toEqual({
      users: [],
      loading: false
    });
  });
});
