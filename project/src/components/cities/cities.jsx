import React from 'react';
import {changeCity} from '../../store/action';
import {useSelector, useDispatch} from 'react-redux';
import {CITIES} from '../../consts';
import {getActiveCity} from '../../store/offers/selectors';

function Cities() {
  const activeCity = useSelector(getActiveCity);

  const dispatch = useDispatch();
  const onCityClick = (city) => {
    dispatch(changeCity(city));
  };

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

export default Cities;
