import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {OfferTypes} from '../../consts';

import Header from '../header/header';
import Reviews from '../reviews/reviews';
import Map from '../map/map';
import Cards from '../cards/cards';
import offerProp from '../offer/offer.prop';
// import reviewProp from '../review/review.prop';

function Offer(props) {
  const {offers} = props;
  const offer = offers[0];
  const {
    title,
    description,
    rating,
    price,
    images,
    bedrooms,
    goods,
    host,
    isPremium,
    maxAdults,
    type,
  } = offer;

  const reviews = [
    {
      'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'date': '2019-05-08T14:13:56.569Z',
      'id': 1,
      'rating': 4,
      'user': {
        'avatarUrl': 'img/avatar-angelina.jpg',
        'id': 4,
        'isPro': false,
        'name': 'Max',
      },
    },
    {
      'comment': 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      'date': '2020-05-08T14:13:56.569Z',
      'id': 2,
      'rating': 4,
      'user': {
        'avatarUrl': 'img/avatar-angelina.jpg',
        'id': 4,
        'isPro': false,
        'name': 'Max',
      },
    },
    {
      'comment': '3',
      'date': '2019-05-08T14:13:56.57Z',
      'id': 3,
      'rating': 4,
      'user': {
        'avatarUrl': 'img/avatar-angelina.jpg',
        'id': 4,
        'isPro': false,
        'name': 'Max',
      },
    },
  ];

  const reviewsPrepared = reviews
    .sort((reviewPrev, reviewNext) => new Date(reviewNext.date) - new Date(reviewPrev.date))
    .slice(0, 10);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.slice(0,6).map((image) => (
                <div className="property__image-wrapper" key={image}>
                  <img className="property__image" src={image} alt="Studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && (
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark" />
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${Math.round(rating)*20}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {OfferTypes[type.toUpperCase()]}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((item) => (
                    <li className="property__inside-item" key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper${host.isPro ? ' property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  {host.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <Reviews reviews={reviewsPrepared} />
            </div>
          </div>
          <section className="property__map map">
            <Map offers={offers.slice(0, 3)} activeOffer={offer} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <Cards offers={offers.slice(0, 3)} type="NEAR" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

Offer.propTypes = {
  offers: PropTypes.arrayOf(offerProp),
  // reviews: PropTypes.arrayOf(reviewProp),
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

export default connect(mapStateToProps)(Offer);
