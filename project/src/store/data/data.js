import {createReducer} from '@reduxjs/toolkit';
import {setLoadedStatus, getOffers, getOffer, getNearbyOffers, getReviews} from '../action';

const initialState = {
  offers: [],
  offer: {},
  nearbyOffers: [],
  reviews: [],
  isDataLoaded: false,
};

const data = createReducer(initialState, (builder) => {
  builder
    .addCase(setLoadedStatus, (state, action) => {
      state.isDataLoaded = action.payload;
    })
    .addCase(getOffers, (state, action) => {
      state.isDataLoaded = true;
      state.offers = action.payload;
    })
    .addCase(getOffer, (state, action) => {
      state.isDataLoaded = true;
      state.offer = action.payload;
    })
    .addCase(getNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(getReviews, (state, action) => {
      state.reviews = action.payload;
    });
});

export {data};
