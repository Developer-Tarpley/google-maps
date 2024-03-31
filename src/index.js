import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DistanceProvider } from './context/context';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DistanceProvider>
      <App />
    </DistanceProvider>
  </React.StrictMode>
);

