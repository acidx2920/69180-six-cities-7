import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card/card';
import offerProp from '../offer/offer.prop';

function Cards(props) {
  const {offers, activeOffer, setActiveOffer} = props;

  return (
    <>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          isActive={offer.id === activeOffer?.id}
          handleMouseEnter={() => setActiveOffer(offer)}
          handleMouseLeave={() => setActiveOffer(null)}
        />
      ))}
    </>
  );
}

Cards.propTypes = {
  offers: PropTypes.arrayOf(offerProp),
  activeOffer: offerProp,
  setActiveOffer: PropTypes.func,
};

export default Cards;
