import React, { Component } from 'react';
import { SpecificRating } from '../rpp/SpecificRating';
import { FlexContainer } from './FlexContainer';
import { Button } from './Button';

export class RestRow extends Component {
	handleClick(id) {
		window.open(`http://www.opentable.com/restaurant/profile/${id}`);
	}
	render() {
		let tags = "Special occasion, Good for a date, Romantic"
		if (this.props.tags) {
			tags = this.props.tags;
		}
		return (
			<div className="RestRow__container" onClick={()=>this.handleClick(this.props.id)}>
				<div className="RestRow">
					<FlexContainer className="RestRow__mainContent">
						<div className="ic_bookmark"></div>
						<div className="RestRow__img">
							<img src={this.props.img}  alt="relatedRestaurant" />
						</div>
						<div>
							<div className="RestRow__name">{this.props.name}</div>
							<div className="RestRow__content">
								<div style={{marginBottom:"4px"}}>
									<SpecificRating rating={this.props.ratingFood} /> &nbsp;•&nbsp; {this.props.price} &nbsp;•&nbsp; {this.props.location}
								</div>
								<div>
									Top tags: {tags}
								</div>
							</div>
							<div className="RestRow__buttons">
								<Button text="Now" className="button-small" />
								<Button text="Lunch" className="button-small" />
								<Button text="Dinner" className="button-small" />
							</div>
						</div>
					</FlexContainer>
					<div className="RestRow__subContent">
						<div className="topReview">
							"As always, spruce is near perfection.. Very pricey, or I would go more often."
						</div>
					</div>
				</div>
			</div>
		);
	}
}