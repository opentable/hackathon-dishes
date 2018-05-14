import React, { Component } from 'react';
import { Container } from './base/Container';

export class Nav extends Component {
	constructor(props) {
		super(props);
		this.displaySelectedNav = this.displaySelectedNav.bind(this);
	}

	displaySelectedNav() {
		let navHeight = document.getElementsByClassName("Nav")[0].offsetHeight;
		let top = document.documentElement.scrollTop || document.body.scrollTop;
		top = top + navHeight + 120;

		let navItems = document.getElementsByClassName("navItem");
		let selected = false;

		// if scrollTop >= top of navItemhref, add selected
		for (let i=(navItems.length-1); i>=0; i--) {
			let sectionOffsetTop = document.getElementById(`nav-${navItems[i].id}`).offsetTop;
			let nextSectionOffsetTop;
			if (i!==navItems.length-1){
				nextSectionOffsetTop = document.getElementById(`nav-${navItems[i+1].id}`).offsetTop;
			}
			if (sectionOffsetTop <= top && (!nextSectionOffsetTop || nextSectionOffsetTop > top)) {
				navItems[i].className += " selected";
				selected = true;
			} else {
				navItems[i].className = "navItem";
			}
		}
		if (!selected) {
			navItems[0].className += " selected";
		}

	}

	componentDidMount() {
		this.displaySelectedNav();

		document.addEventListener('scroll', () => {
			this.displaySelectedNav();
		});
	}

	render() {
		let navItems = ["overview", "photos", "menu","reviews", "details"]
		if (this.props.photoCount === 0) {
			navItems = ["overview", "menu","reviews"]
		}
		navItems = navItems.map((navItem) => <a href={"#nav-"+navItem} id={navItem} className="navItem"><li>{navItem}</li></a>)
		return (
			<div className="Nav noselect">
				<Container>
					<ul>
						{ navItems }
					</ul>
				</Container>
			</div>
		);
	}
}