import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { GenreGraphPage } from './pages';

import * as serviceWorker from './serviceWorker';

const router = (
  <Router>
    <div>
      <Route exact path="/" component={GenreGraphPage} />
    </div>
  </Router>
);

ReactDOM.render(router, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
