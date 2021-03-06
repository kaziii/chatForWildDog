import React from 'react';
import { connect } from 'react-redux';
import { Toolbar, Page } from 'react-onsenui';
import { findDOMNode } from 'react-dom';

import $ from 'jquery';

// const messageList = [
// 	{author: 'john', message: 'hello word', key: 1},
// 	{author: 'killer', message: 'my name killer', key: 2}
// ];

const Message = ({data, author}) => {

	let messageStyle = {
		padding: 10,
		paddingLeft: 20,
		paddingRight:20,
		borderRadius:15,
		backgroundColor: 'white',
		color: '#535050',
		wordBreak: 'break-all'
	};

	if (data.author !== author) {

		let authorElement = (

			<div style={{fontSize: 24 *0.6, paddingBottom:5 ,paddingLeft: 10, color: '#928585'}}>
				{data.author}
			</div>			
		);
		
		return (
			<div style={{paddingTop:10, paddingLeft: 14}}>
				{authorElement}
				<div style={{display: 'flex'}}>
					<div style={messageStyle}>{data.message}</div>
					<div style={{flex: 1, minWidth: '20%'}} />
				</div>
			</div>
		)
	} else {

		messageStyle ={
			padding: 10,
			paddingLeft: 20,
			paddingRight: 20,
			borderRadius: 15,
			backgroundColor: '#8BDB3A',
			color: '#535050',
			wordBreak: 'break-all'
		}

		return (
			<div style={{paddingTop:10, paddingRight: 14}}>
				<div style={{display: 'flex'}}>
					<div style={{flex: 1, minWidth: '20%'}} />
					<div style={messageStyle}>{data.message}</div>
				</div>
			</div>
		);
	}
};

class BodyComponent extends React.Component {

	scrollToBottom (){

		var node = this.refs.endSpan;

		node.scrollIntoView(false);

	}

	componentDidUpdate () {

		this.scrollToBottom();		
	}

    render() {

    	return (
			<div>
	    		{this.props.messages.map((data) => {

	    			return (

	    				<Message data={data} author={this.props.username} key={this.props.messages.indexOf(data)}/>
	    			);
	    		})}

		    	<div className="end" style={{height: 15}} ref="endSpan" />

	    	</div>
    	)
    }
}

BodyComponent.propTypes = {

	messages: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {

	if (Array.isArray(state.messages) && state.messages.length > 0 ) {

		return {
			messages: state.messages,
			username: state.username	
		}
	}

	return {
		messages: [],
		username: ''
	}
}

export default connect(

	mapStateToProps
)(BodyComponent);