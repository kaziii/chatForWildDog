import React from 'react';
import ReactDom from 'react-dom';

import HeaderComponent from './header/';
import BodyComponent from './body/';
import FooterComponent from './footer/';
import ons from 'onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class ApplicationComponent extends React.Component {

    render() {

        return (
            <div>
                <HeaderComponent />
                <BodyComponent />
                <FooterComponent />
            </div>
        );
    }
}

ons.ready(() => ReactDom.render(<ApplicationComponent />, document.getElementById('root')));