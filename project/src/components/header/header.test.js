import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import Header from './header';

const mockStore = configureStore({});

describe('Component: Header', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Provider
        store={mockStore({
          USER: {
            authorizationStatus: 'AUTH',
            authorizationInfo: {},
          },
        })}
      >
        <Router history={history}>
          <Header />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
});
