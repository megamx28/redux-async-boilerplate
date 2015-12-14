import { CALL_API, Schemas } from '../middleware/api'
import * as Constants        from '../constants/users'

// Relies on the custom API middleware defined in ../middleware/api.js.
function fetchUsers() {
    return {
        [CALL_API]: {
            types: [
                Constants.USERS_REQUEST,
                Constants.USERS_SUCCESS,
                Constants.USERS_FAILURE
            ],
            endpoint: 'users',
            schema: Schemas.USERS_ARRAY
        }
    }
}

// Fetches a single user from API unless it is cached.
// Relies on Redux Thunk middleware.
export function loadUsers(login, requiredFields = []) {
    return (dispatch, getState) => {
        if (getState().users.size) {
            return null
        }

        return dispatch(fetchUsers())
    }
}

// Resets the currently visible error message.
export function resetErrorMessage() {
    return {
        type: Constants.RESET_ERROR_MESSAGE
    }
}
