import React, {useState} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../header/header';
import Cards from '../cards/cards';
import Map from '../map/map';
import Cities from '../cities/cities';
import offerProp from '../offer/offer.prop';

const getOffersByCity = (offers, city) => (
  offers.filter((offer) => offer.city.name === city)
);

function Main(props) {
  const [activeOffer, setActiveOffer] = useState(null);
  const {offers, activeCity} = props;

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select" />
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
              </form>
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
};

const mapStateToProps = (state) => ({
  offers: getOffersByCity(state.offers, state.activeCity),
  activeCity: state.activeCity,
});

export {Main};

export default connect(mapStateToProps)(Main);
