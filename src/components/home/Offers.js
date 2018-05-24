import React, { Component } from 'react';
import { SectionWithHeader } from '../base/SectionWithHeader';
import { OfferCard } from '../base/OfferCard';
import { FlexContainer } from '../base/FlexContainer';
import { Container } from '../base/Container';
import ArrowRight from '../../img/ic_advance.svg';

export class Offers extends Component {
	render() {
		var offerCards = this.props.offers.map((offer) => <OfferCard name={offer.offerName} restName={offer.restaurantName} />);

		return (
			<Container className="Offers">
				<SectionWithHeader headerText={this.props.headerText}>
					<FlexContainer className="flex-scroll">
						{ offerCards }
					</FlexContainer>
					<div className="arrow-right"><img src={ArrowRight} /></div>
				</SectionWithHeader>
			</Container>
		);
	}
}

