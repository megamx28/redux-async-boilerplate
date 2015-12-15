import { CALL_API, Schemas } from '../middleware/api'
import * as Constants        from '../constants/users'

function fetchUsers() {
    return {
        type: Constants.USERS_REQUEST,
        payload: {
            url: 'http://jsonplaceholder.typicode.com/users'
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
    },

    testShane: () => {
        return {
            type: Constants.SHANE
        }
    }
}
