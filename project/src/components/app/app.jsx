import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import {fetchOffers} from '../../store/api-actions';
import {AppRoute} from '../../consts';

import Main from '../main/main';
import Login from '../login/login';
import Favorites from '../favorites/favorites';
import Offer from '../offer/offer';
import Loader from '../loader/loader';
import Page404 from '../page-404/page-404';
import PrivateRoute from '../private-route/private-route';
import browserHistory from '../../browser-history';

function App(props) {
  const {isDataLoaded, onAppLoad} = props;

  useEffect(() => {
    if (!isDataLoaded) {
      onAppLoad();
    }
  }, [isDataLoaded, onAppLoad]);

  if (!isDataLoaded) {
    return (
      <Loader />
    );
  }

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
        <Route exact path={AppRoute.ROOM} component={Offer} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  isDataLoaded: PropTypes.bool.isRequired,
  onAppLoad: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onAppLoad() {
    dispatch(fetchOffers());
  },
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);
