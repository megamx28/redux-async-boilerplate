import expect, { createSpy, spyOn, isSpy } from 'expect';

import CALL_API from '../../src/middleware/api/callApi';
import Constants from '../../src/constants/example';
import ExampleActions from '../../src/actions/example';

describe('Actions:Example', () => {
  describe('#example()', () => {
    it('returns action CALL_API info', () => {
      let action = ExampleActions.example();

      expect(action[CALL_API]).toEqual({
        types: [
          Constants.EXAMPLE_REQUEST,
          Constants.EXAMPLE_REQUEST_SUCCESS,
          Constants.EXAMPLE_REQUEST_FAILURE
        ],
        endpoint: 'example'
      });
    });
  });
});
