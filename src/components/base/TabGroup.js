import React, { Component } from 'react';
import { Tab } from './Tab';

export class TabGroup extends Component {
  render(){
  	if (this.props.tabs) {
	  	let tabs = this.props.tabs.map((tab)=><Tab tab={tab} onClick={this.props.onClick} selected={this.props.selected} />);
	    return (
	    	<ul className="TabGroup">
	    		{tabs}
	    	</ul>
	    );
	} else {
		return null;
	}
  }
}

