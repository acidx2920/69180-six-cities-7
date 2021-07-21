import React from 'react';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Cities from './cities';

const mockStore = configureStore({});

describe('Component: Cities', () => {
  it('should render correctly', () => {
    render(
      <Provider
        store={mockStore({
          OFFERS: {
            activeCity: 'Paris',
          },
        })}
      >
        <Cities />
      </Provider>,
    );

    expect(screen.getByTestId('cities')).toBeInTheDocument();
  });
});
