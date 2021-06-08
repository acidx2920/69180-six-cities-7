import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const config = {
  offersNum: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App offersNum={config.offersNum} />
  </React.StrictMode>,
  document.getElementById('root'));
