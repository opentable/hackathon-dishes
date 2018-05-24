import React, { Component } from 'react';
import { Button } from '../base/Button';
import { Container } from '../base/Container';
import ValuePropBg from '../../img/WoodLines.png';

export class ValueProp extends Component {
	render() {
		const title = "Great dining experiences, wherever you go";
		const description = "Sign up to get free, guaranteed seating with OpenTable, the largest restaurant booking site in the world."
		return (
			<div className="Section ValueProp" style={{background:"url("+ValuePropBg+")"}}>
				<Container>
					<div className="ValueProp__title">{title}</div>
					<div className="ValueProp__description">{description}</div>
					<Button text="Sign up" />
				</Container>
			</div>
		);
	}
}

