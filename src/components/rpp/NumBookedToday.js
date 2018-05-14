import React, { Component } from 'react';
import { LabelWithIcon__TwoLines } from '../base/LabelWithIcon__TwoLines';

export class NumBookedToday extends Component {
	render() {
		let text = `Booked ${this.props.bookedToday} times today`;
		if (this.props.bookedToday) {
			return (
				<LabelWithIcon__TwoLines
					img="/img/icon-booked.svg"
					imgAlt="bookedTimesToday"
					text={text}
				/>
			);
		} else {
			return null;
		}
	}
}