import React, { Component } from 'react';
import { TabGroup } from '../base/TabGroup';

export class ReviewSort extends Component {
  render() {
    return (
        <div className="ReviewSort">
          <TabGroup tabs={[{"name": "Newest"}]} />
        </div>
    );
  }
}