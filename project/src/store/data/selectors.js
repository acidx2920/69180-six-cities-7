import {createSelector} from 'reselect';
import memoize from 'lodash.memoize';
import {NameSpace} from '../root-reducer';
import {getActiveSorting, getActiveCity} from '../offers/selectors';
import {SortingTypes} from '../../consts';

export const getOffer = (state) => state[NameSpace.DATA].offer;
export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getFavorites = (state) => state[NameSpace.DATA].favorites;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getIsDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;

export const getOffersByCityAndSorting = createSelector(
  [getOffers, getActiveCity, getActiveSorting],
  (offers, activeCity, activeSorting) => {
    const offersByCity = offers.filter((offer) => offer.city.name === activeCity);
    switch (activeSorting) {
      case SortingTypes.PRICE_LOW:
        return offersByCity.sort((a, b) => (a.price - b.price));
      case SortingTypes.PRICE_HIGH:
        return offersByCity.sort((a, b) => (b.price - a.price));
      case SortingTypes.RATING:
        return offersByCity.sort((a, b) => (b.rating - a.rating));
      default:
        return offersByCity;
    }
  },
);

export const getFavoritesByCity = createSelector(
  getFavorites,
  (favorites) => memoize(
    (city) => favorites.filter((item) => item.city.name === city),
  ),
);
