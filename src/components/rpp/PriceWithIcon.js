import React, { Component } from 'react';
import { LabelWithIcon } from '../base/LabelWithIcon';

export class PriceWithIcon extends Component {
	render() {
		return (
			<LabelWithIcon
				text = {this.props.price}
				img = "/img/ic_payment.svg"
				imgAlt = "price"
			/>
		);
	}
}