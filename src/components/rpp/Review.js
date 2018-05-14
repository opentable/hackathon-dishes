import React, { Component } from 'react';
import { SummaryRating } from './SummaryRating';

export class Review extends Component {
    render() {
        let review = this.props.review;
        let location;
        if (review.location.length && review.location.length > 1) {
            location = ` from ${review.location.replace("(","").replace(")","")}`;
        }
        return (
            <div className="review">
                <img src={this.props.img} className="img-review" alt="userprofile" />
                <div className="review-heading">
                    <div className="review-user">{review.name}{location}</div>
                    <div className="review-subtext"><SummaryRating rating={review.rating} />  &nbsp;•  {review.date}</div>
                </div>
                <div className="review-text">{review.text}</div>
            </div>
        );
    }
}