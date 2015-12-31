import * as Constants from '../constants/users'

function fetchUsers () {
    return {
        type: Constants.default.USERS_REQUEST,
        payload: {
            endpoint: 'users'
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
            type: Constants.default.RESET_ERROR_MESSAGE
        }
    }
}
