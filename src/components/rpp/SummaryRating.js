import React, { Component } from 'react';
import { StarRating } from '../base/StarRating';

export class SummaryRating extends Component {
	render() {
		return (
			<div className="summary-rating summary">
				<div style={{display:'flex', alignItems: 'center'}}>
					<StarRating rating={this.props.rating} />
					<span className={`summary-rating--text ${this.props.size}`}>({this.props.ratingCount})</span>
				</div>
			</div>
		);
	}
}