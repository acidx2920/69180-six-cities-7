import React from 'react';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';
import ButtonFavorite from '../button-favorite/button-favorite';
import offerProp from '../offer/offer.prop';
import {OfferTypes, CardTypes} from '../../consts';

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
    <article
      className={`${CardTypes[cardType].articleClass} place-card${isActive ? ' place-card--active' : ''}`}
      onMouseEnter={() => handleMouseEnter(offer)}
      onMouseLeave={handleMouseLeave}
      data-testid="card"
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${CardTypes[cardType].imageClass} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img className="place-card__image" src={previewImage} width={CardTypes[cardType].imageWidth} height={CardTypes[cardType].imageHeight} alt="Place" />
        </Link>
      </div>
      <div className={`${CardTypes[cardType].infoClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <ButtonFavorite isFavorite={isFavorite} id={id} cardType={cardType} />
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
  type: PropTypes.string.isRequired,
  offer: offerProp.isRequired,
  isActive: PropTypes.bool.isRequired,
  handleMouseEnter: PropTypes.func.isRequired,
  handleMouseLeave: PropTypes.func.isRequired,
};

export default Card;
