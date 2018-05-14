import React, { Component } from 'react';
import { FlexContainer } from '../base/FlexContainer';
import { Tile } from '../base/Tile';

export class TileSection extends Component {
	render() {
		var tiles = this.props.tiles.map((tile) => <Tile></Tile>);

		return (
			<FlexContainer wrap="true" className="OccasionSection">
				<div className="one-column">
					<h3>{this.props.heading}</h3>
				</div>
				<FlexContainer wrap="true" className="Tiles">
					{ tiles }
				</FlexContainer>
			</FlexContainer>
		);
	}
}

