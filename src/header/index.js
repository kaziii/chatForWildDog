import React from 'react'
import { Toolbar } from 'react-onsenui'

class HeaderComponent extends React.Component {

    render() {

        return (
            <Toolbar modifier="quiet">
            	<div className='center'>WIDDOG_CHAT</div>
            </Toolbar>
        );
    }
}

export default HeaderComponent;
