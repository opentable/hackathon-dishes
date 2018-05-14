import React, { Component } from 'react';
import { TextLink } from './TextLink';

export class LabelWithIcon extends Component {
	render() {
		let labelText;
		let icon;
		if (this.props.url) {
			labelText = <TextLink url={this.props.url} text={this.props.text}></TextLink>;
		} else {
			labelText = this.props.text;
		}
		if (this.props.img) {
			icon = (
				<div className="LabelWithIcon__icon">
					<img src={this.props.img}  alt={this.props.imgAlt} />
				</div>
			);
		}
		if (this.props.text) {
			return (
				<div className={`LabelWithIcon Label ${this.props.className}`}>
					<div style={{display:'flex', alignItems: 'center'}}>
						{ icon }
						<div className="LabelWithIcon__text" onClick={this.props.onClick}>{labelText}</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}