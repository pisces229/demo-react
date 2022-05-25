import { useState, useTransition } from 'react';

export function DemoHookTransition() {
  const [transition, startTransition] = useTransition();
  const [state, setState] = useState<boolean>(true);
  return (
    <>
      <h3>DemoHookDemo</h3>
      <h4>transition:[{transition}]</h4>
      <button
        disabled={transition}
        onClick={() => startTransition(() => setState(() => !state))}
      >
        Click
      </button>
    </>
  );
}
