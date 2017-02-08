import React from 'react'
import { Toolbar } from 'react-onsenui'

class HeaderComponent extends React.Component {

    render() {

        return (
            <Toolbar modifier="quiet">
            	<div className='center'>header</div>
            </Toolbar>
        );
    }
}

export default HeaderComponent;
