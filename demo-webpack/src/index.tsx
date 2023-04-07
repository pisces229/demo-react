import React from 'react';
import ReactDOM from 'react-dom/client';
import '@appSrc/index.css';
import logo from '@appSrc/assets/logo.svg';
import charlie from '@appSrc/assets/charlie.jpg';
import App1 from '@appSrc/pages/app/App';
import App2 from '@appSrc/pages/app-api/app';
import App3 from '@appSrc/pages/app-hook/app';
import App4 from '@appSrc/pages/app-router/app';
import App5 from '@appSrc/pages/app-service/app';
import App6 from '@appSrc/pages/app-store/app';
import App7 from '@appSrc/pages/app-style/app';
import App8 from '@appSrc/router/app';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <img src={logo} className="logo" alt="logo" />
    <img src={charlie} className="charlie" alt="charlie" />
    <App1 />
    <App2 />
    <App3 />
    <App4 />
    <App5 />
    <App6 />
    <App7 />
    <App8 />
  </React.StrictMode>,
);

console.log(process.env);

// if (process.env.ENVIRONMENT === 'development') {
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   require('@appSrc/api/browser').worker.start();
// }
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// require('@appSrc/reportWebVitals').reportWebVitals(console.log);
