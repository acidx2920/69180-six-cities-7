import React, {useEffect, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {initializeApp} from '../../store/api-actions';
import {AppRoute} from '../../consts';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import Page404 from '../page-404/page-404';
import PrivateRoute from '../private-route/private-route';

function App() {

  const dispatch = useDispatch();

  const onAppLoad = useCallback(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  useEffect(() => {
    onAppLoad();
  }, [onAppLoad]);

  return (
    <Switch>
      <Route exact path={AppRoute.ROOT} component={Main} />
      <Route exact path={AppRoute.LOGIN} component={Login} />
      <PrivateRoute
        exact
        path={AppRoute.FAVORITES}
        render={() => <Favorites />}
      />
      <Route exact path={AppRoute.OFFER} component={Offer} />
      <Route component={Page404} />
    </Switch>
  );
}

export default App;
