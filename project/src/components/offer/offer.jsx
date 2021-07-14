import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {OfferTypes} from '../../consts';
import {fetchOffer} from '../../store/api-actions';

import Header from '../header/header';
import Reviews from '../reviews/reviews';
import Map from '../map/map';
import Cards from '../cards/cards';
import Loader from '../loader/loader';
import offerProp from '../offer/offer.prop';
import reviewProp from '../review/review.prop';

function Offer({offer, nearbyOffers, reviews, isDataLoaded, onPageLoad, authorizationStatus}) {
  const {id} = useParams();

  useEffect(() => {
    onPageLoad(id);
    window.scrollTo({ top: 0, left: 0 });
  }, [id, onPageLoad]);

  const {
    id: offerId,
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

  if (!isDataLoaded) {
    return (
      <Loader />
    );
  }

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images?.length && images.slice(0,6).map((image) => (
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
                  {OfferTypes[type?.toUpperCase()]}
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
                  {goods?.length && goods.map((item) => (
                    <li className="property__inside-item" key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className={`property__avatar-wrapper${host?.isPro ? ' property__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="property__avatar user__avatar" src={host?.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">{host?.name}</span>
                  {host?.isPro && (
                    <span className="property__user-status">
                      Pro
                    </span>
                  )}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <Reviews reviews={reviews} id={offerId} authorizationStatus={authorizationStatus} />
            </div>
          </div>
          <section className="property__map map">
            <Map offers={[...nearbyOffers, offer]} activeOffer={offer} />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <Cards offers={nearbyOffers} type="NEAR" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

Offer.propTypes = {
  offer: offerProp,
  nearbyOffers: PropTypes.arrayOf(offerProp),
  reviews: PropTypes.arrayOf(reviewProp),
  onPageLoad: PropTypes.func,
  isDataLoaded: PropTypes.bool,
  authorizationStatus: PropTypes.string,
};

const mapStateToProps = (state) => ({
  offer: state.offer,
  nearbyOffers: state.nearbyOffers,
  reviews: state.reviews,
  isDataLoaded: state.isDataLoaded,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onPageLoad(id) {
    dispatch(fetchOffer(id));
  },
});

export {Offer};

export default connect(mapStateToProps, mapDispatchToProps)(Offer);
