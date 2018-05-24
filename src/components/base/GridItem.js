import React, { Component } from 'react';
import { LabelWithIcon } from './LabelWithIcon';

export class GridItem extends Component {
	constructor(props){
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		// window.open(`/features?name=${this.props.gridItem.name}`);
		window.open('./general-page',"_self");
	}
	render() {
		return (
			<div className="gridItem" onClick={this.handleClick}>
				<div className="gridItem__bg" style={{backgroundImage: 'url('+this.props.gridItem.image+')'}} />
				<div className="gridItem__overlay"></div>
				<div className="gridItem__info">
					<div style={{fontWeight:"bold"}}>
						{ this.props.gridItem.name }
					</div>
					<LabelWithIcon
                        text = {`${this.props.gridItem.mentions} mentions`}
                        img = "/img/ic_review_white.svg"
                        imgAlt = "mentions"
                    />
				</div>
			</div>
		);
	}
}