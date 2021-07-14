export const ActionType = {
  CHANGE_CITY: 'app/changeCity',
  SET_LOADED_STATUS: 'data/setLoadedStatus',
  GET_OFFERS: 'data/getOffers',
  GET_OFFER: 'data/getOffer',
  GET_NEARBY_OFFERS: 'data/getNearbyOffers',
  GET_REVIEWS: 'data/getReviews',
  ADD_REVIEW: 'app/addReview',
  CHANGE_SORTING: 'app/changeSorting',
  REQUIRE_AUTHORIZATION: 'user/requireAuthorization',
  SET_AUTHORIZATION_INFO: 'user/setAuthorizationInfo',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'app/redirectToRoute',
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  setLoadedStatus: (status) => ({
    type: ActionType.SET_LOADED_STATUS,
    payload: status,
  }),
  getOffers: (offers) => ({
    type: ActionType.GET_OFFERS,
    payload: offers,
  }),
  getOffer: (offer) => ({
    type: ActionType.GET_OFFER,
    payload: offer,
  }),
  getNearbyOffers: (offers) => ({
    type: ActionType.GET_NEARBY_OFFERS,
    payload: offers,
  }),
  getReviews: (reviews) => ({
    type: ActionType.GET_REVIEWS,
    payload: reviews,
  }),
  addReview: (review) => ({
    type: ActionType.ADD_REVIEW,
    payload: review,
  }),
  changeSorting: (sortingType) => ({
    type: ActionType.CHANGE_SORTING,
    payload: sortingType,
  }),
  requireAuthorization: (status) => ({
    type: ActionType.REQUIRE_AUTHORIZATION,
    payload: status,
  }),
  setAuthorizationInfo: (info) => ({
    type: ActionType.SET_AUTHORIZATION_INFO,
    payload: info,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),
  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
