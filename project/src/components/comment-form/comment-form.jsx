import React, {useState} from 'react';

import RadioButton from '../radio-button/radio-button';

function CommentForm() {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setFormData({...formData, [name]: value});
  };

  const radioButtons = [
    {value: '5', title: 'perfect'},
    {value: '4', title: 'good'},
    {value: '3', title: 'not bad'},
    {value: '2', title: 'badly'},
    {value: '1', title: 'terribly'},
  ];

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {radioButtons.map((item) => <RadioButton key={item.value} value={item.value} title={item.title} checked={formData.rating === item.value} handleChange={handleChange} /> )}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={formData.review} onChange={handleChange} />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default CommentForm;
