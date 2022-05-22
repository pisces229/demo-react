import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { DemoDefaultApp } from './demo-default/demo-default-app';
import { DemoHookApp } from './demo-hook/demo-hook-app';
import { DemoReduxApp } from './demo-redux/demo-redux-app';
import { DemoRouterApp } from './demo-router/demo-router-app';
import { DemoPageApp } from './demo-page/demo-page-app';
import { DemoStyleApp } from './demo-styled/demo-styled-app';
import { DemoAjaxApp } from './demo-ajax/demo-ajax-app';

const root = ReactDOM.createRoot(document.getElementById('root') as any);
// React Strict Mode does is run certain callbacks/methods twice (in DEV mode ONLY).
root.render(
  // <React.StrictMode>
  <>
    {/* <DemoDefaultApp /> */}
    {/* <DemoHookApp /> */}
    {/* <DemoReduxApp /> */}
    {/* <DemoRouterApp /> */}
    {/* <DemoStyleApp /> */}
    {/* <DemoPageApp /> */}
    <DemoAjaxApp />
    {/* Summarize */}
    {/* <DemoAppApp /> */}
  </>
  // </React.StrictMode>
);

reportWebVitals();
