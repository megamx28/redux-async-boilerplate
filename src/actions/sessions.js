import { push }     from 'react-router-redux';
import Constants    from '../constants';
import { CALL_API } from 'redux-api-middleware';

export default {
	signIn: (email, password) => {
		return {
			[CALL_API]: {
				endpoint: '/api/v1/sessions',
				method: 'POST',
				body: {
					email: email,
					password: password
				},
				types: ['REQUEST', 'SUCCESS', 'FAILURE']
			}
		}
	},

	currentUser: () => {
		return {
			[CALL_API]: {
				endpoint: '/api/v1/current-user',
				method: 'GET',
				types: ['REQUEST', 'SUCCESS', 'FAILURE']
			}
		}
	},

	signOut: () => {
		return {
			[CALL_API]: {
				endpoint: '/api/v1/sessions',
				method: 'DELETE',
				types: ['REQUEST', 'SUCCESS', 'FAILURE']
			}
		}
	}
}
