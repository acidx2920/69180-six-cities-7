import {data} from './data';
import {setLoadedStatus, getOffers, getOffer, getNearbyOffers, getReviews, getFavorites, updateOffer, removeFavorite} from '../action';

const updateById = (array, updatedItem) => {
  const index = array.findIndex((item) => item.id === updatedItem.id);
  const result = array.slice();
  result[index] = updatedItem;
  return result;
};
const removeById = (array, id) => array.filter((item) => item.id !== id);

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

describe('Reducer: data', () => {
  it('without additional parameters should return initial state', () => {
    expect(data(undefined, {}))
      .toEqual({
        offers: [],
        offer: {},
        nearbyOffers: [],
        favorites: [],
        reviews: [],
        isDataLoaded: false,
      });
  });

  it('should load offers and change data loaded status', () => {
    const state = {
      offers: [],
      offer: {},
      nearbyOffers: [],
      favorites: [],
      reviews: [],
      isDataLoaded: false,
    };

    expect(data(state, getOffers(offers)))
      .toEqual({
        offers,
        offer: {},
        nearbyOffers: [],
        favorites: [],
        reviews: [],
        isDataLoaded: true,
      });
  });

  it('should load favorites and change data loaded status', () => {
    const state = {
      offers: [],
      offer: {},
      nearbyOffers: [],
      favorites: [],
      reviews: [],
      isDataLoaded: false,
    };

    expect(data(state, getFavorites(offers)))
      .toEqual({
        offers: [],
        offer: {},
        nearbyOffers: [],
        favorites: offers,
        reviews: [],
        isDataLoaded: true,
      });
  });

  it('should load reviews', () => {
    const state = {
      offers: [],
      offer: {},
      nearbyOffers: [],
      favorites: [],
      reviews: [],
      isDataLoaded: false,
    };

    expect(data(state, getReviews(reviews)))
      .toEqual({
        offers: [],
        offer: {},
        nearbyOffers: [],
        favorites: [],
        reviews,
        isDataLoaded: false,
      });
  });

  it('should load offer and change data loaded status', () => {
    const state = {
      offers: [],
      offer: {},
      nearbyOffers: [],
      favorites: [],
      reviews: [],
      isDataLoaded: false,
    };

    expect(data(state, getOffer(offer)))
      .toEqual({
        offers: [],
        offer,
        nearbyOffers: [],
        favorites: [],
        reviews: [],
        isDataLoaded: true,
      });
  });

  it('should change data loaded status', () => {
    const state = {
      offers: [],
      offer: {},
      nearbyOffers: [],
      favorites: [],
      reviews: [],
      isDataLoaded: false,
    };

    expect(data(state, setLoadedStatus(true)))
      .toEqual({
        offers: [],
        offer: {},
        nearbyOffers: [],
        favorites: [],
        reviews: [],
        isDataLoaded: true,
      });
  });

  it('should load nearby offers', () => {
    const state = {
      offers: [],
      offer: {},
      nearbyOffers: [],
      favorites: [],
      reviews: [],
      isDataLoaded: false,
    };

    expect(data(state, getNearbyOffers(offers)))
      .toEqual({
        offers: [],
        offer: {},
        nearbyOffers: offers,
        favorites: [],
        reviews: [],
        isDataLoaded: false,
      });
  });

  it('should update offer', () => {
    const updatedOffer = {
      id: 121,
      title: 'Beautiful & luxurious studio at great location',
      description: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.',
      previewImage: 'img/apartment-01.jpg',
      images: ['img/apartment-01.jpg'],
      price: 120,
      rating: 4.0,
      type: 'apartment',
      isFavorite: true,
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
    };

    const updatedOffers = updateById(offers, updatedOffer);
    const updatedNearbyOffers = updateById(offers, updatedOffer);

    const state = {
      offers,
      offer: {},
      nearbyOffers: offers,
      favorites: [],
      reviews: [],
      isDataLoaded: false,
    };

    expect(data(state, updateOffer(updatedOffer)))
      .toEqual({
        offers: updatedOffers,
        offer: {},
        nearbyOffers: updatedNearbyOffers,
        favorites: [],
        reviews: [],
        isDataLoaded: false,
      });
  });

  it('should remove favorite', () => {
    const state = {
      offers: [],
      offer: {},
      nearbyOffers: [],
      favorites: offers,
      reviews: [],
      isDataLoaded: false,
    };

    const updatedFavorites = removeById(offers, 121);

    expect(data(state, removeFavorite(121)))
      .toEqual({
        offers: [],
        offer: {},
        nearbyOffers: [],
        favorites: updatedFavorites,
        reviews: [],
        isDataLoaded: false,
      });
  });
});
