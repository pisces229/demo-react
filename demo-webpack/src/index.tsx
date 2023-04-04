import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './assets/logo.svg';
import charlie from './assets/charlie.jpg';
import App from './pages/app-api/app';
// import App from './pages/app-hook/app';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <img src={logo} className="logo" alt="logo" />
    <img src={charlie} className="charlie" alt="charlie" />
    <App />
  </React.StrictMode>,
);

console.log(process.env);

// reportWebVitals(console.log);
