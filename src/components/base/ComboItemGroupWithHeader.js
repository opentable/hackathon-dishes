import React, { Component } from 'react';
import { ComboItem } from './ComboItem';
import { FlexContainer } from './FlexContainer';

export class ComboItemGroupWithHeader extends Component {
  render(){
  	let comboItems = this.props.comboItems.map((comboItem)=>(<ComboItem item={comboItem} imgAlt={this.props.imgAlt} />));
    return (
      <div>
		<h3>{this.props.headerText}</h3>
		<FlexContainer>{comboItems}</FlexContainer>
	  </div>
    );
  }
}