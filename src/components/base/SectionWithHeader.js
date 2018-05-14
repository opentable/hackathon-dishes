import React, { Component } from 'react';
import { Header__Large } from './Header__Large';

export class SectionWithHeader extends Component {
  render(){
    return (
      <div className={`Section ${this.props.className}`} id={this.props.id}>
      	<Header__Large headerTextBold={this.props.headerTextBold} headerText={this.props.headerText} subtext={this.props.subtext} />
		{this.props.children}
	</div>
    );
  }
}