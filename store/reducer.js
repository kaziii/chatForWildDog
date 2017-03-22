import { GET_All_MESSAGE } from './action.js';
import { combineReducers } from 'redux';

function messages(state=[],action) {
	switch (action.type) {
		case GET_All_MESSAGE:
			return action.payload
		default:
			return state
	}
}

export default combineReducers({
	messages
})