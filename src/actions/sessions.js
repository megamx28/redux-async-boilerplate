import { push }     	   from 'react-router-redux';
import { CALL_API } 	   from '../middleware/api/callApi';
import Constants    	   from '../constants';
import { defaultHeaders } from '../utils';

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
				headers: defaultHeaders,
				types: ['REQUEST', 'SUCCESS', 'FAILURE']
			}
		}
	},

	currentUser: () => {
		return {
			[CALL_API]: {
				endpoint: '/api/v1/current-user',
				method: 'GET',
				headers: defaultHeaders,
				types: ['REQUEST', 'SUCCESS', 'FAILURE']
			}
		}
	},

	signOut: () => {
		return {
			[CALL_API]: {
				endpoint: '/api/v1/sessions',
				method: 'DELETE',
				headers: defaultHeaders,
				types: ['REQUEST', 'SUCCESS', 'FAILURE']
			}
		}
	}
}
