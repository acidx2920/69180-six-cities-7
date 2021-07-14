import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchOffers} from '../../store/api-actions';

import Header from '../header/header';
import Cards from '../cards/cards';
import Map from '../map/map';
import Cities from '../cities/cities';
import Sorting from '../sorting/sorting';
import Loader from '../loader/loader';
import offerProp from '../offer/offer.prop';
import {SortingTypes} from '../../consts';

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

function Main(props) {
  const {offers, activeCity, isDataLoaded, onPageLoad} = props;
  const [activeOffer, setActiveOffer] = useState(null);

  useEffect(() => {
    onPageLoad();
  }, [onPageLoad]);

  if (!isDataLoaded) {
    return (
      <Loader />
    );
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
              <b className="places__found">{offers.length} places to stay in {activeCity}</b>
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                <Cards type="MAIN" offers={offers} activeOffer={activeOffer} setActiveOffer={setActiveOffer} />
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} activeOffer={activeOffer} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Main.propTypes = {
  offers: PropTypes.arrayOf(offerProp),
  activeCity: PropTypes.string.isRequired,
  onPageLoad: PropTypes.func.isRequired,
  isDataLoaded: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  offers: sortOffers(getOffersByCity(state.offers, state.activeCity), state.activeSorting),
  activeCity: state.activeCity,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onPageLoad() {
    dispatch(fetchOffers());
  },
});

export {Main};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
