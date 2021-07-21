import React from 'react';
import {render, screen} from '@testing-library/react';
import Review from './review';

const review = {
  id: 1,
  user: {
    id: 16,
    isPro: true,
    name: 'Mollie',
    avatarUrl: 'https://7.react.pages.academy/static/avatar/7.jpg',
  },
  rating: 3,
  comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
  date: '2021-06-30T16:51:35.215Z',
};

describe('Component: Review', () => {
  it('should render correctly', () => {
    render(
      <Review review={review} />,
    );

    expect(screen.getByTestId('review')).toBeInTheDocument();
  });
});
