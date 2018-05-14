import React, { Component } from 'react';
import { FlexContainer } from '../base/FlexContainer';
import { GridItem } from '../base/GridItem';

export class GridSection extends Component {
	render() {
		var gridItems_col1 = this.props.gridItems.slice(0,3).map((gridItem) => <GridItem name = {gridItem.name}></GridItem>);
		var gridItems_col2 = this.props.gridItems.slice(3,4).map((gridItem) => <GridItem name = {gridItem.name}></GridItem>);
		var gridItems_col3 = this.props.gridItems.slice(4,6).map((gridItem) => <GridItem name = {gridItem.name}></GridItem>);

		return (
			<FlexContainer className="Grid">
				<FlexContainer wrap="true" className="gridItems gridItems__col1">
					{ gridItems_col1 }
				</FlexContainer>
				<FlexContainer wrap="true" className="gridItems gridItems__col2">
					{ gridItems_col2 }
				</FlexContainer>
				<FlexContainer wrap="true" className="gridItems gridItems__col3">
					{ gridItems_col3 }
				</FlexContainer>
			</FlexContainer>
		);
	}
}