import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {AppRoute, AuthorizationStatus} from '../../consts';
import {useHistory} from 'react-router-dom';
import {logout} from '../../store/api-actions';

import {Link} from 'react-router-dom';
import Logo from '../logo/logo';

function Header(props) {
  const {authorizationStatus, authorizationInfo, onLogout} = props;
  const history = useHistory();

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorizationStatus === AuthorizationStatus.AUTH ?
                <>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES}>
                      <div className="header__avatar-wrapper user__avatar-wrapper" />
                      <span className="header__user-name user__name">{authorizationInfo.email}</span>
                    </Link>
                  </li>
                  <li className="header__nav-item">
                    <a className="header__nav-link" href="/#"
                      onClick={(evt) => {
                        evt.preventDefault();
                        onLogout();
                      }}
                    >
                      <span className="header__signout">Sign out</span>
                    </a>
                  </li>
                </>
                :
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="/#"
                    onClick={(evt) => {
                      evt.preventDefault();
                      history.push(AppRoute.LOGIN);
                    }}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper" />
                    <span className="header__login">Sign in</span>
                  </a>
                </li>}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authorizationInfo: PropTypes.shape({
    id: PropTypes.number,
    email: PropTypes.string,
    avatarUrl: PropTypes.string,
    isPro: PropTypes.bool,
    name: PropTypes.string,
    token: PropTypes.string,
  }),
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  authorizationInfo: state.authorizationInfo,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  },
});

export {Header};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
