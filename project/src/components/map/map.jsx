import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import useMap from '../../hooks/use-map';
import {DEFAULT_MARKER_URL, ACTIVE_MARKER_URL} from '../../consts';
import offerProp from '../offer/offer.prop';

const iconDefault = leaflet.icon({
  iconUrl: DEFAULT_MARKER_URL,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});
const iconActive = leaflet.icon({
  iconUrl: ACTIVE_MARKER_URL,
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

function Map(props) {
  const {offers, activeOffer} = props;
  const city = activeOffer?.city?.location || offers[0]?.city?.location;
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);
  useEffect(() => {
    let markers = [];
    if (map && city) {
      const {latitude, longitude, zoom} = city;
      map.setView({lat: latitude, lng: longitude}, zoom);
      markers = offers.map((offer) => {
        const icon = offer.id === activeOffer?.id ? iconActive : iconDefault;
        return leaflet
          .marker({
            lat: offer.location.latitude,
            lng: offer.location.longitude,
          }, {icon})
          .addTo(map);
      });
    }
    return () => {
      for (const marker of markers) {
        marker.remove();
      }
    };
  }, [offers, activeOffer, city, map]);

  return <div id="map" style={{height: '100%'}} ref={mapRef} data-testid="map" />;
}

Map.propTypes = {
  offers: PropTypes.arrayOf(offerProp),
  activeOffer: offerProp,
};

export default Map;
