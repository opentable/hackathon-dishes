import React, { Component } from 'react';
import { LabelWithIcon } from '../base/LabelWithIcon';
import { LabelWithIcon__TwoLines } from '../base/LabelWithIcon__TwoLines';
import { FlexContainer } from '../base/FlexContainer';
import { MapPreview } from './MapPreview';

export class RestaurantDetails extends Component {
	render() {
		const hours = (<div dangerouslySetInnerHTML={{__html: this.props.hours}} />);
		const address = (<div dangerouslySetInnerHTML={{__html: this.props.address}} />);
		return (
			<FlexContainer className="RestaurantDetails">
				<div className="column-two">
					<LabelWithIcon__TwoLines
						text = "Dining style"
						subtext = {this.props.diningStyle}
						img = "/img/ic_dining_style.svg"
						imgAlt = "diningStyle"
					/>
					<LabelWithIcon__TwoLines
						text = "Cuisines"
						subtext = {this.props.cuisines.join(", ")}
						img = "/img/ic_cuisine.svg"
						imgAlt = "cuisine"
					/>
					<LabelWithIcon__TwoLines
						text = "Hours of operation"
						subtext = {hours}
						img = "/img/ic_clock.svg"
						imgAlt = "hours"
					/>
					<LabelWithIcon__TwoLines
						text = "Phone number"
						subtext = {this.props.phone}
						img = "/img/ic_phone.svg"
						imgAlt = "phone"
					/>
				</div>
				<div className="column-two">
					<MapPreview onClick = {this.props.onClick} />
					<LabelWithIcon
						text = {address}
						className = "LabelWithIcon--Address"
						img = "/img/ic_location.svg"
						imgAlt = "address"
						onClick = {this.props.onClick}
					/>
				</div>
				
			</FlexContainer>
		);
	}
}