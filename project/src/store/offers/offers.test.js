import {offers} from './offers';
import {changeCity, changeSorting} from '../action';

describe('Reducer: offers', () => {
  it('without additional parameters should return initial state', () => {
    expect(offers(undefined, {}))
      .toEqual({
        activeCity: 'Paris',
        activeSorting: 'Popular',
      });
  });

  it('should change active city', () => {
    const state = {
      activeCity: 'Paris',
      activeSorting: 'Popular',
    };

    expect(offers(state, changeCity('Amsterdam')))
      .toEqual({
        activeCity: 'Amsterdam',
        activeSorting: 'Popular',
      });
  });

  it('should change active sorting', () => {
    const state = {
      activeCity: 'Paris',
      activeSorting: 'Popular',
    };

    expect(offers(state, changeSorting('Price: low to high')))
      .toEqual({
        activeCity: 'Paris',
        activeSorting: 'Price: low to high',
      });
  });
});
