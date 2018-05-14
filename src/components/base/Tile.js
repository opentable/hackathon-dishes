import React, { Component } from 'react';

export class Tile extends Component {
	handleClick(id) {
		window.open(`http://www.opentable.com/restaurant/profile/${id}`);
	}
	render() {
		return (
			<div className="Tile">
			</div>
		);
	}
}