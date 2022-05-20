import React from 'react';
import { DemoContextFirst } from './demo-context-first';

export function DemoContextApp() {
  return (
    <>
      <h1>First Context</h1>
      <DemoContextFirst />
      <h1>Second Context</h1>
      <DemoContextFirst />
    </>
  );
}
