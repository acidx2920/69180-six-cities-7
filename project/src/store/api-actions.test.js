import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../services/api';
import {ActionType} from './action';
import {checkAuth, login, fetchOffers, fetchOffer, fetchFavorites, toggleFavorite, logout, postComment} from './api-actions';
import {APIRoute, AppRoute, AuthorizationStatus} from '../consts';

let api = null;

const offer = {
  id: 100,
  host: {
    'avatar_url': 'image/avatar.jpg',
    'is_pro': true,
  },
  'is_favorite': false,
  'is_premium': true,
  'max_adults': 4,
  'preview_image': 'image/preview.png',
};

const adaptedOffer = {
  id: 100,
  host: {
    avatarUrl: 'image/avatar.jpg',
    isPro: true,
  },
  isFavorite: false,
  isPremium: true,
  maxAdults: 4,
  previewImage: 'image/preview.png',
};

const review = {
  id: 1,
  comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
  date: '2021-06-30T16:51:35.215Z',
  rating: 4,
  user: {
    'avatar_url': 'img/1.png',
    id: 4,
    'is_pro': false,
    name: 'Mollie',
  },
};

const adaptedReview = {
  id: 1,
  comment: 'We loved it so much, the house, the veiw, the location just great.. Highly reccomend :)',
  date: '2021-06-30T16:51:35.215Z',
  rating: 4,
  user: {
    avatarUrl: 'img/1.png',
    id: 4,
    isPro: false,
    name: 'Mollie',
  },
};

describe('Async operations', () => {
  beforeAll(() => {
    api = createAPI(() => {});
  });

  it('should make a correct API call to GET /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuthLoader = checkAuth();

    apiMock
      .onGet(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return checkAuthLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTHORIZATION_INFO,
          payload: [{fake: true}],
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });
      });
  });

  it('should make a correct API call to POST /login', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fakeUser = {login: 'test@test.ru', password: '123456'};
    const loginLoader = login(fakeUser);

    apiMock
      .onPost(APIRoute.LOGIN)
      .reply(200, [{fake: true}]);

    return loginLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTHORIZATION_INFO,
          payload: [{fake: true}],
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRE_AUTHORIZATION,
          payload: AuthorizationStatus.AUTH,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.REDIRECT_TO_ROUTE,
          payload: AppRoute.ROOT,
        });
      });
  });

  it('should make a correct API call to DELETE /logout', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const logoutLoader = logout();

    apiMock
      .onDelete(APIRoute.LOGOUT)
      .reply(200, [{fake: true}]);

    return logoutLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOGOUT,
        });
      });
  });

  it('should make a correct API call to GET /hotels', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = fetchOffers();

    apiMock
      .onGet(APIRoute.OFFERS)
      .reply(200, [offer]);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_LOADED_STATUS,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_OFFERS,
          payload: [adaptedOffer],
        });
      });
  });

  it('should make a correct API call to GET /hotels/121', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 121;
    const offerLoader = fetchOffer(id);

    apiMock
      .onGet(`${APIRoute.OFFERS}/${id}`)
      .reply(200, offer);

    apiMock
      .onGet(`${APIRoute.OFFERS}/${id}/nearby`)
      .reply(200, [offer]);

    apiMock
      .onGet(`${APIRoute.REVIEWS}/${id}`)
      .reply(200, [review]);

    return offerLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(4);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_LOADED_STATUS,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_OFFER,
          payload: adaptedOffer,
        });

        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.GET_NEARBY_OFFERS,
          payload: [adaptedOffer],
        });

        expect(dispatch).toHaveBeenNthCalledWith(4, {
          type: ActionType.GET_REVIEWS,
          payload: [adaptedReview],
        });
      });
  });

  it('should make a correct API call to GET /favorite', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const favoritesLoader = fetchFavorites();

    apiMock
      .onGet(APIRoute.FAVORITES)
      .reply(200, [offer]);

    return favoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_LOADED_STATUS,
          payload: false,
        });

        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.GET_FAVORITES,
          payload: [adaptedOffer],
        });
      });
  });

  it('should make a correct API call to POST /favorite/120/1', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 120;
    const status = 1;
    const favoriteLoader = toggleFavorite(id, status);

    apiMock
      .onPost(`${APIRoute.FAVORITES}/${id}/${status}`)
      .reply(200, offer);

    return favoriteLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFER,
          payload: adaptedOffer,
        });
      });
  });

  it('should make a correct API call to POST /comments/120', () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const id = 120;
    const fakeReview = {id, comment: 'comment text', rating: 4};
    const commentLoader = postComment(fakeReview);

    apiMock
      .onPost(`${APIRoute.REVIEWS}/${id}`)
      .reply(200, [review]);

    return commentLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_REVIEWS,
          payload: [adaptedReview],
        });
      });
  });
});
