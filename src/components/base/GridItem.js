import React, { Component } from 'react';

export class GridItem extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		window.open(`/features?name=${this.props.name}`);
	}
	render() {
		return (
			<div className="gridItem" onClick={this.handleClick}>
				{ this.props.name }
			</div>
		);
	}
}