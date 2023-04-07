import React from 'react';
import ReactDOM from 'react-dom/client';
import '@appSrc/index.css';
import logo from '@appSrc/assets/logo.svg';
import charlie from '@appSrc/assets/charlie.jpg';
// import App from '@appSrc/pages/app/App';
// import App from '@appSrc/pages/app-api/app';
// import App from '@appSrc/pages/app-hook/app';
import App from '@appSrc/pages/app-router/app';
// import App from '@appSrc/pages/app-service/app';
// import App from '@appSrc/pages/app-store/app';
// import App from '@appSrc/pages/app-style/app';
// import App from '@appSrc/routes/app';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <img src={logo} className="logo" alt="logo" />
    <img src={charlie} className="charlie" alt="charlie" />
    <App />
  </React.StrictMode>,
);

console.log(process.env);

// if (process.env.ENVIRONMENT === 'development') {
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   require('@appSrc/api/browser').worker.start();
// }
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// require('@appSrc/reportWebVitals').reportWebVitals(console.log);
