import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import React from 'react';
import { AppProvider } from './context';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);
