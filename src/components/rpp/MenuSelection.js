import React, { Component } from 'react';
import { TabGroup } from '../base/TabGroup';

export class MenuSelection extends Component {
  render() {
    return (
        <div className="MenuSelection">
          <TabGroup tabs={this.props.menuPages} onClick={this.props.onClick} selectedPage={this.props.selectedPage} />
        </div>
    );
  }
}