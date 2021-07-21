import {
  changeCity,
  setLoadedStatus,
  getOffers,
  getOffer,
  getNearbyOffers,
  getReviews,
  getFavorites,
  addReview,
  changeSorting,
  requireAuthorization,
  setAuthorizationInfo,
  logout,
  redirectToRoute,
  updateOffer,
  removeFavorite,
  ActionType
} from './action';

const offers = [
  {
    id: 121,
    title: 'Beautiful & luxurious studio at great location',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    previewImage: 'img/apartment-01.jpg',
    images: ['img/apartment-01.jpg'],
    price: 120,
    rating: 4.0,
    type: 'apartment',
    isFavorite: false,
    isPremium: true,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      id: 3,
      name: 'Angelina',
      avatarUrl: 'img/1.png',
      isPro: true,
    },
  },
  {
    id: 122,
    title: 'Wood and stone place',
    description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
    previewImage: 'img/room.jpg',
    images: ['img/room.jpg'],
    price: 80,
    rating: 4.0,
    type: 'room',
    isFavorite: true,
    isPremium: false,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Amsterdam',
    },
    location: {
      latitude: 52.369553943508,
      longitude: 4.85309666406198,
      zoom: 8,
    },
    maxAdults: 4,
    bedrooms: 3,
    goods: ['Heating', 'Kitchen', 'Cable TV', 'Washing machine', 'Coffee machine', 'Dishwasher'],
    host: {
      id: 3,
      name: 'Angelina',
      avatarUrl: 'img/1.png',
      isPro: true,
    },
  },
];
const offer = offers[0];
const reviews = [
  {
    id: 1,
    user: {
      id: 16,
      isPro: true,
      name: 'Mollie',
      avatarUrl: 'https://7.react.pages.academy/static/avatar/7.jpg',
    },
    rating: 3,
    comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
    date: '2021-06-30T16:51:35.215Z',
  },
  {
    id: 2,
    user: {
      id: 12,
      isPro: true,
      name: 'Isaac',
      avatarUrl: 'https://7.react.pages.academy/static/avatar/3.jpg',
    },
    rating: 4,
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2021-06-30T16:51:35.215Z',
  },
];
const review = reviews[0];

describe('Actions', () => {
  it('action creator for changing city returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_CITY,
      payload: 'Paris',
    };

    expect(changeCity('Paris')).toEqual(expectedAction);
  });

  it('action creator for setting loaded status returns correct action', () => {
    const expectedAction = {
      type: ActionType.SET_LOADED_STATUS,
      payload: true,
    };

    expect(setLoadedStatus(true)).toEqual(expectedAction);
  });

  it('action creator for getting offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.GET_OFFERS,
      payload: offers,
    };

    expect(getOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for getting offer returns correct action', () => {
    const expectedAction = {
      type: ActionType.GET_OFFER,
      payload: offer,
    };

    expect(getOffer(offer)).toEqual(expectedAction);
  });

  it('action creator for getting nearby offers returns correct action', () => {
    const expectedAction = {
      type: ActionType.GET_NEARBY_OFFERS,
      payload: offers,
    };

    expect(getNearbyOffers(offers)).toEqual(expectedAction);
  });

  it('action creator for getting reviews returns correct action', () => {
    const expectedAction = {
      type: ActionType.GET_REVIEWS,
      payload: reviews,
    };
    expect(getReviews(reviews)).toEqual(expectedAction);
  });

  it('action creator for getting favorites returns correct action', () => {
    const expectedAction = {
      type: ActionType.GET_FAVORITES,
      payload: offers,
    };

    expect(getFavorites(offers)).toEqual(expectedAction);
  });

  it('action creator for adding a review returns correct action', () => {
    const expectedAction = {
      type: ActionType.ADD_REVIEW,
      payload: review,
    };

    expect(addReview(review)).toEqual(expectedAction);
  });

  it('action creator for changing sorting returns correct action', () => {
    const expectedAction = {
      type: ActionType.CHANGE_SORTING,
      payload: 'Popular',
    };

    expect(changeSorting('Popular')).toEqual(expectedAction);
  });

  it('action creator for requiring authorization returns correct action', () => {
    const expectedAction = {
      type: ActionType.REQUIRE_AUTHORIZATION,
      payload: 'AUTH',
    };

    expect(requireAuthorization('AUTH')).toEqual(expectedAction);
  });

  it('action creator for setting authorization info returns correct action', () => {
    const authInfo = {
      'avatar_url': 'img/1.png',
      'email': 'Oliver.conner@gmail.com',
      'id': 1,
      'is_pro': false,
      'name': 'Oliver.conner',
      'token': 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
    };

    const expectedAction = {
      type: ActionType.SET_AUTHORIZATION_INFO,
      payload: authInfo,
    };

    expect(setAuthorizationInfo(authInfo)).toEqual(expectedAction);
  });

  it('action creator for logging out returns correct action', () => {
    const expectedAction = {
      type: ActionType.LOGOUT,
    };

    expect(logout()).toEqual(expectedAction);
  });

  it('action creator for redirecting to route returns correct action', () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: '/login',
    };

    expect(redirectToRoute('/login')).toEqual(expectedAction);
  });

  it('action creator for updating the offer returns correct action', () => {
    const expectedAction = {
      type: ActionType.UPDATE_OFFER,
      payload: offer,
    };

    expect(updateOffer(offer)).toEqual(expectedAction);
  });

  it('action creator for removing the favorite returns correct action', () => {
    const expectedAction = {
      type: ActionType.REMOVE_FAVORITE,
      payload: 12548,
    };

    expect(removeFavorite(12548)).toEqual(expectedAction);
  });
});
