import React, { Component } from 'react';
import { Timeslot } from './Timeslot';
import { FlexContainer } from './FlexContainer';

export class TimeslotGroup extends Component {
  render(){
  	let timeslots = ["6:00 pm","6:15 pm","6:30 pm","7:00 pm", "7:30 pm"];
  	timeslots = timeslots.map((timeslot)=><div className="column-three"><Timeslot time={timeslot} /></div>);
    return (
    	<FlexContainer className="TimeslotGroup">
    		{timeslots}
    	</FlexContainer>
    );
  }
}

