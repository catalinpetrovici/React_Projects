import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GithubProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (import.meta.env.VITE_NODE_ENV === 'production') {
  disableReactDevTools();
}

const domain = import.meta.env.VITE_REACT_APP_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <GithubProvider>
      <App />
    </GithubProvider>
  </Auth0Provider>
);
