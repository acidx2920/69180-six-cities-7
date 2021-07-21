import React from 'react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import Sorting from './sorting';

const mockStore = configureStore({});

describe('Component: Sorting', () => {
  it('should render correctly', () => {
    render(
      <Provider
        store={mockStore({
          OFFERS: {
            activeSorting: 'Popular',
          },
        })}
      >
        <Sorting />
      </Provider>,
    );

    expect(screen.getByText('Sort by')).toBeInTheDocument();
  });
});
