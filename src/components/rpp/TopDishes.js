import React, { Component } from 'react';
import { ComboItemGroupWithHeader } from '../base/ComboItemGroupWithHeader';

export class TopDishes extends Component {
	render() {
		if (this.props.dishes) {
			return (
	    		<ComboItemGroupWithHeader comboItems={this.props.dishes} imgAlt="dish" headerText="Popular Dishes to Try" />
			);
		} else {
			return null;
		}
	}
}