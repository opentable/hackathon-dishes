import React, { Component } from 'react';

export class RatingBreakdown extends Component {
	render() {
		return (
			<div className="RatingBreakdown">
				<div className="RatingBreakdown__rating">{this.props.rating}</div>
				<div className="RatingBreakdown__type">{this.props.type}</div>
			</div>
		);
	}
}