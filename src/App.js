import React, { Component } from 'react';
import './App.css';
import { Hero } from './components/home/Hero';
import { QuickSearch } from './components/home/QuickSearch';
import { PromoSection } from './components/home/PromoSection';
import { TileSection } from './components/home/TileSection';
import { GridSection } from './components/home/GridSection';
import { RestCarousel } from './components/base/RestCarousel';
import { CuisineSelector } from './components/home/CuisineSelector';
import { Container } from './components/base/Container';
import './getUrlParams';
import restaurants from './json/restaurants.json';
import promos from './json/promos.json';
import dishes from './json/dishes.json';

class App extends Component {
  render() {
    var cuisines = [{ name: "American"}, {name: "French"}, {name: "Italian"}, {name: "Japanese"}, {name: "Californian"}];
    var occasions = ["Date night", "Birthday", "Business Meal", "Group get-togethers", "Anniversary", "Brunch"];
	var content = (
		<div>
			<Hero />
			<Container>
				<QuickSearch />
{/*				<TileSection tiles={occasions} heading="Find the perfect restaurant for you" />*/}
				<GridSection gridItems={dishes} heading="Best things to eat in San Francisco" />
				<RestCarousel restaurants={restaurants.slice(0,4)} headerText="Popular right now in San Francisco" buttons={["Now","Lunch","Dinner"]} />
				<CuisineSelector restaurants={restaurants} cuisines={cuisines} />
				<PromoSection promos={promos} headerText="Upcoming in San Francisco" />
				<RestCarousel restaurants={restaurants.slice(15,19)} headerText="Date night in San Francisco" buttons={["6:00pm","7:00pm","7:30pm"]} />
				<RestCarousel restaurants={restaurants.slice(10,14)} headerText="Business lunch in San Francisco" buttons={["12:00pm","12:30pm","1:00pm"]} />
				<RestCarousel restaurants={restaurants.slice(20,24)} headerText="Rarely available nearby" />
			</Container>
  		</div>
	);
	return (
      <div className="App">
        { content }
      </div>
    );
  }
}

export default App;