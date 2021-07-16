import React, {useEffect, useRef, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../../store/api-actions';
import {redirectToRoute} from '../../store/action';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AppRoute, AuthorizationStatus} from '../../consts';

import Header from '../header/header';

function Login() {
  const authorizationStatus = useSelector(getAuthorizationStatus);
  const loginRef = useRef();
  const passwordRef = useRef();

  const dispatch = useDispatch();
  const onPageLoad = useCallback(() => {
    if(authorizationStatus === AuthorizationStatus.AUTH) {
      dispatch(redirectToRoute(AppRoute.ROOT));
    }
  }, [dispatch, authorizationStatus]);

  useEffect(() => {
    onPageLoad();
  }, [onPageLoad]);

  const onFormSubmit = (loginValue, passwordValue) => {
    const loginTrimmed = loginValue.trim();
    const passwordTrimmed = passwordValue.trim();
    if(loginTrimmed && passwordTrimmed) {
      dispatch(login({
        login: loginTrimmed,
        password: passwordTrimmed,
      }));
    }
  };

  return (
    <div className="page page--gray page--login">
      <Header />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action="#"
              method="post"
              onSubmit={(evt) => {
                evt.preventDefault();
                onFormSubmit(loginRef.current.value, passwordRef.current.value);
              }}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required ref={loginRef} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required ref={passwordRef} />
              </div>
              <button className="login__submit form__submit button" type="submit">Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/#">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
