import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SET_LOADED_STATUS: 'data/setLoadedStatus',
  GET_OFFERS: 'data/getOffers',
  GET_OFFER: 'data/getOffer',
  GET_NEARBY_OFFERS: 'data/getNearbyOffers',
  GET_REVIEWS: 'data/getReviews',
  GET_FAVORITES: 'data/getFavorites',
  UPDATE_OFFER: 'data/updateOffer',
  REMOVE_FAVORITE: 'data/removeFavorite',
  CHANGE_CITY: 'offers/changeCity',
  ADD_REVIEW: 'offers/addReview',
  CHANGE_SORTING: 'offers/changeSorting',
  REDIRECT_TO_ROUTE: 'offers/redirectToRoute',
  REQUIRE_AUTHORIZATION: 'user/requireAuthorization',
  SET_AUTHORIZATION_INFO: 'user/setAuthorizationInfo',
  LOGOUT: 'user/logout',
};

export const changeCity = createAction(ActionType.CHANGE_CITY, (city) => ({
  payload: city,
}));

export const setLoadedStatus = createAction(ActionType.SET_LOADED_STATUS, (status) => ({
  payload: status,
}));

export const getOffers = createAction(ActionType.GET_OFFERS, (offers) => ({
  payload: offers,
}));

export const getOffer = createAction(ActionType.GET_OFFER, (offer) => ({
  payload: offer,
}));

export const getNearbyOffers = createAction(ActionType.GET_NEARBY_OFFERS, (offers) => ({
  payload: offers,
}));

export const getReviews = createAction(ActionType.GET_REVIEWS, (reviews) => ({
  payload: reviews,
}));

export const getFavorites = createAction(ActionType.GET_FAVORITES, (offers) => ({
  payload: offers,
}));

export const addReview = createAction(ActionType.ADD_REVIEW, (review) => ({
  payload: review,
}));

export const changeSorting = createAction(ActionType.CHANGE_SORTING, (sortingType) => ({
  payload: sortingType,
}));

export const requireAuthorization = createAction(ActionType.REQUIRE_AUTHORIZATION, (status) => ({
  payload: status,
}));

export const setAuthorizationInfo = createAction(ActionType.SET_AUTHORIZATION_INFO, (info) => ({
  payload: info,
}));

export const logout = createAction(ActionType.LOGOUT);

export const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({
  payload: url,
}));

export const updateOffer = createAction(ActionType.UPDATE_OFFER, (offer) => ({
  payload: offer,
}));

export const removeFavorite = createAction(ActionType.REMOVE_FAVORITE, (id) => ({
  payload: id,
}));
