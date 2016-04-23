import isPlainObject from 'lodash.isplainobject'
import CALL_API      from '../constants/callApi'

export function createConstants(...constants) {
    return constants.reduce((acc, constant) => {
        acc[constant] = constant
        return acc
    }, {})
}

export function createReducer(initialState, fnMap) {
    return (state = initialState, { type, payload }) => {
        const handler = fnMap[type]
        return handler ? handler(state, payload) : state
    }
}

export function serialiseObj(obj) {
    let str = []

    for (let p in obj) {
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
        }
    }

    return str.join('&')
}

export function getRequestHeaders() {
    return {
        'Content-Type': 'application/x-www-form-urlencoded',
        'credentials': 'same-origin',
        'headers': {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRF-TOKEN': getCookie('XSRF-TOKEN')
        }
    }
}

export function isRSAA(action) {
    return isPlainObject(action) && action.hasOwnProperty(CALL_API)
}

export function normalizeRSAARequest(obj) {
    const optionalTypes = ['method', 'data']

    if (validateRSAARequest(obj)) {
        for (let optionalKey in optionalTypes) {
            if (!obj.hasOwnProperty(optionalTypes[optionalKey])) {
                obj[optionalTypes[optionalKey]] = null
            }
        }
    }

    return obj
}

export function validateRSAARequest(obj) {
    const requiredTypes = ['types', 'endpoint']

    for (let requiredKey in requiredTypes) {
        if (!obj.hasOwnProperty(requiredTypes[requiredKey])) {
            throw new Error('Expected a ' + requiredTypes[requiredKey] + ' key.')
        }
    }

    if (obj['types'].length !== 3) {
        throw new Error('Expected an array of three action types.')
    }

    return true
}

export function getCookie(name) {
    let nameEQ = name + '='
    let ca = document.cookie.split(';')

    for (let i=0; i < ca.length; i++) {
        let c = ca[i]

        while (c.charAt(0) == ' ') {
            c = c.substring(1,c.length)
        }

        if (c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length)
        }
    }

    return null
}