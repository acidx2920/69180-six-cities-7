import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFavorites} from '../../store/api-actions';

import Header from '../header/header';
import Footer from '../footer/footer';
import Loader from '../loader/loader';
import Cards from '../cards/cards';
import FavoritesEmpty from '../favorites-empty/favorites-empty';
import {getFavorites, getFavoritesByCity, getIsDataLoaded} from '../../store/data/selectors';

function Favorites() {
  const favorites = useSelector(getFavorites);
  const favoritesByCity = useSelector(getFavoritesByCity);
  const isDataLoaded = useSelector(getIsDataLoaded);

  const dispatch = useDispatch();
  const onPageLoad = useCallback(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  useEffect(() => {
    onPageLoad();
  }, [onPageLoad]);

  if (!isDataLoaded) {
    return (
      <Loader />
    );
  }

  if(!favorites.length) {
    return <FavoritesEmpty />;
  }

  const favoritesCities = Array.from(new Set(favorites.map((offer) => offer.city.name)));

  return (
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {favoritesCities.map((city) => (
                <li className="favorites__locations-items" key={city}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="/#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <div className="favorites__places" data-testid="favorites">
                    <Cards type="FAVORITES" offers={favoritesByCity(city)} />
                  </div>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favorites;
