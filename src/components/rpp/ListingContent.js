import React, { Component } from 'react';
import { Container } from '../base/Container';
import { Paragraph } from '../base/Paragraph';
import { Button } from '../base/Button';
import { LabelGroup } from '../base/LabelGroup';
import { RestRow } from '../base/RestRow';
import { TextWithCaret } from '../base/TextWithCaret';

export class ListingContent extends Component {
	render() {
		let paragraphText = "Unfortunately, this restaurant is not on the OpenTable reservation network.<br />We'll send you an email if this restaurant joins.";
		paragraphText = (<div dangerouslySetInnerHTML={{__html: paragraphText}} />);
		let restRows = this.props.relatedRestaurants.map((rest)=><RestRow name={rest.name} rating={rest.rating} img={rest.img} cuisine={rest.cuisine} location={rest.location} />);
		return (
			<Container className="ListingContent">
				<Paragraph text={paragraphText} />
				<Button text = "Notify Me" />
				<div className="relatedRestaurants__header">Find a similar spot</div>
				{ restRows }
			</Container>
		);
	}
}