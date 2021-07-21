import React from 'react';
import {render, screen} from '@testing-library/react';
import Reviews from './reviews';

const reviews = [
  {
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
  },
  {
    id: 2,
    user: {
      id: 12,
      isPro: true,
      name: 'Isaac',
      avatarUrl: 'https://7.react.pages.academy/static/avatar/3.jpg',
    },
    rating: 4,
    comment: 'Bathed in the nature. Completely unplugged. Unforgettable.',
    date: '2021-06-30T16:51:35.215Z',
  },
];

describe('Component: Reviews', () => {
  it('should render correctly', () => {
    render(
      <Reviews reviews={reviews} />,
    );

    expect(screen.getByTestId('reviews')).toBeInTheDocument();
  });
});
