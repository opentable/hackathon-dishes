import React, { Component } from 'react';
import { HistogramBar } from './HistogramBar';

export class Histogram extends Component {
	render() {
		var ratingCounts = {"5":0, "4":0, "3":0, "2":0, "1":0};
		var totalCount = 0;

		this.props.reviews.forEach(function(review) {
			totalCount += 1;
			switch (review.rating) {
				case 5:
					ratingCounts["5"] += 1;
					break;
				case 4:
					ratingCounts["4"] += 1;
					break;
				case 3:
					ratingCounts["3"] += 1;
					break;
				case 2:
					ratingCounts["2"] += 1;
					break;
				case 1:
					ratingCounts["1"] += 1;
					break;
			}
		});
/*		var histogramBars;

		Object.keys(ratingCounts).forEach(function(key,index) {
			console.log(key);
			console.log(index);

		});*/
		console.log(totalCount);
		return (
			<div className = "Histogram">
				<HistogramBar text="5" width={ratingCounts["5"]/totalCount*100} />
				<HistogramBar text="4" width={ratingCounts["4"]/totalCount*100} />
				<HistogramBar text="3" width={ratingCounts["3"]/totalCount*100} />
				<HistogramBar text="2" width={ratingCounts["2"]/totalCount*100} />
				<HistogramBar text="1" width={ratingCounts["1"]/totalCount*100} />
			</div>
		);
	}
}