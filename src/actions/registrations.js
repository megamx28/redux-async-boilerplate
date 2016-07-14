import { push }     from 'react-router-redux';
import { CALL_API } from 'redux-api-middleware';

export default {
	signUp: (data) => {
		return {
			[CALL_API]: {
				endpoint: '/api/v1/registrations',
				method: 'POST',
				body: data,
				types: ['REQUEST', 'SUCCESS', 'FAILURE']
			}
		}
	}
}