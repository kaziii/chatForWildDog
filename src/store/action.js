import { ref, auth } from '../../model/wilddog';


// export function or action type

export const GET_All_MESSAGE = 'GET_All_MESSAGE';
export const TEST = 'TEST';

export const CURRENT_USER = 'CURRENT_USER';
export function currentUser() {

	return dispatch => {

		auth.onAuthStateChanged (user => {

			if (user) {

				console.log(user);
			} 
			else {

				dispatch(loginDog());
			}
		})
	}	
}

export const LOGIN_DOG = 'LOGIN_DOG';
export function loginDog () {

	return (dispatch, getState) => {

		auth.signInAnonymously().then(function (user) {

			dispatch({
				type: 'LOGIN_DOG'
			})
		}).catch(function(err){

			console.error(err);
		})
	}
}

export function getItem (){

	return (dispatch, getState)=> {

		return ref.once('value').then((snapshot)=>{

			let array = snapshot.val();
			let vaule = [];

			if (array.messages) {
				for (let i in array.messages){
					vaule.push(array.messages[i])
				}
			}

			dispatch({
				type: 'GET_All_MESSAGE',
				payload: vaule
			});
		}).catch((err)=>{

			console.error(err);
		})
		// ref.once('value',(snapshot)=>{

		// 	let array = snapshot.val();
		// 	let vaule = [];

		// 	if (array.messages) {
		// 		for (let i in array.messages){
		// 			vaule.push(array.messages[i])
		// 		}
		// 	}

		// 	dispatch({
		// 		type: 'GET_All_MESSAGE',
		// 		payload: vaule
		// 	});
		// })
	}
}

export const PUSH_MSG = 'PUSH_MSG';
export function setMsg(message) {

	return (dispatch) => {

		var postRef = ref.child("messages");
		
		return postRef.push(message).then(function(response){

			dispatch({
				type: 'PUSH_MSG'
			})
		}).catch(function(err) {
			console.error(err)
		})
	}
}

