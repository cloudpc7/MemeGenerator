import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { MemeProvider } from './components/MemeContext';
import '../node_modules/bootstrap/scss/bootstrap.scss';
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
        <MemeProvider>
          <App />
        </MemeProvider>
  </React.StrictMode>
);