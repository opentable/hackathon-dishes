import React, { Component } from 'react';
import { LabelWithIcon } from '../base/LabelWithIcon';

export class CuisineWithIcon extends Component {
	render() {
		return (
			<LabelWithIcon
				text = {this.props.cuisine}
				img = "/img/ic_cuisine.svg"
				imgAlt = "cuisine"
			/>
		);
	}
}