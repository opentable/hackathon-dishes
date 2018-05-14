import React, { Component } from 'react';
import { Container } from '../base/Container';
import { FlexContainer } from '../base/FlexContainer';
import { LabelGroup } from '../base/LabelGroup';
import { Button } from '../base/Button';
import { TimeslotGroup } from '../base/TimeslotGroup';
import { NumBookedToday } from './NumBookedToday';

export class DTPContent extends Component {
	constructor(props) {
		super(props);
		this.state = { displayTimeslots: document.body.className === "dtp1" ? false : true };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({ displayTimeslots: !this.state.displayTimeslots });
	}
	render() {
		let partySizeOptions = [2,3,4,5,6,7,8].map((val) => <option value={val}>{val} people</option>);
		let timeOptions = ["6:00pm","6:30pm","7:00pm","7:30pm"].map((val) => <option value={val}>{val}</option>);
		let dateOptions = ["June 24", "June 25", "June 26"].map((val) => <option value={val}>{val}</option>);

		return (
			<Container>
				<FlexContainer className="dtp-selection" wrap="true">
					<div className="dtp-select">
						<label for="dropdown-party-size">Party Size</label> 
						<select name="dropdown-party-size" id="dropdown-party-size" className="dropdown">
						  {partySizeOptions}
						</select>
					</div>
					<div className="dtp-select">
						<label for="dropdown-date">Date</label> 
						<select name="dropdown-date" id="dropdown-date" className="dropdown">
						  {dateOptions}
						</select>
					</div>
					<div className="dtp-select">
						<label for="dropdown-time">Time</label> 
						<select name="dropdown-time" id="dropdown-time" className="dropdown">
						  {timeOptions}
						</select>
					</div>
				</FlexContainer>
				<Button onClick={this.handleClick} text="Find a Table" />
				{ this.state.displayTimeslots && 
					<div className="TimeslotSection">
						<LabelGroup>
							<NumBookedToday bookedToday={this.props.bookedToday} />
						</LabelGroup>
						<TimeslotGroup />
					</div>
				}
			</Container>
		);
	}
}