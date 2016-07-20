import CALL_API from 'middleware/api/callApi';
import {
    serialiseObj,
    getRequestHeaders,
    isRSAA,
    normalizeRSAARequest
} from 'utils';
import 'isomorphic-fetch';

function callApi({ endpoint, method, data }, successCallback, errorCallback) {
    let params = getRequestHeaders();
    params.method = method || 'GET';
    params.body = data ? serialiseObj(data) : null;

    fetch(endpoint, params)
        .then(response => response.json())
        .then(successCallback)
        .catch(errorCallback);
}

export default store => dispatch => action => {
    const callAPI = action[CALL_API];

    if (!isRSAA(action)) {
        return dispatch(action);
    }

    const {endpoint, method, data, types} = normalizeRSAARequest(callAPI);
    const [requestType, successType, failureType] = types;

    dispatch({type: requestType});

    return callApi({endpoint, method, data}, payload => dispatch({
        type: successType,
        payload
    }), err => dispatch({
        type: failureType,
        error: err.message || 'Unknown',
        status: (err.response && err.response.status) || 0
    }));
}