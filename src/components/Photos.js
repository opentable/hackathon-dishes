import React, { Component } from 'react';
import { FlexContainer } from './base/FlexContainer';
import { SectionWithHeader } from './base/SectionWithHeader';

export class Photos extends Component {
	render() {
		if (this.props.photos && this.props.photoCount > 0) {
			let columnName;
			let photos = this.props.photos.map(function(photo, index){
				if (index === 0 || index === 1) {
					columnName = " column-two";
				} else {
					columnName = " column-four";
				}
				return (
					<div className={`Photo${columnName}`}>
						<div className="Photo__img-container">
							<img src= {photo.img} alt="food" />
						</div>
					</div>
				);
			});
			let headerText=<div><span className="headerTextBold">{this.props.photoCount}</span> Photos</div>;
			return (
				<SectionWithHeader headerText={headerText} className="Photos" id={this.props.id}>
	    			<FlexContainer wrap="true">{photos}</FlexContainer>
	    		</SectionWithHeader>
			);
		} else {
			return null;
		}
	}
}