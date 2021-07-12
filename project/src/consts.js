export const AppRoute = {
  FAVORITES: '/favorites',
  LOGIN: '/login',
  ROOM: '/offer/:id',
  ROOT: '/',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
};

export const APIRoute = {
  OFFERS: '/hotels',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const OfferTypes = {
  APARTMENT: 'Apartment',
  ROOM: 'Private Room',
  HOUSE: 'House',
  HOTEL: 'Hotel',
};

export const CardTypes = {
  MAIN: {
    articleClass: 'cities__place-card',
    imageClass: 'cities__image-wrapper',
  },
  NEAR: {
    articleClass: 'near-places__card',
    imageClass: 'near-places__image-wrapper',
  },
};

export const SortingTypes = {
  POPULAR: 'Popular',
  PRICE_LOW: 'Price: low to high',
  PRICE_HIGH: 'Price: high to low',
  RATING: 'Top rated first',
};

export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf',
];

export const DEFAULT_CITY = 'Paris';
export const DEFAULT_SORTING = SortingTypes.POPULAR;
export const ACTIVE_MARKER_URL = 'img/pin-active.svg';
export const DEFAULT_MARKER_URL = 'img/pin.svg';
