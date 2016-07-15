import { push }     	    from 'react-router-redux';
import { CALL_API } 	    from '../middleware/api/callApi';
import { defaultHeaders } from '../utils';

export default {
	signUp: (data) => {
		return {
			[CALL_API]: {
				endpoint: '/api/v1/registrations',
				method: 'POST',
				body: data,
				headers: defaultHeaders,
				types: ['REQUEST', 'SUCCESS', 'FAILURE']
			}
		}
	}
}