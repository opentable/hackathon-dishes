import React, { Component } from 'react';

export class TextWithCaret extends Component {
	render() {
		return (
			<a href={`http:\\\\${this.props.url}`} target="_blank" className="TextWithCaret">
				{this.props.text}
			</a>
		);
	}
}