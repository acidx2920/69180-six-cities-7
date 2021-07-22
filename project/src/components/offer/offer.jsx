import React, {useEffect, useCallback} from 'react';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {OfferTypes} from '../../consts';
import {fetchOffer} from '../../store/api-actions';

import Header from '../header/header';
import Reviews from '../reviews/reviews';
import Map from '../map/map';
import Cards from '../cards/cards';
import Loader from '../loader/loader';
import ButtonFavorite from '../button-favorite/button-favorite';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {getOffer, getNearbyOffers, getReviews, getIsDataLoaded} from '../../store/data/selectors';

function Offer() {
  const {id} = useParams();

  const offer = useSelector(getOffer);
  const nearbyOffers = useSelector(getNearbyOffers);
  const reviews = useSelector(getReviews);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const dispatch = useDispatch();
  const onPageLoad = useCallback((offerId) => {
    dispatch(fetchOffer(offerId));
  }, [dispatch]);

  useEffect(() => {
    onPageLoad(id);
    window.scrollTo({ top: 0, left: 0 });
  }, [id, onPageLoad]);

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
    isFavorite,
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
        <section className="property" data-testid="offer">
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
                <ButtonFavorite isFavorite={isFavorite} id={+id} cardType="MAIN" type="BIG" />
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
              <Reviews reviews={reviews} id={+id} authorizationStatus={authorizationStatus} />
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

export default Offer;
