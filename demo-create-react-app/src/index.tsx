import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import styles from './index.module.css';
import App from './pages/app/App';
// import App from './pages/app-api/app';
// import App from './pages/app-hook/app';
// import App from './pages/app-router/app';
// import App from './pages/app-service/app';
// import App from './pages/app-store/app';
// import App from './pages/app-style/app';
// import App from './routes/app';
import reportWebVitals from './reportWebVitals';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./api/browser');
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <h1 className={styles.textColor}>Index</h1>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// reportWebVitals(console.log);
