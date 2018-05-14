import React, { Component } from 'react';

export class Container extends Component {
	render() {
		let className = this.props.className ? `container ${this.props.className}` : "container"; 
		let id = this.props.id ? this.props.id : ""; 
		return (
			<div className={className} id={id}>
		      	{this.props.children}
		    </div>
		);
	}
}