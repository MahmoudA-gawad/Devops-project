// index.js - Serves as the entry point for your React application

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Your main application component

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
