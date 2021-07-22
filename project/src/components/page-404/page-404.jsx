import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';

import Header from '../header/header';
import './page-404.css';

function Page404() {
  return (
    <div className="page page--404">
      <Header />

      <main className="page__main page__main--404">
        <div className="container">
          <h1>404 Not Found</h1>
          <Link to={AppRoute.ROOT}>Back to main</Link>
        </div>
      </main>
    </div>
  );
}

export default Page404;
