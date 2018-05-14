import React, { Component } from 'react';
import { PhotoCountWithIcon } from '../custom/PhotoCountWithIcon';
import { ReviewCountWithIcon } from '../custom/ReviewCountWithIcon';

export class ComboItem extends Component {
  render(){
  	let item = this.props.item;
  	let footer;
  	let text;
  	if (item.reviewCount >= 0 && item.photoCount >= 0) {
  		footer = (
  			<div className="label-group">
				<ReviewCountWithIcon reviewCount={item.reviewCount} />
				<PhotoCountWithIcon photoCount={item.photoCount} />
			</div>
		);
  	};
  	if (item.description) {
  		text = <p className="ComboItem__text text-small-truncated">{item.description.substring(0, 70)}</p>;
  	}
    return (
      <div className="ComboItem column-three">
		<div className="ComboItem__img-container">
			<img src= {item.img} alt={this.props.imgAlt} />
		</div>
		<div className="ComboItem__heading">{item.name}</div>
		{ text }
		{ footer }
	</div>
    );
  }
}