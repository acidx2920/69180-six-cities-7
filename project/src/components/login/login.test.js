import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {createAPI} from '../../services/api';
import {Provider} from 'react-redux';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './login';

const api = createAPI(() => {});
const mockStore = configureStore([thunk.withExtraArgument(api)]);

describe('Component: Login', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Provider
        store={mockStore({
          USER: {
            authorizationStatus: 'NO_AUTH',
          },
        })}
      >
        <Router history={history}>
          <Login />
        </Router>
      </Provider>,
    );

    expect(screen.getByTestId('login-form')).toBeInTheDocument();
    expect(screen.getByTestId('login')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();

    userEvent.type(screen.getByTestId('login'), 'test@test.ru');
    userEvent.type(screen.getByTestId('password'), '123456');

    expect(screen.getByDisplayValue('test@test.ru')).toBeInTheDocument();
    expect(screen.getByDisplayValue('123456')).toBeInTheDocument();
  });
});
