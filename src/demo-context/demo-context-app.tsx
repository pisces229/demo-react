import React from 'react';
import { DemoContextFirst } from './demo-context-first';

export function DemoContextApp() {
  return (
    <>
      <h1>First</h1>
      <DemoContextFirst />
      <h1>Second</h1>
      <DemoContextFirst />
    </>
  );
}
