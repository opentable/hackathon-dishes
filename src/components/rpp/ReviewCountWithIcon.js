import React, { Component } from 'react';
import { LabelWithIcon } from '../base/LabelWithIcon';

export class ReviewCountWithIcon extends Component {
	render() {
		return (
			<LabelWithIcon
				text = {`${this.props.reviewCount} reviews`}
				img = "/img/ic_review.svg"
				imgAlt = "reviews"
			/>
		);
	}
}