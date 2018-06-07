import React, { Component } from 'react';
import imgDefault1 from '../../img/herodefault1.jpg';
import imgDefault2 from '../../img/herodefault2.jpg';
import imgDefault3 from '../../img/herodefault3.jpg';
import backgroundImage1 from '../../img/hero1.jpg';
import backgroundImage2 from '../../img/hero2.jpg';
import backgroundImage3 from '../../img/hero3.jpg';
import backgroundImage4 from '../../img/hero4.jpg';
import backgroundImage5 from '../../img/hero5.jpg';
import video from '../../img/Montreal.mp4';
import london from '../../img/london2.jpeg';
import { DTP } from './DTP';
import { Header } from '../Header';
import $ from 'jquery';

export class Hero extends Component {
	componentDidMount() {
		if (document.getElementById("slideshow").childElementCount > 1){
			$("#slideshow > div:gt(0)").hide();

			setInterval(function() { 
			  $('#slideshow > div:first')
			    .fadeOut(1500)
			    .next()
			    .fadeIn(1500)
			    .end()
			    .appendTo('#slideshow');
			},  4000);
		}
	}
	render() {
		let location = this.props.location;
		let introMessage = "Find your table for any occasion";
		let bg;
		let bgStyle;
		if (this.props.type === "ppc"){
			bg = [ london ];
		}
		else if (document.body.classList.contains('herodefault')) {
			bg = [ imgDefault1, imgDefault2, imgDefault3 ];
		} else {
			bg = [ backgroundImage1, backgroundImage2, backgroundImage3, backgroundImage4, backgroundImage5 ];
		}
		bg = bg.map((background)=><div style={{backgroundImage: `url(${background})`}} className="bgImage"></div>);
		if (this.props.type === "video") {
			bg = (<video autoPlay muted loop className="bgVideo">
			  		<source src={video} type="video/mp4" />
					Your browser does not support the video tag.
				  </video>);
			bgStyle = "bgStyle__video";
		}
		return (
			<div className="Hero">
				<Header />
				<div className="content">
					<div className="HeroCopy">
						<div className="HeroLocation">
							<img src = "img/ic_location.svg" className="ic_location" />
							{location}
							<img src = "img/ic_edit.svg" className="ic_edit" />
						</div>
						<div className="introMessage">{introMessage}</div>
					</div>
					<DTP />
				</div>
				<div className="bg">
					<div style={{backgroundColor:'rgb(164,87,178)'}} className="bgImage overlay overlay-lighter"></div>
					<div style={{backgroundColor:'rgb(45,51,63)'}} className={`bgImage overlay ${bgStyle}`}></div>
					<div id="slideshow">{bg}</div>
				</div>
			</div>
		);
	}
}

