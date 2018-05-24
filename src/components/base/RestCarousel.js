import React, { Component } from 'react';
import { SectionWithHeader } from '../base/SectionWithHeader';
import { FlexContainer } from '../base/FlexContainer';
import { RestCard } from './RestCard';
import { Container } from '../base/Container';
import ArrowRight from '../../img/ic_advance.svg';

export class RestCarousel extends Component {
	render() {
		var restCards = this.props.restaurants.map((rest) => <RestCard name={rest.name} price={"$$"} rating={rest.statistics.reviews.ratings.overall.rating} ratingCount={rest.statistics.reviews.ratings.overall.count} img={rest.photos.profile.wideMedium.url} cuisine={rest.primaryCuisine.name} location={rest.neighborhood.name} buttons={this.props.buttons} id={rest.restaurantId} />);

		return (
			<Container>
				<SectionWithHeader headerText={this.props.headerText}>
					<FlexContainer className="flex-scroll">
						{ restCards }
					</FlexContainer>
					<div className="arrow-right"><img src={ArrowRight} /></div>
				</SectionWithHeader>
			</Container>
		);
	}
}

