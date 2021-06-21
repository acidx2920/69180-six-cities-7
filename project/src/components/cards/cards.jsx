import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Card from '../card/card';
import offerProp from '../offer/offer.prop';

function Cards(props) {
  // eslint-disable-next-line no-unused-vars
  const [activeCard, setActiveCard] = useState({});
  const {offers} = props;

  return (
    <>
      {offers.map((offer) => (
        <Card key={offer.id} offer={offer} onHover={(item) => setActiveCard(item)} />
      ))}
    </>
  );
}

Cards.propTypes = {
  offers: PropTypes.arrayOf(offerProp),
};

export default Cards;
