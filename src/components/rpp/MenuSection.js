import React, { Component } from 'react';
import { SectionWithHeader } from '../base/SectionWithHeader';
import { TopDishes } from './TopDishes';
import { Menu } from './Menu';

export class MenuSection extends Component {
    render() {
    	let menuUpdated;
        let menuFooter;
    	if (this.props.menuUpdated) {
    		menuUpdated = "Last updated: " + this.props.menuUpdated;
    	}
        if (this.props.menuItems.length > 0) {
            menuFooter = (
                <div className = "Menu__footer">
                  <img src="/img/single-platform-logo.png"  alt="single-platform" />
                </div>
                );
        }
        let headerText=<span className="headerTextBold">Menu</span>
        return (
            <SectionWithHeader className="Menu" id="nav-menu" headerText={headerText} subtext={menuUpdated} id={this.props.id}>
                {/* <TopDishes dishes={this.props.topDishes} /> */}
                <Menu menuItems={this.props.menuItems} menuPages={this.props.menuPages} />
                { menuFooter }
            </SectionWithHeader>
        );
    }
}