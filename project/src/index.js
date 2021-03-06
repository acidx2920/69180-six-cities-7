import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {createAPI} from './services/api';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import rootReducer from './store/root-reducer';
import {requireAuthorization} from './store/action';
import {AuthorizationStatus} from './consts';
import {redirect} from './store/middlewares/redirect';
import browserHistory from './browser-history';
import ReactNotification from 'react-notifications-component';
import 'react-notifications-component/dist/theme.css';
import App from './components/app/app';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)),
);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <ReactNotification />
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
