import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {postComment} from '../../store/api-actions';
import RadioButton from '../radio-button/radio-button';

const Comment = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 300,
};

function CommentForm({id}) {
  const [formData, setFormData] = useState({
    rating: 0,
    comment: '',
  });

  const [isSending, setIsSending] = useState(false);

  const dispatch = useDispatch();
  const onFormSubmit = (offerId, formComment, formRating) => {
    dispatch(postComment({
      id: offerId,
      comment: formComment,
      rating: formRating,
    }))
      .finally(() => setIsSending(false));
  };

  const {rating, comment} = formData;

  const handleCommentChange = (evt) => {
    setFormData({
      ...formData,
      comment: evt.target.value,
    });
  };

  const handleRatingChange = (evt) => {
    setFormData({
      ...formData,
      rating: Number(evt.target.value),
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setIsSending(true);
    onFormSubmit(id, comment, rating);

    setFormData({
      rating: 0,
      comment: '',
    });
  };

  const radioButtons = [
    {value: 5, title: 'perfect'},
    {value: 4, title: 'good'},
    {value: 3, title: 'not bad'},
    {value: 2, title: 'badly'},
    {value: 1, title: 'terribly'},
  ];

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit} data-testid="comment-form">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {radioButtons.map((item) => <RadioButton key={item.value} value={item.value} title={item.title} checked={formData.rating === item.value} disabled={isSending} onButtonChange={handleRatingChange} /> )}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={formData.comment} onChange={handleCommentChange} maxLength={Comment.MAX_LENGTH} disabled={isSending} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{Comment.MIN_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={comment.length < Comment.MIN_LENGTH || !rating || isSending}>Submit</button>
      </div>
    </form>
  );
}

CommentForm.propTypes = {
  id: PropTypes.number,
};

export default CommentForm;
