import React, { Component } from 'react';
import { SummaryRating } from '../rpp/SummaryRating';
import { FlexContainer } from './FlexContainer';
import { Button } from './Button';
import { LabelWithIcon } from './LabelWithIcon';

export class RestCard extends Component {
	handleClick(id) {
		window.open(`http://www.opentable.com/restaurant/profile/${id}`);
	}
	getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	render() {
		let buttons = null;
		if (this.props.buttons) {
			buttons = this.props.buttons.map((button)=> <Button text={button} className="button-small" />);
			buttons = <div className="RestCard__buttons">{ buttons }</div>;
		}
		
		let bookedTimes = this.getRandomInt(20,100);
		return (
			<div className="RestCard" onClick={()=>this.handleClick(this.props.id)}>
				<div className="Card__img">
					<img src={this.props.img}  alt="relatedRestaurant" />
				</div>
				<div className="RestCard__content">
					<div className="RestCard__name">{this.props.name}</div>
					<div>
						<div style={{marginBottom:"2px"}}><SummaryRating rating={this.props.rating} /></div>
						<div className="RestCard__metadata">
							{this.props.cuisine} &nbsp;•&nbsp; {this.props.price} &nbsp;•&nbsp; {this.props.location}
						</div>
						<LabelWithIcon text={`Booked ${bookedTimes} times today`} img="img/ic_social_proof.svg" />
					</div>
					{ buttons }
				</div>
			</div>
		);
	}
}