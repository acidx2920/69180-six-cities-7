import React from 'react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import Logo from './logo';

describe('Component: Logo', () => {
  it('should render correctly', () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Logo />
      </Router>,
    );
    const logoImage = screen.getByTestId('logo-image');

    expect(logoImage).toBeInTheDocument();
  });
});
