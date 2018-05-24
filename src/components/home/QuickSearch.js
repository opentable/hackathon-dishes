import React, { Component } from 'react';
import { Tag } from '../base/Tag';
import { Container } from '../base/Container';

export class QuickSearch extends Component {
	handleClick() {
		window.open('./general-page',"_self");
	}
	render() {
		let quickSearch = [
		{
			name: "Dinner tonight",
			url: 'https://www.opentable.com/s/?covers=2&dateTime=2018-05-17%2018%3A30&latitude=37.7915&longitude=-122.4089&enableSimpleCuisines=true&pageType=0'
		},
		{
			name: "Good for a date",
			url: 'https://www.opentable.com/features/best-date-night-restaurants-south-san-francisco-ca?page=1'
		},
		{
			name: "Brunch",
			url: 'https://www.opentable.com/s/?currentview=list&size=100&sort=PreSorted&covers=2&dateTime=2018-06-02+12%3A00&latitude=37.776021&longitude=-122.270342&metroId=4'
		},
		{
			name: "Italian",
			url: 'https://www.opentable.com/s/san-francisco-bay-area/italian-restaurants/m4'
		},
		{
			name: "Good for groups",
			url: 'https://www.opentable.com/promo.aspx?m=4&pid=64'
		}];
		quickSearch = quickSearch.map((tag)=><Tag tagName={tag.name} onClick={this.handleClick} />);

		return (
			<Container className="quickSearch">
				<span className="quickSearch--label">Quick search: </span>
				{ quickSearch }
			</Container>
		);
	}
}

/*onClick={()=>this.handleClick(tag.url)}*/