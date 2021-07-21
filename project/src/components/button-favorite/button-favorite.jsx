import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {removeFavorite, redirectToRoute} from '../../store/action';
import {toggleFavorite} from '../../store/api-actions';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AppRoute, AuthorizationStatus} from '../../consts';

function ButtonFavorite(props) {
  const {
    id,
    isFavorite,
    cardType,
  } = props;

  const autorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const handleClick = (evt) => {
    evt.preventDefault();
    if(autorizationStatus === AuthorizationStatus.NO_AUTH) {
      dispatch(redirectToRoute(AppRoute.LOGIN));
    } else {
      dispatch(toggleFavorite(id, isFavorite ? 0 : 1));
      if(cardType === 'FAVORITES') {
        dispatch(removeFavorite(id));
      }
    }
  };

  return (
    <button
      className={`place-card__bookmark-button${isFavorite ? ' place-card__bookmark-button--active' : ''} button`}
      type="button"
      onClick={handleClick}
      data-testid="button-favorite"
    >
      <svg className="place-card__bookmark-icon" width="18" height="19">
        <use xlinkHref="#icon-bookmark" />
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

ButtonFavorite.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  cardType: PropTypes.string.isRequired,
};

export default ButtonFavorite;
