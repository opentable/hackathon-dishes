import React, { Component } from 'react';
import { SummaryRating } from '../rpp/SummaryRating';
import { FlexContainer } from './FlexContainer';
import { Button } from './Button';
import { LabelWithIcon } from './LabelWithIcon';

export class PromoCard extends Component {
	handleClick(url) {
		window.open(url);
	}
	render() {
		return (
			<div className="PromoCard" onClick={()=>this.handleClick(this.props.url)}>
				<div className="Card__img" style={{backgroundImage:`url(${this.props.img})`}}></div>
				<div className="Card__content">
					<div className="Card__info">
						<div className="Card__dates">{this.props.dates}</div>
						<div className="Card__name">{this.props.name}</div>
					</div>
					<div className="Card__CTA">
						Find a table
					</div>
				</div>
			</div>
		);
	}
}