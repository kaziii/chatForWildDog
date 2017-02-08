import React from 'react';
import ReactDom from 'react-dom';

import HeaderComponent from './header/';
import BodyComponent from './body/';
import FooterComponent from './footer/';

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


ReactDom.render(<ApplicationComponent />, document.getElementById('root'));
