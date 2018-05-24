import React, { Component } from 'react';
import { FlexContainer } from '../base/FlexContainer';
import { GridItem } from '../base/GridItem';
import { SectionWithHeader } from '../base/SectionWithHeader';
import { Container } from '../base/Container';

export class GridSection extends Component {
	render() {
		var gridItems_col1 = this.props.gridItems.slice(0,3).map((gridItem) => <GridItem gridItem = {gridItem}></GridItem>);
		var gridItems_col2 = this.props.gridItems.slice(3,4).map((gridItem) => <GridItem gridItem = {gridItem}></GridItem>);
		var gridItems_col3 = this.props.gridItems.slice(4,6).map((gridItem) => <GridItem gridItem = {gridItem}></GridItem>);

		return (
			<Container>
				<SectionWithHeader headerText={this.props.headerText}>
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
				</SectionWithHeader>
			</Container>
		);
	}
}