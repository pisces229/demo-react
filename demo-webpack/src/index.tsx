import React from 'react';
import ReactDOM from 'react-dom/client';
import '@/index.css';
import logo from '@/assets/logo.svg';
import charlie from '@/assets/charlie.jpg';
// import App from '@/pages/app/app';
// import App from '@/pages/app-api/app';
// import App from '@/pages/app-hook/app';
// import App from '@/pages/app-router/app';
// import App from '@/pages/app-service/app';
// import App from '@/pages/app-store/app';
import App from '@/pages/app-style/app';
// import App from '@/router/app';
import '@/styles/global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

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
//   require('@/api/browser').worker.start();
// }
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// require('@/reportWebVitals').reportWebVitals(console.log);
