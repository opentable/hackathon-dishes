import React, { Component } from 'react';
import { Nav } from './Nav';
import { Reviews } from './Reviews';
import { Photos } from './Photos';
import { TagGroup } from './base/TagGroup';
import { Paragraph } from './base/Paragraph';
import { ReviewCountWithIcon } from './custom/ReviewCountWithIcon';
import { CuisineWithIcon } from './custom/CuisineWithIcon';
import { PriceWithIcon } from './custom/PriceWithIcon';
import { SummaryRating } from './custom/SummaryRating';
import { RestaurantDetails } from './custom/RestaurantDetails';
import { RestaurantHeader } from './custom/RestaurantHeader';
import { MenuSection } from './custom/MenuSection';
import { Details } from './custom/Details';
import { Container } from './base/Container';
import { SubContainer } from './SubContainer';
import { StickyNav } from './StickyNav.js';
import { ComboItemGroupWithHeader } from './base/ComboItemGroupWithHeader';

export class MainContainer extends Component {
	constructor(props){
		super(props);
		this.state = {dtpAlignment: "", expanded: "", layout: "" };
		this.setAlignment = this.setAlignment.bind(this);
		this.toggleClass = this.toggleClass.bind(this);
		this.mapOnClick = this.mapOnClick.bind(this);
	}

	setAlignment() {
		if (window.innerWidth <= 1038) { // if tablet view
			this.setState({layout: "tablet"});
		} else  { // if desktop view
			this.setState({layout: "desktop"});
		}
	}

	toggleClass() {
		this.setState({expanded: !this.state.expanded });
	}

	mapOnClick() {
		window.open("https://www.google.com/maps?daddr=1414+6th+Avenue,+New+York,+NY+10019", "", "width=800,height=600");
	}

	componentDidMount(){
		this.setAlignment();
		window.addEventListener('resize', () => {
	      this.setAlignment();
	    });
	}

	render() {
		let featuredIn;
		let rest = this.props.rest;
		let SubContainer__alignCenter, SubContainer__alignRight, expanded, nav;
		let description = (<div dangerouslySetInnerHTML={{__html: rest.description}} />);

		if (this.state.layout === "tablet") {
			expanded = this.state.expanded ? " expanded" : null;
			SubContainer__alignCenter = <SubContainer rest={rest} layout={this.state.layout} className={`SubContainer--centered ${expanded}`} onClick={this.toggleClass} />;
			nav = <Nav photoCount={rest.photoCount} />;
		} else {
			SubContainer__alignRight = <SubContainer rest={rest} className="SubContainer--right" />;
			nav = <StickyNav><Nav photoCount={rest.photoCount} /></StickyNav>;
		}
		
		//for restaurant week Summit
		if (parseInt(rest.id) === 170722) {
			featuredIn = <ComboItemGroupWithHeader comboItems={rest.featured} imgAlt="featured" headerText="Featured in" />;
		}

		return (
			<div className="body-content">
				<div className="MainContainer">
	        		{ nav }
	        		<Container id="MainContainer__content">
		        		<RestaurantHeader name={rest.name} tagline={rest.tagline} profPhoto={rest.profPhoto} bgType={rest.bgType} />
		      			<div className="MainContainer__label-group label-group">
		        			<SummaryRating rating={rest.ratingTotal} />
		        			<ReviewCountWithIcon reviewCount={rest.reviewCount} />
		        			<PriceWithIcon price={rest.price} />
		        			<CuisineWithIcon cuisine={rest.cuisines[0]} />
		        		</div>
		        		<TagGroup tags={rest.tags} />
		        		{ SubContainer__alignCenter }
		        		<Paragraph text={description} />
		        		<RestaurantDetails hours={rest.hours} website={rest.website} phone={rest.phone} diningStyle={rest.diningStyle} address={rest.address} cuisines={rest.cuisines} onClick={this.mapOnClick} />
		        		{ featuredIn }
		        		<Photos id="nav-photos" photos={rest.photos.slice(0,6)} photoCount={rest.photoCount} />
		        		<MenuSection id="nav-menu" topDishes={rest.topDishes} menuItems={rest.menuItems} menuUpdated={rest.menuUpdated} menuPages={rest.menuPages} />
		        		<Reviews id="nav-reviews" noiseLevel={rest.noiseLevel} recommendPercent={rest.recommendPercent} reviews={rest.reviews} reviewCount={rest.reviewCount} rating={rest.ratingTotal} ratingFood={rest.ratingFood} ratingAmbience={rest.ratingAmbience} ratingService={rest.ratingService} ratingValue={rest.ratingValue} />
		        		<Details id="nav-details" price={rest.price} cuisines={rest.cuisines} hours={rest.hours} website={rest.website} phone={rest.phone} diningStyle={rest.diningStyle} address={rest.address} parking={rest.parking} chef={rest.chef} crossStreet={rest.crossStreet} paymentOptions={rest.paymentOptions} additional={rest.additional} onClick={this.mapOnClick} />
		        	</Container>
				</div>
				{ SubContainer__alignRight }
			</div>
		);
	}
}