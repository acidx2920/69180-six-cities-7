import React from 'react';
import PropTypes from 'prop-types';
import {CITIES} from '../../consts';

function Cities(props) {
  const {activeCity} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li className="locations__item" key={city}>
              <a className={`locations__item-link tabs__item${city === activeCity ? ' tabs__item--active' : ''}`} href="/#">
                <span>{city}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

Cities.propTypes = {
  activeCity: PropTypes.string.isRequired,
};

export default Cities;
