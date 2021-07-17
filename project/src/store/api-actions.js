import {getOffers, getOffer, getNearbyOffers, getReviews, setLoadedStatus, requireAuthorization, setAuthorizationInfo, redirectToRoute, logout as closeSession, getFavorites, updateOffer} from './action';
import {AuthorizationStatus, AppRoute, APIRoute} from '../consts';
import {adaptOffer, adaptReview} from './adapter';

export const fetchOffers = () => (dispatch, _getState, api) => {
  dispatch(setLoadedStatus(false));
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(getOffers(data.map((offer) => adaptOffer(offer)))));
};

export const fetchOffer = (id) => (dispatch, _getState, api) => {
  dispatch(setLoadedStatus(false));
  api.get(`${APIRoute.OFFERS}/${id}`)
    .then(
      ({data}) => dispatch(getOffer(adaptOffer(data))),
      () => dispatch(redirectToRoute(AppRoute.NOT_FOUND)))
    .then(() => {
      api.get(`${APIRoute.OFFERS}/${id}/nearby`)
        .then(({data}) => dispatch(getNearbyOffers(data.map((offer) => adaptOffer(offer)))))
        .then(() => {
          api.get(`${APIRoute.REVIEWS}/${id}`)
            .then(({data}) => dispatch(getReviews(data.map((review) => adaptReview(review)))));
        });
    });
};

export const fetchFavorites = () => (dispatch, _getState, api) => {
  dispatch(setLoadedStatus(false));
  api.get(APIRoute.FAVORITES)
    .then(({data}) => dispatch(getFavorites(data.map((offer) => adaptOffer(offer)))));
};

export const toggleFavorite = (id, status) => (dispatch, _getState, api) => {
  api.post(`${APIRoute.FAVORITES}/${id}/${status}`)
    .then(({data}) => dispatch(updateOffer(adaptOffer(data))));
};

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(setAuthorizationInfo(data));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(({data}) => {
      localStorage.setItem('token', data.token);
      dispatch(setAuthorizationInfo(data));
    })
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.ROOT)))
    .catch(() => {})
);

export const logout = () => (dispatch, _getState, api) => (
  api.delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(closeSession()))
    .catch(() => {})
);

export const postComment = ({ id, comment, rating }) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.REVIEWS}/${id}`, {comment, rating})
    .then(({data}) => dispatch(getReviews(data.map((review) => adaptReview(review)))))
);

export const initializeApp = () => (dispatch, _getState, api) => {
  dispatch(checkAuth());
};
