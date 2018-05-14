import React, { Component } from 'react';

export class HeroImage extends Component {
	render() {
		let background;
		if (this.props.bgType === "largeHero") {
			background = { backgroundImage: `url(${this.props.backgroundImage})` };
		}
		return (
			<div style={background} className={`HeroImage ${this.props.bgType}`}></div>
		);
	}
}

