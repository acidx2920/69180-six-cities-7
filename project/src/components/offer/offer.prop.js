import PropTypes from 'prop-types';
import {OfferTypes} from '../../consts';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  previewImage: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.string),
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  type: PropTypes.oneOf(Object.keys(OfferTypes)).isRequired,
  isFavorite: PropTypes.bool,
  isPremium: PropTypes.bool,
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    name:  PropTypes.string.isRequired,
  }),
  location: PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
    zoom: PropTypes.number.isRequired,
  }),
  maxAdults: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatarUrl: PropTypes.string,
    isPremium: PropTypes.bool,
  }).isRequired,
}).isRequired;
