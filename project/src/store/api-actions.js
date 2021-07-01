import {ActionCreator} from './action';
import {APIRoute} from '../consts';
import {adaptOffers} from './adapter';

export const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(APIRoute.OFFERS)
    .then(({data}) => dispatch(ActionCreator.getOffers(data.map((offer) => adaptOffers(offer)))))
);
