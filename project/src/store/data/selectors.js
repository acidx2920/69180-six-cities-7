import {NameSpace} from '../root-reducer';

export const getOffer = (state) => state[NameSpace.DATA].offer;
export const getOffers = (state) => state[NameSpace.DATA].offers;
export const getFavorites = (state) => state[NameSpace.DATA].favorites;
export const getNearbyOffers = (state) => state[NameSpace.DATA].nearbyOffers;
export const getReviews = (state) => state[NameSpace.DATA].reviews;
export const getIsDataLoaded = (state) => state[NameSpace.DATA].isDataLoaded;
