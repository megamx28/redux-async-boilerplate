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
        'Content-Type': 'application/x-www-form-urlencoded'
    }
}