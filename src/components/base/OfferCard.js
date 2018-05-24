import React, { Component } from 'react';
import IconSparkle from '../../img/ic_sparkle.svg';
import { SummaryRating } from '../rpp/SummaryRating';

export class OfferCard extends Component {
	render() {
		return (
			<div className="OfferCard">
				<div className="Card__icon">
					<img src={IconSparkle} />
				</div>
				<div className="Card__info">
					<div className="Card__name">{this.props.name}</div>
					<div className="Card__restName">{this.props.restName}</div>
				</div>
			</div>
		);
	}
}