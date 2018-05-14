import React, { Component } from 'react';

export class Timeslot extends Component {
  render(){
    return (
      <div className="ButtonSecondary Timeslot"><div className="TimeslotTime">{this.props.time}</div></div>
    );
  }
}