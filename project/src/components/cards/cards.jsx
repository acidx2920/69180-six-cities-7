import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card/card';
import offerProp from '../offer/offer.prop';

function Cards(props) {
  const {
    offers,
    type,
    activeOffer,
    setActiveOffer,
  } = props;

  return (
    <>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          type={type}
          isActive={offer.id === activeOffer?.id}
          handleMouseEnter={
            () => {
              if(type === 'MAIN') {
                setActiveOffer(offer);
              }
            }
          }
          handleMouseLeave={
            () => {
              if(type === 'MAIN') {
                setActiveOffer(null);
              }
            }
          }
        />
      ))}
    </>
  );
}

Cards.propTypes = {
  type: PropTypes.string,
  offers: PropTypes.arrayOf(offerProp),
  activeOffer: offerProp,
  setActiveOffer: PropTypes.func,
};

export default Cards;
