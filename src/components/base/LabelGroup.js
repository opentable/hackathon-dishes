import React, { Component } from 'react';

export class LabelGroup extends Component {
  render(){
    return (
    	<div className="LabelGroup">
    		{this.props.children}
    	</div>
    );
  }
}

