import Constants from 'constants/example';
import CALL_API from 'middleware/api/callApi';

export default {
  example: () => {
    return {
      [CALL_API]: {
        types: [
          Constants.EXAMPLE_REQUEST,
          Constants.EXAMPLE_REQUEST_SUCCESS,
          Constants.EXAMPLE_REQUEST_FAILURE
        ],
        endpoint: 'example'
      }
    };
  }
};
