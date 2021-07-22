export const AppRoute = {
  FAVORITES: '/favorites',
  LOGIN: '/login',
  OFFER: '/offer/:id',
  ROOT: '/',
  NOT_FOUND: '/404',
};

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
};

export const APIRoute = {
  OFFERS: '/hotels',
  REVIEWS: '/comments',
  FAVORITES: '/favorite',
  LOGIN: '/login',
  LOGOUT: '/logout',
};

export const OfferTypes = {
  APARTMENT: 'Apartment',
  ROOM: 'Private Room',
  HOUSE: 'House',
  HOTEL: 'Hotel',
};

export const BookmarkButtonTypes = {
  BIG: {
    classPrefix: 'property',
    width: 31,
    height: 33,
  },
  SMALL: {
    classPrefix: 'place-card',
    width: 18,
    height: 19,
  },
};

export const CardTypes = {
  MAIN: {
    articleClass: 'cities__place-card',
    imageClass: 'cities__image-wrapper',
    imageWidth: '260',
    imageHeight: '200',
    infoClass: '',
  },
  NEAR: {
    articleClass: 'near-places__card',
    imageClass: 'near-places__image-wrapper',
    imageWidth: '260',
    imageHeight: '200',
    infoClass: '',
  },
  FAVORITES: {
    articleClass: 'favorites__card',
    imageClass: 'favorites__image-wrapper',
    imageWidth: '150',
    imageHeight: '110',
    infoClass: 'favorites__card-info',
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
