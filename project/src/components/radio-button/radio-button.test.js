import React from 'react';
import {render, screen} from '@testing-library/react';
import RadioButton from './radio-button';

describe('Component: RadioButton', () => {
  it('should render correctly', () => {
    render(
      <RadioButton value={5} checked onButtonChange={() => {}} />,
    );

    expect(screen.getByTestId('radio-button')).toBeInTheDocument();
  });
});
