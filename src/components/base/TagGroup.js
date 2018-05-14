import React, { Component } from 'react';
import { Tag } from './Tag';
import { LabelWithIcon } from './LabelWithIcon';

export class TagGroup extends Component {
  render(){
  	if (this.props.tags && this.props.tags.length > 0) {
	  	let tags = this.props.tags.map((tag)=><Tag tagName={tag} />);
	    return (
	    	<ul className="TagGroup">
	    		<LabelWithIcon
					text = "Top Tags:"
					img = "/img/icon-tag.svg"
					imgAlt = "tag"
				/>
	    		{tags}
	    	</ul>
	    );
	} else {
		return null;
	}
  }
}

