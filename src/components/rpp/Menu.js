import React, { Component } from 'react';
import { MenuCategoryRow } from '../base/MenuCategoryRow';
import { MenuItem } from '../base/MenuItem';
import { LabelWithIcon } from '../base/LabelWithIcon';
import { FlexContainer } from '../base/FlexContainer';
import { MenuSelection } from './MenuSelection';

export class Menu extends Component {
    constructor(props){
      super(props);
      this.state = { menuPage: this.props.menuPages ? this.props.menuPages[0] : null };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(menuPage){
      if (this.state.menuPage != menuPage) {
        this.setState({ menuPage: menuPage });
      }
    }
    render() {
        if (this.props.menuItems && this.props.menuItems.length) {
          var rows = [];
          var lastCategory = null;
          var menuPage = this.state.menuPage.name;
          this.props.menuItems.forEach(function(item) {
            if (item.menuPage === menuPage) {
              if (item.category !== lastCategory) {
                rows.push(<MenuCategoryRow category={item.category} key={item.category} />);
              }
              rows.push(<MenuItem name={item.name} description={item.description} price={item.price} key={item.name} />);
              lastCategory = item.category;
            }
          });
          return (
              <div>
                <MenuSelection menuPages={this.props.menuPages} onClick={this.handleClick} selectedPage={this.state.menuPage} />
                <FlexContainer className="MenuItems" wrap="true">
                  {rows}
                </FlexContainer>
              </div>
          );
        } else {  // no menu items
          return (
            <LabelWithIcon
              text = "View menu on restaurant's website"
              img = "/img/icon-web.svg"
              imgAlt = "website"
              url = "www.thomaskeller.com/tfl/menu"
            />
          );
        }
    }
}