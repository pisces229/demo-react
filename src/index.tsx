import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import './index.css';
import { DemoDefaultApp } from './demo-default/demo-default-app';
import { DemoContextApp } from './demo-context/demo-context-app';
import { DemoHookApp } from './demo-hook/demo-hook-app';
import { DemoReduxApp } from './demo-redux/demo-redux-app';
import { DemoRouterApp } from './demo-router/demo-router-app';
import { DemoAxiosApp } from './demo-axios/demo-axios-app';
import { DemoFetchApp } from './demo-fetch/demo-fetch-app';
import { DemoPageApp } from './demo-page/demo-page-app';
import { DemoStyleApp } from './demo-styled/demo-styled-app';
import { DemoAppApp } from './demo-app/demo-app-app';

const root = ReactDOM.createRoot(document.getElementById("root") as any);
// React Strict Mode does is run certain callbacks/methods twice (in DEV mode ONLY).
root.render(
  <React.StrictMode>
    {/* <DemoDefaultApp /> */}
    {/* <DemoContextApp /> */}
    {/* <DemoHookApp /> */}
    {/* <DemoReduxApp /> */}
    {/* <DemoRouterApp /> */}
    {/* <DemoAxiosApp /> */}
    {/* <DemoFetchApp /> */}
    {/* <DemoPageApp /> */}
    {/* <DemoStyleApp /> */}
    {/* Summarize */}
    <DemoAppApp />
  </React.StrictMode>
);

reportWebVitals();
