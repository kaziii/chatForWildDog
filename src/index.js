import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { Page } from 'react-onsenui';
import HeaderComponent from './header/';
import BodyComponent from './body/';
import FooterComponent from './footer/';
import ons from 'onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import 'onsenui/css/font_awesome/css/font-awesome.css';

import Wilddog from 'wilddog';


// let store = createStore();
class ApplicationComponent extends React.Component {
    
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

ons.ready(() => ReactDom.render(<ApplicationComponent />, document.getElementById('root')));
