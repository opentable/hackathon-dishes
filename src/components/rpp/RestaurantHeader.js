import React, { Component } from 'react';

export class RestaurantHeader extends Component {
	render() {
		var profPhoto, tagline = null;
		if (this.props.bgType==="smallHero" && this.props.profPhoto) {
			profPhoto = <img src={this.props.profPhoto}  alt="profilephoto" className="RestaurantHeader__profPhoto" />;
		}
		if (this.props.tagline) {
			tagline = <h2 className="v2 tagline">{this.props.tagline}</h2>;
		}
		return (
			<div className="RestaurantHeader" style={{display:'flex', alignItems: 'center'}}>
				<div>
					<h1 id="nav-overview">{this.props.name}</h1>
			        { tagline }
			    </div>
			</div>
		);
	}
}