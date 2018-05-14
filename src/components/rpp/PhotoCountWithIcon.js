import React, { Component } from 'react';
import { LabelWithIcon } from '../base/LabelWithIcon';

export class PhotoCountWithIcon extends Component {
	render() {
		return (
			<LabelWithIcon
				text = {`${this.props.photoCount} photos`}
				img = "/img/icon-photo.svg"
				imgAlt = "camera"
			/>
		);
	}
}