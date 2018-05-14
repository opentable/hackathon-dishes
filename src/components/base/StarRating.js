import React, { Component } from 'react';

export class StarRating extends Component {
	render() {
		var starWidth = (this.props.rating/5)*100 + "%";
		return (
			<div className="StarRating">
				<div className="StarRating__fullStars" style={{width: starWidth}}></div>
			</div>
		);
	}
}