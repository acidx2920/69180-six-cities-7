export const ActionType = {
  CHANGE_CITY: 'app/changeCity',
  GET_OFFERS: 'data/getOffers',
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
  getOffers: (offers) => ({
    type: ActionType.GET_OFFERS,
    payload: offers,
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
