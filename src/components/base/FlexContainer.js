import React, { Component } from 'react';

export class FlexContainer extends Component {
	render() {
		let className = this.props.className ? this.props.className : ""; 
		let flexWrap = this.props.wrap ? " wrap" : "";
		return (
    		<div className={`flex-container ${flexWrap} ${className}`}>
	      		{this.props.children}
	    	</div>
		);
	}
}