import React, { Component } from 'react';

export class Paragraph extends Component {
  render(){
    return (
    	<div className="section paragraph">
			<p>{this.props.text}</p>
		</div>
    );
  }
}




	        		