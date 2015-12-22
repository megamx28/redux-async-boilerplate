import { getRequestHeaders } from '../utils'

import 'whatwg-fetch'

const API_ROOT = 'http://jsonplaceholder.typicode.com/'

function callApi({ endpoint, method, data }, successCallback, errorCallback) {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

    fetch(fullUrl, {
        method: method || 'GET',
        headers: getRequestHeaders(),
        body: data ? JSON.stringify(data) : undefined
    })
        .then(response => response.json())
        .then(successCallback)
        .catch(errorCallback)
}

export default store => dispatch => action => {
    if (!action.payload || !action.payload.endpoint) {
        return dispatch(action)
    }

    const { type } = action
    const { endpoint, method, data } = action.payload

    dispatch({type: type})

    return callApi({endpoint, method, data}, payload => dispatch({
        type: type + '_SUCCESS',
        payload
    }), err => dispatch({
        type: type + '_ERROR',
        error: err.message || 'Unknown',
        status: (err.response && err.response.status) || 0
    }))
}
