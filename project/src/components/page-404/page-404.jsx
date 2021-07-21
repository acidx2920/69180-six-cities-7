import React from 'react';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../consts';

import Header from '../header/header';

function Page404() {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--404">
        <h1>404 Not Found</h1>
        <Link to={AppRoute.ROOT}>Вернуться на главную</Link>
      </main>
    </div>
  );
}

export default Page404;
