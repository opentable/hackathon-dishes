import React, { Component } from 'react';
import { SummaryRating } from './custom/SummaryRating';
import { RatingBreakdown } from './custom/RatingBreakdown';
import { Histogram } from './custom/Histogram';
import { Review } from './custom/Review';
import { ReviewSort } from './custom/ReviewSort';
import { SectionWithHeader } from './base/SectionWithHeader';
import { FlexContainer } from './base/FlexContainer';
import { LabelWithIcon } from './base/LabelWithIcon';

export class Reviews extends Component {
    render() {
        let { reviews, rating, ratingFood, ratingAmbience, ratingService, ratingValue, reviewCount } = this.props;
        let reviewImg;
        let displayedReviews = reviews.slice(0, 9).map(function(review, index) {
            if (index % 3 === 0) {
                reviewImg = "/img/icon-user-profile3.jpg";
            } else if (index % 2 === 0) {
                reviewImg = "/img/icon-user-profile2.jpg";
            } else {
                reviewImg = "/img/icon-user-profile.jpg";
            }
            return <Review review={review} img={reviewImg} />;
        });
        let displayedRating;
        let noiseLevelText=<div><span className="textMedium">Noise • </span>{this.props.noiseLevel}</div>;
        let recommendPercent=<div><span className="textMedium">{this.props.recommendPercent}%</span> of diners would recommend this</div>;
        if (rating) {
            displayedRating = (
                <FlexContainer wrap="true">
                    <div className="column-two">
                        <h3 className="Rating--overall">Overall Rating and Reviews</h3>
                        <div className="Rating--based-on">Reviews can only be made by diners who have<br />eaten at this restaurant.</div>
                        <SummaryRating rating={rating} />
                        <div className="Rating--ratingBreakdown">
                            <RatingBreakdown rating={ratingFood} type="Food" />
                            <RatingBreakdown rating={ratingAmbience} type="Ambience" />
                            <RatingBreakdown rating={ratingService} type="Service" />
                            <RatingBreakdown rating={ratingValue} type="Value" />
                        </div>
                        <LabelWithIcon
                            text = {noiseLevelText}
                            img = "/img/ic_noise_level.svg"
                            imgAlt = "noiseLevel"
                        />
                    </div>
                    <div className="column-two">
                        <Histogram reviews={reviews} />
                    </div>
                </FlexContainer>
            );
        }
        let headerText=<div>What <span className="headerTextBold">{reviewCount}</span> Diners are Saying</div>;
        return (
            <SectionWithHeader headerText = {headerText} className="Reviews" id={this.props.id}>
                {displayedRating}
                <div className = "reviews">
                    <img src="img/reviews-sort.jpg"  alt="reviews pagination" className="reviews-pagination" />
                    { displayedReviews }
                    <img src="img/reviews-pagination.png"  alt="reviews pagination" className="reviews-pagination" />
                </div>
            </SectionWithHeader>
        );
    }
}