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

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <h1 className="index_title">Title</h1>
    <img src={logo} className="index_logo" alt="logo" />
    <img src={charlie} className="index_charlie" alt="charlie" />
    <App />
    <hr />
    <button className="index_btn0 bg-green-500">按鈕 1</button>
    <button className="index_btn1 index_btn2">按鈕 12</button>
    <button className="index_btn2 index_btn1">按鈕 21</button>
  </React.StrictMode>,
);

console.log(process.env);

// if (process.env.ENVIRONMENT === 'development') {
//   // eslint-disable-next-line @typescript-eslint/no-var-requires
//   require('@/api/browser').worker.start();
// }
// // eslint-disable-next-line @typescript-eslint/no-var-requires
// require('@/reportWebVitals').reportWebVitals(console.log);
