import React, { Component } from 'react';

export class Tag extends Component {
  render(){
  	if (this.props.onClick) {
	    return <li className="Tag" onClick={() => this.props.onClick()}>{this.props.tagName}</li>;
	} else {
		return <li className="Tag">{this.props.tagName}</li>;
	}
  }
}