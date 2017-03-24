import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

export default () => {

	const store = applyMiddleware(
		thunk
	)(createStore)(reducer);

	return store
}