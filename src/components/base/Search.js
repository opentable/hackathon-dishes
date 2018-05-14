import React, { Component } from 'react';

import ic_search from '../../img/ic_search.svg';

export class Search extends Component {
	render() {
		return (
			<div className="search">
				<img src={ic_search} className="select-icon" />
				<input className="search-input" placeholder="Location, restaurant, or cuisine">
				</input>
			</div>
		);
	}
}