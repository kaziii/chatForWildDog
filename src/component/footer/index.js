import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMsg } from '../../store/action';
import { BottomToolbar, Page, ToolBar, Input } from 'react-onsenui';

class FooterComponent extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			input: "",
			author: 'john'
		}

	}

	componentDidMount(){

		this.setState({
			input: ""
		})
	}

	handleClick = (message)=> {

		this.props.dispatch(setMsg(message)).then(()=>{
			this.setState({
				input: ""
			})
		})
	}

	handleChange = (e)=> {

		this.setState({input: e.target.value})
	}

    render() {

        return (
		    <BottomToolbar modifier="quiet">
		    	<div style={{display: 'flex',
		    		height: '100%',
		    		alignItems: 'center'}}>
		    		<Input placeholder="submit messages" 
			    		value={this.state.input}
			    		onChange={this.handleChange}
			    		style={{
			    			paddingLeft: 15,
			    			flex: 1
			    		}}
		    		/>
		    	    <span style={{
		    	    	paddingLeft: 10,
		    	    	paddingRight: 15,
		    	    	color: '#616161'
		    	    }}

		    	    onClick={this.handleClick.bind(this, {
		    	    	message: this.state.input,
		    	    	author: this.state.author
		    	    })}
		    	    >Send</span>
	    		</div>
        	</BottomToolbar>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

	return {

		setMsg: (message) => {
			bindActionCreators(setMsg(message), dispatch)	
		}
	}
}

export default connect(
	mapDispatchToProps
)(FooterComponent);