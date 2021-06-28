import {ActionType} from './action';
import offers from '../mocks/offers';
import {DEFAULT_CITY} from '../consts';

const initialState = {
  offers,
  activeCity: DEFAULT_CITY,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return {
        ...state,
        activeCity: action.payload,
      };
    case ActionType.GET_OFFERS:
      return {
        ...state,
        offers: action.payload,
      };
    default:
      return state;
  }
};

export {reducer};
