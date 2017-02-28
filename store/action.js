import Wilddog from 'wilddog';

let config = {
	syncURL: "https://chlsg88.wilddogio.com"
};

wilddog.initializeApp(config);

let ref = wilddog.sync().ref();


// export function or action type

export const GET_All_MESSAGE = 'GET_All_MESSAGE';
export const TEST = 'TEST';

export function getItem (){

	return (dispatch, getState)=> {

		ref.on('value',(snapshot)=>{

			let array = snapshot.val()

			dispatch({
				type: 'GET_All_MESSAGE',
				payload: array.messages
			})
		})
	}
}

export function test () {

	return (dispatch)=> {

		dispatch({
			type: 'TEST',
			payload: 'fix'
		})
	}
}

