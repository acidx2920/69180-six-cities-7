import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, setAuthorizationInfo, logout} from '../action';
import {AuthorizationStatus} from '../../consts';

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationInfo: {},
};

const user = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setAuthorizationInfo, (state, action) => {
      state.authorizationInfo = action.payload;
    })
    .addCase(logout, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.NO_AUTH;
    });
});

export {user};
