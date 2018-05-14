import React, { Component } from 'react';

export class Button extends Component {
  render(){
  	let className = this.props.className ? this.props.className : "";
    if (this.props.onClick) {
      return <button className={className} onClick={this.props.onClick}>{this.props.text}</button>
    }
    else {
      return <button className={className}>{this.props.text}</button>
    }
  }
}