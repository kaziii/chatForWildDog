import React from 'react';
import { BottomToolbar, Page, ToolBar, Input } from 'react-onsenui';

class FooterComponent extends React.Component {

	renderToolbar() {

		return (
			
			<div></div>
		);
	}

    render() {

        return (
		    <BottomToolbar modifier="quiet">
		    	<div style={{display: 'flex',
		    		height: '100%',
		    		alignItems: 'center'}}>
		    		<Input placeholder="submit messages" style={{
		    			paddingLeft: 15,
		    			flex: 1
		    		}} />
		    	    <span style={{
		    	    	paddingLeft: 10,
		    	    	paddingRight: 15,
		    	    	color: '#616161'
		    	    }}
		    	    >Send</span>
	    		</div>
        	</BottomToolbar>
        );
    }
}

export default FooterComponent;
