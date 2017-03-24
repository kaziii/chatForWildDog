import React, { Component, PropTypes } from 'react';
import { Modal, Input, Button } from 'react-onsenui';
import { connect } from 'react-redux';
import { updateDispalyName } from '../../store/action';


@connect(
	state => ({unlogin: state.unlogin}),
	dispatch => ({updateDispalyName: userName => dispatch(updateDispalyName(userName))})
)
class ModalComponent extends Component {

	constructor(props) {
	  super(props)
	  this.state={
	  	val: ''
	  }
	}

	handleClick = (userName) => {

		this.props.updateDispalyName(userName);
	}

	handleChange = (e)=> {

		this.setState({val: e.target.value})
	}

	render(){

		return (
			<Modal isOpen={this.props.unlogin} >
				<section style={{margin: '16px'}}>
					<p style={{opacity: 0.6}}>
						Fill in your username here !
					</p>
		    		<p>
						<Input
						  value={this.state.val}
						  onChange={this.handleChange}
						  placeholder='Username'
						  float
						  style={{
						  	backgroundColor: '#999',
						    borderRadius: '4px',
						    paddingLeft: 15
						}}
						/>
		    	    </p>
					<p>
						<Button onClick={this.handleClick.bind(this, this.state.val)}>
			    	    	Submit
			    	    </Button>
				    </p>	
				</section>
			</Modal>
		)
	}
}

// ModalComponent.propTypes = {
// 	unlogin: PropTypes.bool.isRequired
// }

export default ModalComponent;