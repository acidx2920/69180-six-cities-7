import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Card from './card';

const offer = {
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
};

const mockStore = configureStore({});

describe('Component: Card', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Provider
        store={mockStore({
          USER: {
            authorizationStatus: 'AUTH',
          },
        })}
      >
        <Router history={history}>
          <Card
            offer={offer}
            type="MAIN"
            isActive={false}
            onCardMouseEnter={() => {}}
            onCardMouseLeave={() => {}}
          />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('card')).toBeInTheDocument();
  });
});
