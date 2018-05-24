import React, { Component } from 'react';
import './App.css';
import { Hero } from './components/home/Hero';
import { QuickSearch } from './components/home/QuickSearch';
import { PromoSection } from './components/home/PromoSection';
import { TileSection } from './components/home/TileSection';
import { GridSection } from './components/home/GridSection';
import { RestCarousel } from './components/base/RestCarousel';
import { CuisineSelector } from './components/home/CuisineSelector';
import { AppCrossSell } from './components/home/AppCrossSell';
import { ValueProp } from './components/home/ValueProp';
import { Offers } from './components/home/Offers';
import { params } from './getUrlParams';
import restaurants from './json/restaurants.json';
import promos from './json/promos.json';
import dishes from './json/dishes.json';
import offers from './json/offers.json';

class App extends Component {
  render() {
  	var location = "San Francisco";
    var cuisines = [{ name: "American"}, {name: "French"}, {name: "Italian"}, {name: "Japanese"}, {name: "Californian"}];
    var occasions = ["Date night", "Birthday", "Business Meal", "Group get-togethers", "Anniversary", "Brunch"];
	var signedIn = params.type === "signedIn" ? true : false;
	var content;

	/* PPC */
	if (params.type === "ppc"){
		location = "London";
		content = (
			<div>
				<RestCarousel restaurants={restaurants.slice(0,4)} headerText={`Earn free meals with ${location} bonus point tables`} buttons={["Now","Lunch","Dinner"]} />
				<Offers headerText={`Offers at top restaurants in ${location}`} offers={offers.slice(0,3)} />
				<ValueProp />
				<CuisineSelector headerText={`Top cuisines in ${location}`} restaurants={restaurants} cuisines={cuisines} />
				<AppCrossSell />
			</div>
		);
	} 
	/* NOT PPC */
	else {
		content = (
			<div>
				<QuickSearch />
				<RestCarousel restaurants={restaurants.slice(0,4)} headerText={signedIn ? "Recommended for you" : `Popular in ${location}`} buttons={["Now","Lunch","Dinner"]} />
				{ signedIn ? <RestCarousel restaurants={restaurants.slice(10,14)} headerText="Dine again" buttons={["Now","Lunch","Dinner"]} /> : null }
				{ !signedIn ? <ValueProp /> : null }
				<CuisineSelector headerText={`Top cuisines in ${location}`} restaurants={restaurants} cuisines={cuisines} />
				{!signedIn ? <GridSection gridItems={dishes} headerText={`Best things to eat in ${location}`} /> : null }
				<PromoSection promos={promos} headerText={`Upcoming in ${location}`} />
				<AppCrossSell />
			</div>
		);
	}
	return (
      <div className="App">
		<Hero location={location} type={params.type} />
		{ content }
		{/*	<RestCarousel restaurants={restaurants.slice(15,19)} headerText="Date night in San Francisco" buttons={["6:00pm","7:00pm","7:30pm"]} /> */}
      </div>
    );
  }
}

export default App;