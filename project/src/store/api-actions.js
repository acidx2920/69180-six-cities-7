import {ActionCreator} from './action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../consts';
import {adaptOffer, adaptReview} from './adapter';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.getOffers(data.map((offer) => adaptOffer(offer)))))
);

export const fetchOffer = (id) => (dispatch, _getState, api) => {
  dispatch(ActionCreator.setLoadedStatus(false));
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(
      ({data}) => dispatch(ActionCreator.getOffer(adaptOffer(data))),
      () => dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)))
    .then(() => {
      api.get(`${APIRoute.OFFERS}/${id}/nearby`)
        .then(({data}) => dispatch(ActionCreator.getNearbyOffers(data.map((offer) => adaptOffer(offer)))))
        .then(() => {
          api.get(`${APIRoute.REVIEWS}/${id}`)
            .then(({data}) => dispatch(ActionCreator.getReviews(data.map((review) => adaptReview(review)))));
        });
    });
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.setAuthorizationInfo(data));
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(ActionCreator.setAuthorizationInfo(data));
    })
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()))
    .catch(() => {})
);

export const postComment = ({ id, comment, rating }) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, {comment, rating}, {
    headers: {
      'x-token': localStorage.getItem('token'),
    },
  })
    .then(({data}) => dispatch(ActionCreator.getReviews(data.map((review) => adaptReview(review)))))
);

export const initializeApp = () => (dispatch, _getState, api) => {
  dispatch(checkAuth());
};
