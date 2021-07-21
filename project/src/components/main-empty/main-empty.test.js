import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import MainEmpty from './main-empty';

const mockStore = configureStore({});

describe('Component: MainEmpty', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Provider
        store={mockStore({
          USER: {
            authorizationStatus: 'AUTH',
            authorizationInfo: {},
          },
          OFFERS: {
            activeCity: 'Paris',
          },
        })}
      >
        <Router history={history}>
          <MainEmpty />
        </Router>
      </Provider>,
    );

    expect(screen.getByText('No places to stay available')).toBeInTheDocument();
    expect(screen.getByText('We could not find any property available at the moment in Paris')).toBeInTheDocument();
  });
});
