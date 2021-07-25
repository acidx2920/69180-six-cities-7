import React, {useEffect, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import {initializeApp} from '../../store/api-actions';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {getAuthorizationStatus} from '../../store/user/selectors';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import Page404 from '../page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import Loader from '../loader/loader';

function App() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const dispatch = useDispatch();

  const onAppLoad = useCallback(() => {
    dispatch(initializeApp());
  }, [dispatch]);

  useEffect(() => {
    onAppLoad();
  }, [onAppLoad]);

  if(authorizationStatus === AuthorizationStatus.UNKNOWN) {
    return <Loader />;
  }

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
