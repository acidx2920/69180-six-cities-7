import {createReducer} from '@reduxjs/toolkit';
import {setLoadedStatus, getOffers, getOffer, getNearbyOffers, getReviews, getFavorites, updateOffer, removeFavorite} from '../action';

const updateById = (array, updatedItem) => {
  const index = array.findIndex((item) => item.id === updatedItem.id);
  const result = array.slice();
  result[index] = updatedItem;
  return result;
};
const removeById = (array, id) => array.filter((item) => item.id !== id);

const initialState = {
  offers: [],
  offer: {},
  nearbyOffers: [],
  favorites: [],
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
    .addCase(updateOffer, (state, action) => {
      state.offers = updateById(state.offers, action.payload);
      state.nearbyOffers = updateById(state.nearbyOffers, action.payload);
      if(state.offer.id === action.payload.id) {
        state.offer = action.payload;
      }
    })
    .addCase(getNearbyOffers, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(getFavorites, (state, action) => {
      state.isDataLoaded = true;
      state.favorites = action.payload;
    })
    .addCase(getReviews, (state, action) => {
      state.reviews = action.payload;
    })
    .addCase(removeFavorite, (state, action) => {
      state.favorites = removeById(state.favorites, action.payload);
    });
});

export {data};
