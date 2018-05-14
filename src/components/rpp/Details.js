import React, { Component } from 'react';
import { LabelWithIcon } from '../base/LabelWithIcon';
import { LabelWithIcon__TwoLines } from '../base/LabelWithIcon__TwoLines';
import { FlexContainer } from '../base/FlexContainer';
import { SectionWithHeader } from '../base/SectionWithHeader';

export class Details extends Component {
	render() {
		const hours = (<div dangerouslySetInnerHTML={{__html: this.props.hours}} />);
		const address = (<div dangerouslySetInnerHTML={{__html: this.props.address}} />);
		return (
			<SectionWithHeader className="Details" headerText="Hours, Transportation, and Details" id={this.props.id}>
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
							text="Cross street"
							subtext = {this.props.crossStreet}
							img = "/img/ic_cross_street.svg"
							imgAlt = "crossStreet"
						/>
						<LabelWithIcon__TwoLines
							text="Executive Chef"
							subtext = {this.props.chef}
							img = "/img/ic_chef.svg"
							imgAlt = "chef"
						/>
					</div>
					<div className="column-two">
						<LabelWithIcon__TwoLines
							text="Website"
							subtext = {this.props.website}
							img = "/img/ic_new_window.svg"
							imgAlt = "website"
							url = {this.props.website}
						/>
						<LabelWithIcon__TwoLines
							text="Parking details"
							subtext = {this.props.parking}
							img = "/img/ic_parking_details.svg"
							imgAlt = "parking"
						/>
						<LabelWithIcon__TwoLines
							text = "Payment options"
							subtext = {this.props.paymentOptions}
							img = "/img/ic_payment.svg"
							imgAlt = "price"
						/>
						<LabelWithIcon__TwoLines
							text = "Phone number"
							subtext = {this.props.phone}
							img = "/img/ic_phone.svg"
							imgAlt = "phone"
						/>
						<LabelWithIcon__TwoLines
							text = "Additional"
							subtext = {this.props.additional}
							img = "/img/ic_tag.svg"
							imgAlt = "tag"
						/>
					</div>
				</FlexContainer>
			</SectionWithHeader>
		);
	}
}