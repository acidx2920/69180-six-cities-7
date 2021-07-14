import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import offerProp from '../offer/offer.prop';
import { OfferTypes, CardTypes } from '../../consts';

function Card(props) {
  const {
    offer,
    type: cardType,
    isActive,
    handleMouseEnter,
    handleMouseLeave,
  } = props;
  const {
    id,
    previewImage,
    isFavorite,
    isPremium,
    price,
    rating,
    title,
    type,
  } = offer;

  return (
    <article className={`${CardTypes[cardType].articleClass} place-card${isActive ? ' place-card--active' : ''}`} onMouseEnter={() => handleMouseEnter(offer)} onMouseLeave={handleMouseLeave}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${CardTypes[cardType].imageClass} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button${isFavorite ? ' place-card__bookmark-button--active' : ''} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${Math.round(rating)*20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{OfferTypes[type?.toUpperCase()]}</p>
      </div>
    </article>
  );
}

Card.propTypes = {
  type: PropTypes.string,
  offer: offerProp.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
};

export default Card;
