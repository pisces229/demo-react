import { lazy, Suspense } from "react";
import { DemoComponentClassBased } from "./demo-component-class-based";
import { DemoComponentErrorBoundary } from "./demo-component-error-boundary";
import { DemoComponentFunctional } from "./demo-component-functional";
// import { DemoComponentLazy } from "./demo-component-lazy-component";
const DemoComponentLazy = lazy(() =>
  import('./demo-component-lazy-component').then((module) => ({
    default: module.DemoComponentLazy,
  })),
);

export function DemoComponentApp() {
  return (
    <>
      <DemoComponentClassBased />
      <DemoComponentFunctional />
      <DemoComponentErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <DemoComponentLazy />
        </Suspense>
      </DemoComponentErrorBoundary>
    </>
  );
}
