import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const config = {
  proposalsNum: 312,
};

ReactDOM.render(
  <React.StrictMode>
    <App proposalsNum={config.proposalsNum} />
  </React.StrictMode>,
  document.getElementById('root'));
