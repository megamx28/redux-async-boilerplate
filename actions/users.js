import { CALL_API, Schemas } from '../middleware/api'
import * as Constants        from '../constants/users'

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

export default {
    loadUsers: () => {
        return (dispatch, getState) => {
            if (getState().users.size) {
                return null
            }

            return dispatch(fetchUsers())
        }
    },

    resetErrorMessage: () => {
        return {
            type: Constants.RESET_ERROR_MESSAGE
        }
    }
}
