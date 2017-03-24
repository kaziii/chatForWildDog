import { GET_All_MESSAGE, GET_MODAL_ISOPEN, GET_USER_NAME } from './action.js';
import { combineReducers } from 'redux';

function messages(state=[],action) {
	switch (action.type) {
		case GET_All_MESSAGE:
			return action.payload
		default:
			return state
	}
}

function unlogin(state=true, action){

	switch(action.type){

		case GET_MODAL_ISOPEN:
			return action.payload
		default:
			return state
	}
}

function username(state='', action){

	switch(action.type){

		case GET_USER_NAME:
			return action.payload
		default:
			return state
	}
}

export default combineReducers({
	messages,
	username,
	unlogin
})