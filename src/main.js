
import React from 'react';
import document from 'global/document';
import {Provider} from 'react-redux';
import {browserHistory, Router, Route} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {render} from 'react-dom';
import store from './store';
import App from './app';
import {buildAppRoutes} from './utils/routes';

const history = syncHistoryWithStore(browserHistory, store);

const appRoute = buildAppRoutes(App);

const Root = () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        {appRoute}
      </Route>
    </Router>
  </Provider>
);

render(<Root />, document.body.appendChild(document.createElement('div')));
