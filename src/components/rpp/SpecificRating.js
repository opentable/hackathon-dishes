import React, { Component } from 'react';
import { StarRating } from '../base/StarRating';
import star from '../../img/star.svg';

export class SpecificRating extends Component {
	render() {
		return (
			<div className="summary-rating summary specific-rating">
				<div style={{display:'flex', alignItems: 'center'}}>
					<img src={star} className="star" />
					<span className="summary-rating--text">{this.props.rating} Food</span>
				</div>
			</div>
		);
	}
}