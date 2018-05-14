import React, { Component } from 'react';

export class LabelWithIcon__TwoLines
 extends Component {
	render() {
		if (this.props.subtext) {
			return (
				<div className="LabelWithIcon--TwoLines Label">
					<div style={{display:'flex'}}>
						<div className="LabelWithIcon--TwoLines__iconContainer">
							<img src={this.props.img} alt={this.props.imgAlt} />
						</div>
						<div className="LabelWithIcon--TwoLines__textContainer">
							<div className="LabelWithIcon--TwoLines__text">{this.props.text}</div>
							<div className="LabelWithIcon--TwoLines__subtext">{this.props.subtext}</div>
						</div>
					</div>
				</div>
			);
		} else {
			return null;
		}
	}
}