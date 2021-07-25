import React from 'react';
import PropTypes from 'prop-types';

import Card from '../card/card';
import offerProp from '../offer/offer.prop';

function Cards(props) {
  const {
    offers,
    type,
    activeOffer,
    onActiveCardChange,
  } = props;

  return (
    <>
      {offers.map((offer) => (
        <Card
          key={offer.id}
          offer={offer}
          type={type}
          isActive={offer.id === activeOffer?.id}
          onCardMouseEnter={
            () => {
              if(type === 'MAIN') {
                onActiveCardChange(offer);
              }
            }
          }
          onCardMouseLeave={
            () => {
              if(type === 'MAIN') {
                onActiveCardChange(null);
              }
            }
          }
          dataTestid="card-item"
        />
      ))}
    </>
  );
}

Cards.propTypes = {
  type: PropTypes.string,
  offers: PropTypes.arrayOf(offerProp),
  activeOffer: offerProp,
  onActiveCardChange: PropTypes.func,
};

export default Cards;
