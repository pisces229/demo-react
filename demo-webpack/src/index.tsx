import React from 'react';
import ReactDOM from 'react-dom/client';
import '@appSrc/index.css';
import logo from '@appSrc/assets/logo.svg';
import charlie from '@appSrc/assets/charlie.jpg';
import App from '@appSrc/pages/app-api/app';
// import App from '@src/pages/app-hook/app';
import reportWebVitals from '@appSrc/reportWebVitals';

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
