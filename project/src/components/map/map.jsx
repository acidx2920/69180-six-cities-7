import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/useMap';

const icon = leaflet.icon({
  iconUrl: 'img/pin.svg',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

function Map(props) {
  const {points, city} = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useEffect(() => {
    // map.setView(city, zoom);
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }, {icon})
          .addTo(map);
      });
    }
  });
  return <div id="map" style={{height: '100%'}} ref={mapRef} />;
}

Map.propTypes = {
  points: PropTypes.arrayOf(PropTypes.shape({
    latitude: PropTypes.number.isRequired,
    longitude: PropTypes.number.isRequired,
  })),
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    name:  PropTypes.string.isRequired,
  }),
};

export default Map;
