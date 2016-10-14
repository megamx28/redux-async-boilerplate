import request from 'superagent';
import _ from 'lodash';
import CALL_API from './callApi';
import { isRSAA, normalizeRSAARequest } from '../../utils';

function callApi({ endpoint, method, data }, successCallback, errorCallback) {
  let params = {};

  params.method = method || 'GET';
  params.body = data;

  request(params.method, endpoint)
    .send(params.body)
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err || !response.ok) {
        return errorCallback(response.body.error);
      }

      return successCallback(response.body);
    });
}

export default store => dispatch => (action) => {
  const callAPI = action[CALL_API];

  if (!isRSAA(action)) {
    return dispatch(action);
  }

  const { endpoint, method, data, types } = normalizeRSAARequest(callAPI);
  const [requestType, successType, failureType] = types;

  dispatch({ type: requestType });

  return callApi({ endpoint, method, data }, payload => dispatch({
    type: successType,
    payload
  }), err => dispatch({
    type: failureType,
    error: err.message || 'Unknown',
    status: (err.response && err.response.status) || 0
  }));
};
