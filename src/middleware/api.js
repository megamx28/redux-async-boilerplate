import { getRequestHeaders } from '../utils'
import 'isomorphic-fetch'

const API_ROOT = 'http://jsonplaceholder.typicode.com/'

function callApi({ endpoint, method, data }, successCallback, errorCallback) {
    const fullUrl = (endpoint.indexOf(API_ROOT) === -1) ? API_ROOT + endpoint : endpoint

    fetch(fullUrl, {
        method: method || 'GET',
        headers: getRequestHeaders(),
        body: data ? serialiseObj(data) : undefined
    })
        .then(response => response.json())
        .then(successCallback)
        .catch(errorCallback)
}

function serialiseObj(obj) {
    let str = []

    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
        }
    }

    return str.join('&')
}

export const CALL_API = Symbol('Call API')

export default store => dispatch => action => {
    const callAPI = action[CALL_API]

    if (typeof callAPI === 'undefined') {
        return dispatch(action)
    }

    const {endpoint, method, data, types} = callAPI
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
