import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';

const config = {
  offersNum: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offersNum={config.offersNum}
      offers={offers}
    />
  </React.StrictMode>,
  document.getElementById('root'));
