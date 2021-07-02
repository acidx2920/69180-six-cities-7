import React from 'react';
import PropTypes from 'prop-types';
import {ActionCreator} from '../../store/action';
import {connect} from 'react-redux';
import {CITIES} from '../../consts';

function Cities(props) {
  const {activeCity, onCityClick} = props;

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {CITIES.map((city) => (
            <li className="locations__item" key={city}>
              <a
                className={`locations__item-link tabs__item${city === activeCity ? ' tabs__item--active' : ''}`}
                href="/#"
                onClick={(evt) => {
                  evt.preventDefault();
                  onCityClick(city);
                }}
              >
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
  onCityClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  activeCity: state.activeCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick(selectedCity) {
    dispatch(ActionCreator.changeCity(selectedCity));
  },
});

export {Cities};

export default connect(mapStateToProps, mapDispatchToProps)(Cities);
