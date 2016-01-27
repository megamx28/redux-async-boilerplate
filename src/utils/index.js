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
        'credentials': 'same-origin'
    }
}