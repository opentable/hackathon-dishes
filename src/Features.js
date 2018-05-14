import React, { Component } from 'react';
import './App.css';
import './Features.css';
import { params } from './getUrlParams';
import { Container } from './components/base/Container';
import { Header } from './components/Header';
import { Hero } from './components/home/Hero';
import { RestRow } from './components/base/RestRow';
import restaurants from './json/restaurants.json';

class Features extends Component {
  render() {
	var restRows = restaurants.map((rest) =><RestRow name={rest.name} price={"$$"} rating={rest.statistics.reviews.ratings.overall.rating} ratingFood={rest.statistics.reviews.ratings.food.rating} img={rest.photos.profile.wideMedium.url} cuisine={rest.primaryCuisine.name} location={rest.neighborhood.name} id={rest.restaurantId} tags={rest.tags} />);
	return (
      <div className="Features">
        <Header colored={ true } />
        <div>
        	{/* param for dish name */}
        	{params.name}
        </div>
        <div>
        	{ restRows }
        </div>
      </div>
    );
  }
}

export default Features;