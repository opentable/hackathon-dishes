import React, { Component } from 'react';
import { FlexContainer } from '../base/FlexContainer';
import { Search } from '../base/Search';
import { Button } from '../base/Button';
import { Tag } from '../base/Tag';

import ic_calendar from '../../img/ic_calendar.svg';
import ic_clock from '../../img/ic_clock.svg';
import ic_person from '../../img/ic_person.svg';

export class DTP extends Component {
	handleClick() {
		window.open('./general-page',"_self");
		// window.open('https://www.opentable.com/s/?covers=2&dateTime=2018-05-17%2018%3A30&latitude=37.7915&longitude=-122.4089&enableSimpleCuisines=true&pageType=0');
	}
	render() {
		let partySizeOptions = [2,3,4,5,6,7,8].map((val) => <option value={val}>{val} people</option>);
		let timeOptions = ["6:00pm","6:30pm","7:00pm","7:30pm","8:00pm","8:30pm"].map((val) => <option value={val}>{val}</option>);
		let dateOptions = ["May 10", "May 11", "May 12", "May 13", "May 14", "May 15", "May 16" ].map((val) => <option value={val}>{val}</option>);
		let quickSearch = ["Dinner tonight", "Date night", "Brunch"]
		quickSearch = quickSearch.map((tag)=><Tag tagName={tag} />);

		return (
			<div style={{textAlign:"center"}}>
				<div style={{display:"inline-block"}}>
					<FlexContainer>
						<FlexContainer className="dtp">
							<div className="dtp-dropdown">
							<img src={ic_calendar} className="select-icon" />
								<select id="dropdown-date" className="select">
								  	{dateOptions}
								</select>
							</div>
							<div className="dtp-dropdown">
								<img src={ic_clock} className="select-icon" />
								<select id="dropdown-time" className="select">
								  {timeOptions}
								</select>
							</div>
							<div className="dtp-dropdown">
								<img src={ic_person} className="select-icon" />
								<select id="dropdown-party-size" className="select">
								  {partySizeOptions}
								</select>
							</div>
						</FlexContainer>
						<Search />
						<Button text="Let's go" onClick={this.handleClick} />
					</FlexContainer>
				</div>
			</div>
		);
	}
}

/*
<Button onClick={this.handleClick} text="Let's go" />*/