import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { CountryProvider } from './Context/CountryContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CountryProvider>
    <App />
  </CountryProvider>
);
