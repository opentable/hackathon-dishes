import React, { Component } from 'react';

export class Tab extends Component {
  render(){
  	var tab = this.props.tab;
  	var selected = this.props.selected === tab ? "selected" : "";
    return (
    <div className="TabContainer">
      <li className={`ButtonSecondary Tab ${selected}`} onClick={() => this.props.onClick(tab)}>
      	<span className="name">{tab.name}</span>
      	<span className="slider"></span>
      </li>
    </div>
    );
  }
}