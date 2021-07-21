import React from 'react';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import ButtonFavorite from './button-favorite';

const mockStore = configureStore({});

describe('Component: ButtonFavorite', () => {
  it('should render correctly', () => {
    render(
      <Provider
        store={mockStore({
          USER: {
            authorizationStatus: 'AUTH',
          },
        })}
      >
        <ButtonFavorite cardType="FAVORITES" isFavorite id={1} />
      </Provider>,
    );

    expect(screen.getByTestId('button-favorite')).toBeInTheDocument();
  });
});
