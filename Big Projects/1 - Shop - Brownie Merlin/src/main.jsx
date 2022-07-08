import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ProductsProvider } from '@context/products_context';
import { FilterProvider } from '@context/filter_context';
import { CartProvider } from '@context/cart_context';
import { UserProvider } from '@context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain='dev-f7drujzs.eu.auth0.com'
    clientId='ZdduvaUj2CG5ihzEnEGE9GGzpsj4Z8xt'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
