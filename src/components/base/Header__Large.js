import React, { Component } from 'react';

export class Header__Large extends Component {
  render(){
  	let subtext = this.props.subtext ? (<span className="subtext">{this.props.subtext}</span>) : null;

    return (
    	<div className="HeaderText--large">
    		<h2>{this.props.headerText}</h2>
    		{ subtext }
    	</div>
    );
  }
}