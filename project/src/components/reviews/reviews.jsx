import React from 'react';
import PropTypes from 'prop-types';

import CommentForm from '../comment-form/comment-form';
import Review from '../review/review';
import reviewProp from '../review/review.prop';
import {AuthorizationStatus} from '../../consts';

function Reviews(props) {
  const {reviews, id, authorizationStatus} = props;

  const reviewsPrepared = reviews
    .slice()
    .sort((reviewPrev, reviewNext) => new Date(reviewNext.date) - new Date(reviewPrev.date))
    .slice(0, 10);

  return (
    <section className="property__reviews reviews" data-testid="reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviewsPrepared.map((review) => (
          <Review
            key={review.id}
            review={review}
          />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.AUTH && <CommentForm id={id} />}
    </section>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp),
  id: PropTypes.number,
  authorizationStatus: PropTypes.string,
};

export default Reviews;
