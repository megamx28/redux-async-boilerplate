const token = btoa('username' + ':' + 'password')

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

export function getRequestHeaders() {
    return {
        Authorization: 'Basic ' + token,
        Accept: 'application/json'
    }
}

export function setRequestHeaders(xhr) {
    xhr.setRequestHeader('Authorization', 'Basic ' + token)
    xhr.setRequestHeader('Accept', 'application/json')
}
