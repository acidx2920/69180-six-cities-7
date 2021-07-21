import React from 'react';
import {render, screen} from '@testing-library/react';
import configureStore from 'redux-mock-store';
import {Provider} from 'react-redux';
import CommentForm from './comment-form';

const mockStore = configureStore({});

describe('Component: CommentForm', () => {
  it('should render correctly', () => {
    render(
      <Provider store={mockStore({})}>
        <CommentForm />
      </Provider>,
    );

    expect(screen.getByTestId('comment-form')).toBeInTheDocument();
  });
});
