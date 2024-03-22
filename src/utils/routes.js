
import {CLOUD_PROVIDERS} from './cloud-providers';
import {IndexRoute, Route} from 'react-router';
import React from 'react';
import Demo from '../app';
import {DEFAULT_CLOUD_PROVIDER} from '../constants/default-settings';

export function onAuthEnterCallback(nextState, replace, callback) {
  // TODO: detect auth provider
  const authProvider = CLOUD_PROVIDERS[DEFAULT_CLOUD_PROVIDER];

  // Check if the current tab was opened by our previous tab
  if (window.opener) {
    const {location} = nextState;
    const token = authProvider.getAccessTokenFromLocation(location);
    window.opener.postMessage({token}, location.origin);
  }

  callback();
}

export function buildAppRoutes(Component) {
  return [
    (<Route key="auth" path="auth" component={Demo} onEnter={onAuthEnterCallback} />),
    (
      <Route key="demo" path="demo">
        <IndexRoute component={Component} />
        <Route path="map" component={Component} />
        <Route path="(:id)" component={Component} />
      </Route>
    )
  ];
}
