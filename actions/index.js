import { CALL_API, Schemas } from '../middleware/api'

export const USERS_REQUEST = 'USERS_REQUEST'
export const USERS_SUCCESS = 'USERS_SUCCESS'
export const USERS_FAILURE = 'USERS_FAILURE'

// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchUsers() {
    return {
        [CALL_API]: {
            types: [USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE],
            endpoint: `users`,
            schema: Schemas.USERS_ARRAY
        }
    }
}

// Fetches a single user from API unless it is cached.
// Relies on Redux Thunk middleware.
export function loadUsers(login, requiredFields = []) {
    return (dispatch, getState) => {
        const users = getState().users
        if (users.size) {
            return null
        }

        return dispatch(fetchUsers())
    }
}

export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE'

// Resets the currently visible error message.
export function resetErrorMessage() {
    return {
        type: RESET_ERROR_MESSAGE
    }
}
