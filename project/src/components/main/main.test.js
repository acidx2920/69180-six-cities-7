import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import Main from './main';

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

const api = createAPI(() => {});
const mockStore = configureStore([thunk.withExtraArgument(api)]);

describe('Component: Main', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Provider
        store={mockStore({
          DATA: {
            offers: offers,
            isDataLoaded: true,
          },
          USER: {
            authorizationStatus: 'AUTH',
            authorizationInfo: {},
          },
          OFFERS: {
            activeCity: 'Amsterdam',
            activeSorting: 'Popular',
          },
        })}
      >
        <Router history={history}>
          <Main />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('2 places to stay in Amsterdam')).toBeInTheDocument();
    expect(screen.getByTestId('main')).toBeInTheDocument();
  });
});
