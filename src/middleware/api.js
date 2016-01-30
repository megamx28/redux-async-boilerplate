import { serialiseObj, getRequestHeaders, isRSAA, normalizeRSAARequest } from '../utils'
import CALL_API                            from '../middleware/api'
import 'isomorphic-fetch'

const API_ROOT = 'http://jsonplaceholder.typicode.com/'

function callApi({ endpoint, method, data }, successCallback, errorCallback) {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

    fetch(fullUrl, {
        method: method || 'GET',
        headers: getRequestHeaders(),
        body: data ? serialiseObj(data) : null
    })
        .then(response => response.json())
        .then(successCallback)
        .catch(errorCallback)
}

export default store => dispatch => action => {
    const callAPI = action[CALL_API]

    if (!isRSAA(action)) {
        return dispatch(action)
    }

    const {endpoint, method, data, types} = normalizeRSAARequest(callAPI)
    const [requestType, successType, failureType] = types

    dispatch({type: requestType})

    return callApi({endpoint, method, data}, payload => dispatch({
        type: successType,
        payload
    }), err => dispatch({
        type: failureType,
        error: err.message || 'Unknown',
        status: (err.response && err.response.status) || 0
    }))
}
