import React from 'react';
import ReactDom from 'react-dom';
import { Provider, connect } from 'react-redux';
// import { createStore } from 'redux';

import { Page } from 'react-onsenui';
import HeaderComponent from './component/header/';
import BodyComponent from './component/body/';
import FooterComponent from './component/footer/';
import ons from 'onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import 'onsenui/css/font_awesome/css/font-awesome.css';

// import Wilddog from 'wilddog';
// import createStore from '../store/store';
import { getItem, loginDog, currentUser } from './store/action';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './store/reducer';
const store = createStore(
	reducer,
	applyMiddleware(thunk)
);

store.dispatch(currentUser());
store.dispatch(getItem());

store.subscribe(() =>
    console.log(store.getState())
)

class ApplicationComponent extends React.Component {
    
    sendMessage = () => {

    	console.error('send Message!');
    }

    renderToolbar() {

    	return (
    		<HeaderComponent />
    	)
    }

    renderBottomToolbar() {

    	return (
    		<FooterComponent />
		)
    }

    render() {

        return (
	        <Page renderToolbar={this.renderToolbar} renderBottomToolbar={this.renderBottomToolbar}>
	            <BodyComponent />
	        </Page>
        );
    }
}

ons.ready(() => ReactDom.render(
<Provider store={store} key='provider'>
	<ApplicationComponent />
</Provider>,
	 document.getElementById('root'))
);
