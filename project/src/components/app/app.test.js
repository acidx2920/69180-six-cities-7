import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';
import {AuthorizationStatus, AppRoute} from '../../consts';
import App from './app';

let history = null;
let store = null;
let fakeApp = null;

window.scrollTo = jest.fn();

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


describe('Application Routing', () => {
  beforeAll(() => {
    history = createMemoryHistory();
    const api = createAPI(() => {});
    const createFakeStore = configureStore([thunk.withExtraArgument(api)]);
    store = createFakeStore({
      USER: {
        authorizationStatus: AuthorizationStatus.AUTH,
        authorizationInfo: {},
      },
      DATA: {
        offers,
        offer,
        nearbyOffers: offers,
        favorites: [],
        reviews,
        isDataLoaded: true,
      },
      OFFERS: {
        activeCity: 'Amsterdam',
        activeSorting: 'Popular',
      },
    });

    fakeApp = (
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
  });

  it('should render "Main" when user navigates to "/"', () => {
    history.push(AppRoute.ROOT);
    render(fakeApp);

    expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();
    expect(screen.getByText(/Beautiful & luxurious studio at great location/i)).toBeInTheDocument();
  });

  it('should render "Login" when user navigates to "/login"', () => {
    history.push(AppRoute.LOGIN);
    render(fakeApp);

    expect(screen.getByTestId('login')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
  });

  it('should render "Offer" when user navigates to "/offer/121"', () => {
    history.push('/offer/121');
    render(fakeApp);

    expect(screen.getByText(/A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam./i)).toBeInTheDocument();
    expect(screen.getByText(/Coffee machine/i)).toBeInTheDocument();
    expect(screen.getByText(/Angelina/i)).toBeInTheDocument();
  });

  it('should render "Favorites" when user navigates to "/favorites"', () => {
    history.push(AppRoute.FAVORITES);
    render(fakeApp);

    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
    expect(screen.getByText(/Save properties to narrow down search or plan your future trips./i)).toBeInTheDocument();
  });

  it('should render "Page404" when user navigates to non-existent route', () => {
    history.push('/non-existent-route');
    render(fakeApp);

    expect(screen.getByText('404 Not Found')).toBeInTheDocument();
    expect(screen.getByText('Вернуться на главную')).toBeInTheDocument();
  });
});
