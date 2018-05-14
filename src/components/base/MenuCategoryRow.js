import React, { Component } from 'react';

export class MenuCategoryRow extends Component {
	render() {
		return (
			<div className="MenuCategoryRow column-one">
				<span>{this.props.category}</span>
			</div>
		);
	}
}