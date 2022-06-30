import { createRoot } from 'react-dom/client';
import { AppProvider } from './context';

import './index.css';
import App from './App';
import React from 'react';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
