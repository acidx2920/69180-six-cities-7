import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSorting} from '../action';
import {DEFAULT_CITY, DEFAULT_SORTING} from '../../consts';

const initialState = {
  activeCity: DEFAULT_CITY,
  activeSorting: DEFAULT_SORTING,
};

const offers = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.activeCity = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.activeSorting = action.payload;
    });
});

export {offers};
