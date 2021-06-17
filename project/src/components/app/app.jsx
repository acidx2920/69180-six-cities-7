import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoutes} from '../../consts';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import Page404 from '../page-404/page-404';
import offerProp from '../offer/offer.prop';

function App(props) {
  const {offersNum, offers} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.ROOT}>
          <Main offersNum={offersNum} offers={offers} />
        </Route>
        <Route exact path={AppRoutes.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoutes.FAVORITES}>
          <Favorites offers={offers} />
        </Route>
        <Route exact path={AppRoutes.ROOM}>
          <Offer />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  offersNum: PropTypes.number,
  offers: PropTypes.arrayOf(offerProp),
};

export default App;
