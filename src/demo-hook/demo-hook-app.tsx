import { DemoHookCallback } from './demo-hook-callback';
import { DemoHookContext } from './demo-hook-context';
import { DemoHookEffect } from './demo-hook-effect';
import { DemoHookMemo } from './demo-hook-memo';
import { DemoHookReducer } from './demo-hook-reducer';
import { DemoHookRef } from './demo-hook-ref';
import { DemoHookState } from './demo-hook-state';
import { DemoHookTransition } from './demo-hook-transition';

export function DemoHookApp() {
  return (
    <>
      <h2>DemoHookApp</h2>
      {/* State */}
      {/* <DemoHookState /> */}
      <DemoHookReducer />
      {/* <DemoHookContext /> */}
      {/* Effect */}
      {/* <DemoHookEffect /> */}
      {/* <DemoHookMemo /> */}
      {/* <DemoHookCallback /> */}
      {/* Otehr */}
      {/* <DemoHookRef /> */}
      {/* <DemoHookTransition /> */}
    </>
  );
}
