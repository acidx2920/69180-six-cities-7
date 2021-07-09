import React from 'react';
import PropTypes from 'prop-types';

import CommentForm from '../comment-form/comment-form';
import Review from '../review/review';
import reviewProp from '../review/review.prop';

function Reviews(props) {
  const {reviews} = props;

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review
            key={review.id}
            review={review}
          />
        ))}
      </ul>
      <CommentForm />
    </section>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(reviewProp),
};

export default Reviews;
