import {ActionType} from './action';
import {DEFAULT_CITY, AuthorizationStatus} from '../consts';

const initialState = {
  offers: [],
  activeCity: DEFAULT_CITY,
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationInfo: {},
  isDataLoaded: false,
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
        isDataLoaded: true,
      };
    case ActionType.REQUIRE_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case ActionType.SET_AUTHORIZATION_INFO:
      return {
        ...state,
        authorizationInfo: action.payload,
      };
    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };
    default:
      return state;
  }
};

export {reducer};
