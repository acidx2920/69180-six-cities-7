import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoutes} from '../../const';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Property from '../property/property';
import Page404 from '../page-404/page-404';

function App({offersNum}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoutes.ROOT}>
          <Main offersNum={offersNum} />
        </Route>
        <Route exact path={AppRoutes.LOGIN}>
          <Login />
        </Route>
        <Route exact path={AppRoutes.FAVORITES}>
          <Favorites />
        </Route>
        <Route exact path={AppRoutes.ROOM}>
          <Property />
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
};

export default App;
