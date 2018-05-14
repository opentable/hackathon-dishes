import React, { Component } from 'react';

export class HistogramBar extends Component {
	render() {
		return (
			<div className = "HistogramBar">
				<div className = "HistogramBar__text">{this.props.text}</div>
				<div className = "HistogramBar__bar">
					<div className="HistogramBar__bar-filled" style={{width: this.props.width+"%"}} />
				</div>
			</div>
		);
	}
}