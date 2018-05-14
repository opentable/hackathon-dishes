import React, { Component } from 'react';
import { SectionWithHeader } from '../base/SectionWithHeader';
import { FlexContainer } from '../base/FlexContainer';
import { RestCard } from './RestCard';

export class RestCarousel extends Component {
	render() {
		var restCards = this.props.restaurants.map((rest) => <RestCard name={rest.name} price={"$$"} rating={rest.statistics.reviews.ratings.overall.rating} img={rest.photos.profile.wideMedium.url} cuisine={rest.primaryCuisine.name} location={rest.neighborhood.name} buttons={this.props.buttons} id={rest.restaurantId} />);

		return (
			<SectionWithHeader headerText={this.props.headerText}>
				<FlexContainer className="flex-scroll">
					{ restCards }
				</FlexContainer>
			</SectionWithHeader>
		);
	}
}

