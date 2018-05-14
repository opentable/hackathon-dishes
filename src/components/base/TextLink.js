import React, { Component } from 'react';

export class TextLink extends Component {
	render() {
		return (
			<a href={`http:\\\\${this.props.url}`} target="_blank" className="TextLink">{this.props.text}</a>
		);
	}
}