import React from 'react';
import PropTypes from 'prop-types';

function RadioButton(props) {
  const {value, title, checked, disabled, onButtonChange} = props;

  return (
    <>
      <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" checked={checked} disabled={disabled} onChange={onButtonChange} data-testid="radio-button" />
      <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

RadioButton.propTypes = {
  value: PropTypes.number.isRequired,
  title: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
  onButtonChange: PropTypes.func.isRequired,
};

export default RadioButton;
