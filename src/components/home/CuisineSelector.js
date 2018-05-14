import React, { Component } from 'react';
import { SectionWithHeader } from '../base/SectionWithHeader';
import { RestRow } from '../base/RestRow';
import { TabGroup } from '../base/TabGroup';

export class CuisineSelector extends Component {
	constructor(props) {
		super(props);
		this.state = { cuisine: this.props.cuisines[0] };
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(cuisine) {
		this.restRows = document.getElementById("restRows");

		if (this.state.cuisine != cuisine) {
			this.setState({ cuisine: cuisine });
		}
		if (window.pageYOffset >= this.restRows.offsetTop) {
			window.scroll(0, this.restRows.offsetTop);
		}
	}
	componentDidMount() {
		window.addEventListener('scroll', this.checkSticky);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.checkSticky);
	}
	checkSticky() {
		this.selector = document.getElementById("selector");
		this.selectorNav = document.getElementById("selector-nav");
		this.cuisineSelector = document.getElementById("CuisineSelector");
		this.stickyStart = this.selector.offsetTop;
		this.stickyEnd = this.stickyStart + this.cuisineSelector.offsetHeight - this.selectorNav.offsetHeight;

		if (window.pageYOffset >= this.stickyEnd) {
			this.selectorNav.classList.remove("selector-sticky");
			this.selectorNav.classList.add("selector-past");
		} else if (window.pageYOffset >= this.stickyStart) {
			this.selectorNav.classList.add("selector-sticky");
			this.selectorNav.classList.remove("selector-past");
		}
		else {
			this.selectorNav.classList.remove("selector-sticky");
		}
	}
	render() {
		var restRows = [];
		var cuisine = this.state.cuisine.name;
		this.props.restaurants.forEach(function(rest) {
			if (rest.primaryCuisine.name === cuisine ) {
				restRows.push(<RestRow name={rest.name} price={"$$"} rating={rest.statistics.reviews.ratings.overall.rating} ratingFood={rest.statistics.reviews.ratings.food.rating} img={rest.photos.profile.wideMedium.url} cuisine={rest.primaryCuisine.name} location={rest.neighborhood.name} id={rest.restaurantId} tags={rest.tags} />);
			}
		});
		let selector = <TabGroup tabs={this.props.cuisines} onClick={this.handleClick} selected={this.state.cuisine} />;
		return (
			<SectionWithHeader headerText="Top cuisines in San Francisco" className="CuisineSection">
				<div id='CuisineSelector'>
					<div id="selector">
						<div id="selector-nav">
							{ selector }
						</div>
					</div>
					<div id="restRows">
						{ restRows }
					</div>
				</div>
			</SectionWithHeader>
		);
	}
}

