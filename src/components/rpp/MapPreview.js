import React, { Component } from 'react';

export class MapPreview extends Component {
	render() {
		return (
			<div className="column-three column--MapPreview">
				<div style={{backgroundImage: `url("/img/map.jpg")`}} className="MapPreview" onClick={this.props.onClick} alt="map" />
			</div>
		);
	}
}
