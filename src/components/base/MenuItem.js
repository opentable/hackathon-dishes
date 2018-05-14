import React, { Component } from 'react';

export class MenuItem extends Component {
	render() {
		let { name, description, price} = this.props;
		return (
			<div className="column-two">
				<div>
					<span className="MenuItem__name">{name}</span>
					<span className="MenuItem__price">{price}</span>
				</div>
				<div className="MenuItem__description">{description}</div>
			</div>
		);
	}
}