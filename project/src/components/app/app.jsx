import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {initializeApp} from '../../store/api-actions';
import {AppRoute} from '../../consts';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import Page404 from '../page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

function App(props) {
  const {onAppLoad} = props;

  useEffect(() => {
    onAppLoad();
  }, [onAppLoad]);

  return (
    <BrowserRouter history={browserHistory}>
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
    </BrowserRouter>
  );
}

App.propTypes = {
  onAppLoad: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onAppLoad() {
    dispatch(initializeApp());
  },
});

export {App};

export default connect(null, mapDispatchToProps)(App);
