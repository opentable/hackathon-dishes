import React, { Component } from 'react';
import LogoColor from '../img/logo.svg';
import LogoTransparent from '../img/logo-transparent.svg';
import { Button } from './base/Button';
import { Link } from 'react-router-dom';

export class Header extends Component {
	constructor(props) {
		super(props);
		this.locationPicker = null;
		if (document.body.classList.contains('hero-base') && this.props.colored != true) {
			this.logo = LogoTransparent;
		} else {
			this.logo = LogoColor;
			this.locationPicker = (
				<span className="location-picker">
					<img src="../img/ic_location_gray.svg" alt="location-picker" />
					<img src="../img/ic_down.svg" alt="location-picker" />
				</span>
			);
		}
	}
	render() {
		return (
			<div className="header">
				<div style={{display:"flex"}}>
					<Link to={'/'} className="header__logo"><img src={ this.logo } alt="ot-logo" /></Link>
					{ this.locationPicker }
				</div>
				<div className="buttons">
					<Button text="Sign up" className="button-small" />
					<Button text="Sign in" className="button-small button-inverse" />
				</div>
			</div>
		);
	}
}