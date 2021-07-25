import {user} from './user';
import {requireAuthorization, setAuthorizationInfo, logout} from '../action';
import {AuthorizationStatus} from '../../consts';

describe('Reducer: user', () => {
  it('without additional parameters should return initial state', () => {
    expect(user(undefined, {}))
      .toEqual({
        authorizationStatus: AuthorizationStatus.UNKNOWN,
        authorizationInfo: {},
      });
  });

  it('should update authorizationStatus to "AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authorizationInfo: {},
    };

    expect(user(state, requireAuthorization(AuthorizationStatus.AUTH)))
      .toEqual({
        authorizationStatus: AuthorizationStatus.AUTH,
        authorizationInfo: {},
      });
  });

  it('should set authorization info', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authorizationInfo: {},
    };

    const authInfo = {
      'avatar_url': 'img/1.png',
      'email': 'Oliver.conner@gmail.com',
      'id': 1,
      'is_pro': false,
      'name': 'Oliver.conner',
      'token': 'T2xpdmVyLmNvbm5lckBnbWFpbC5jb20=',
    };

    expect(user(state, setAuthorizationInfo(authInfo)))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authorizationInfo: authInfo,
      });
  });

  it('should update authorizationStatus to "NO_AUTH"', () => {
    const state = {
      authorizationStatus: AuthorizationStatus.AUTH,
      authorizationInfo: {},
    };

    expect(user(state, logout()))
      .toEqual({
        authorizationStatus: AuthorizationStatus.NO_AUTH,
        authorizationInfo: {},
      });
  });
});
