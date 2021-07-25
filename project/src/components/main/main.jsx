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
import {getOffers, getOffersByCityAndSorting, getIsDataLoaded} from '../../store/data/selectors';
import {getActiveCity} from '../../store/offers/selectors';

function Main() {
  const offers = useSelector(getOffers);
  const isDataLoaded = useSelector(getIsDataLoaded);
  const activeCity = useSelector(getActiveCity);
  const offersByCityAndSorting = useSelector(getOffersByCityAndSorting);

  const [activeOffer, setActiveOffer] = useState(null);

  const dispatch = useDispatch();
  const onPageLoad = useCallback(() => {
    if(!offers.length) {
      dispatch(fetchOffers());
    }
  }, [dispatch, offers]);

  useEffect(() => {
    onPageLoad();
  }, [onPageLoad]);

  if (!isDataLoaded) {
    return (
      <Loader />
    );
  }

  if(!offersByCityAndSorting.length) {
    return <MainEmpty />;
  }

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index" data-testid="main">
        <h1 className="visually-hidden">Cities</h1>
        <Cities />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersByCityAndSorting.length} places to stay in {activeCity}</b>
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                <Cards type="MAIN" offers={offersByCityAndSorting} activeOffer={activeOffer} onActiveCardChange={setActiveOffer} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offersByCityAndSorting} activeOffer={activeOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Main;
