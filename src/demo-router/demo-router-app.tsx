import { BrowserRouter } from "react-router-dom";
import { DemoRouterBase } from './demo-router-base';
import { DemoRouterHook } from "./demo-router-hook";
import { DemoRouterModel } from './demo-router-model';

export function DemoRouterApp() {
  return (
  <BrowserRouter>
    {/* <DemoRouterBase /> */}
    {/* <DemoRouterModel /> */}
    <DemoRouterHook />
  </BrowserRouter>
  );
}
