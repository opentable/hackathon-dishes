import React, { Component } from 'react';
import { SectionWithHeader } from '../base/SectionWithHeader';
import { PromoCard } from '../base/PromoCard';
import { FlexContainer } from '../base/FlexContainer';

export class PromoSection extends Component {
	render() {
		var promoCards = this.props.promos.map((promo) => <PromoCard name={promo.name} img={promo.imgUrl} description={promo.description} dates={promo.dates} url={promo.url} />);

		return (
			<SectionWithHeader headerText={this.props.headerText}>
				<FlexContainer className="flex-scroll">
					{ promoCards }
				</FlexContainer>
			</SectionWithHeader>
		);
	}
}

