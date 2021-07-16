import React, {useState, useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchOffers} from '../../store/api-actions';

import Header from '../header/header';
import Cards from '../cards/cards';
import Map from '../map/map';
import Cities from '../cities/cities';
import Sorting from '../sorting/sorting';
import Loader from '../loader/loader';
import MainEmpty from '../main-empty/main-empty';
import {SortingTypes} from '../../consts';
import {getOffers, getIsDataLoaded} from '../../store/data/selectors';
import {getActiveSorting, getActiveCity} from '../../store/offers/selectors';

const getOffersByCity = (offers, city) => (
  offers.filter((offer) => offer.city.name === city)
);

const sortOffers = (offers, sortingType) => {
  switch (sortingType) {
    case SortingTypes.PRICE_LOW:
      return [...offers].sort((a, b) => (a.price - b.price));
    case SortingTypes.PRICE_HIGH:
      return [...offers].sort((a, b) => (b.price - a.price));
    case SortingTypes.RATING:
      return [...offers].sort((a, b) => (b.rating - a.rating));
    default:
      return [...offers];
  }
};

function Main() {
  const activeCity = useSelector(getActiveCity);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const offers = useSelector(getOffers);
  const activeSorting = useSelector(getActiveSorting);

  const [activeOffer, setActiveOffer] = useState(null);

  const dispatch = useDispatch();
  const onPageLoad = useCallback(() => {
    dispatch(fetchOffers());
  }, [dispatch]);

  useEffect(() => {
    onPageLoad();
  }, [onPageLoad]);

  const offersPrepared = sortOffers(getOffersByCity(offers, activeCity), activeSorting);

  if (!isDataLoaded) {
    return (
      <Loader />
    );
  }

  if(!offersPrepared.length) {
    return <MainEmpty />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Cities />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersPrepared.length} places to stay in {activeCity}</b>
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                <Cards type="MAIN" offers={offersPrepared} activeOffer={activeOffer} setActiveOffer={setActiveOffer} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offersPrepared} activeOffer={activeOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
