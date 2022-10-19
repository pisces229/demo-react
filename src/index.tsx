import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { DemoHookApp } from './demo-hook/demo-hook-app';
import { DemoReduxApp } from './demo-redux/demo-redux-app';
import { DemoRouterApp } from './demo-router/demo-router-app';
import { DemoPageApp } from './demo-page/demo-page-app';
import { DemoStyleApp } from './demo-styled/demo-styled-app';
import { DemoAjaxApp } from './demo-ajax/demo-ajax-app';
import { DemoComponentApp } from './demo-component/demo-component-app';
import { DemoConstApp } from './demo-const/demo-const-app';
import { DemoTestApp } from './demo-test/demo-test-app';
import { DemoTopApp } from './demo-top/demo-top-app';

const root = ReactDOM.createRoot(document.getElementById('root') as any);
// React Strict Mode does is run certain callbacks/methods twice (in DEV mode ONLY).
root.render(
  // <React.StrictMode>
  <>
    {/* <DemoComponentApp /> */}
    {/* <DemoHookApp /> */}
    {/* <DemoReduxApp /> */}
    {/* <DemoRouterApp /> */}
    {/* <DemoStyleApp /> */}
    {/* <DemoPageApp /> */}
    {/* <DemoAjaxApp /> */}
    {/* <DemoConstApp /> */}
    {/* <DemoTopApp /> */}
    {/* <DemoTestApp /> */}
  </>,
  // </React.StrictMode>
);

reportWebVitals();
