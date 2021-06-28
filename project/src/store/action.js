export const ActionType = {
  CHANGE_CITY: 'data/changeCity',
  GET_OFFERS: 'data/getOffers',
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
};
