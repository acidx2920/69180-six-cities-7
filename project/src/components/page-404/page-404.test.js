import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import Page404 from './page-404';

const mockStore = configureStore({});

describe('Component: Page404', () => {
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
          <Page404 />
        </Router>
      </Provider>,
    );
    const headerElement = screen.getByText('404 Not Found');
    const linkElement = screen.getByText('Вернуться на главную');

    expect(headerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});
