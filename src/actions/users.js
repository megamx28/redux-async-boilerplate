import * as Constants from '../constants/users'
import { CALL_API }   from '../middleware/api'

export default {
    loadUsers: () => {
        return {
            [CALL_API]: {
                types: [
                    Constants.default.USERS_REQUEST,
                    Constants.default.USERS_REQUEST_SUCCESS,
                    Constants.default.USERS_REQUEST_FAILURE
                ],
                endpoint: 'users',
                method: 'get',
                data: ''
            }
        }
    },

    resetErrorMessage: () => {
        return {
            type: Constants.default.RESET_ERROR_MESSAGE
        }
    }
}
