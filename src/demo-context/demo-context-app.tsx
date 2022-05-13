import React from "react";
import { DemoContextComponent } from "./demo-context-component";

export function DemoContextApp() {
  return (
    <>
      <h1>First</h1>
      <DemoContextComponent />
      <h1>Second</h1>
      <DemoContextComponent />
    </>
  );
}
