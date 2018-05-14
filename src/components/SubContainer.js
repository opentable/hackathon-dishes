import React, { Component } from 'react';
import { Container } from './base/Container';
import { FlexContainer } from './base/FlexContainer';
import { LabelGroup } from './base/LabelGroup';
import { TimeslotGroup } from './base/TimeslotGroup';
import { NumBookedToday } from './custom/NumBookedToday';
import { DTPContent } from './custom/DTPContent';
import { ListingContent } from './custom/ListingContent';

export class SubContainer extends Component {
	constructor(props) {
		super(props);
		this.state = { headingText: "Make a Reservation" };
		if (this.props.rest.type == "listing") {
			this.setState({headingText: "Get Notified"});
		}
	}
	componentDidMount() {
      const sticky = document.getElementsByClassName("sticky-dtp")[0];
      const stickyHeader = document.getElementsByClassName("SubContainer__heading__text")[0];
      let stickyTop = sticky.offsetTop;
      const stickyOriginalMarginTop = window.getComputedStyle(sticky).marginTop;
      const stickyHeaderHeight= sticky.children[0].offsetHeight;
      const stickyHeight = sticky.offsetHeight;

      if (this.props.layout === "tablet") {
        stickyTop += stickyHeight;
      }

      document.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const paragraph = document.getElementsByClassName("paragraph")[0];
        const mainContainer = document.getElementsByClassName("MainContainer")[0];
  
        if (scrollTop > stickyTop) {
          sticky.classList.add('sticky');
          sticky.style.marginTop = 0;
          if (this.props.layout === "tablet") {
          	this.setState({headingText: "Table for 2, tonight at 7:00 pm"});
            mainContainer.style.marginTop = "330px";
          	//paragraph.style.marginTop = stickyHeight + stickyHeaderHeight + "px";
          }
        } else {
          sticky.classList.remove('sticky');
          sticky.style.marginTop = stickyOriginalMarginTop;
          mainContainer.style.marginTop = 0;
          //paragraph.style.marginTop = 0;
          if (this.props.layout === "tablet") {
          	this.setState({headingText: "Make a Reservation"});
          }
        }
      });
    }
	render() {
		let heading, content;
		if (this.props.rest.type == "listing") {
			content = <ListingContent relatedRestaurants={this.props.rest.relatedRestaurants} />;

		} else {
			content = <DTPContent bookedToday={this.props.rest.bookedToday} />;
		}
		return (
			<div className={`SubContainer ${this.props.className}`} onClick={this.props.onClick}>
				<div className={"sticky-dtp"} data-sticky>
					<div className="SubContainer__heading">
						<div className="SubContainer__heading__text">{this.state.headingText}</div>
					</div>
					<div className="SubContainer__content">{ content }</div>
				</div>
			</div>
		);
	}
}