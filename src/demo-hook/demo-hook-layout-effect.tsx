import { useEffect, useLayoutEffect, useState } from 'react';

export function DemoHookLayoutEffect() {
  const [state, setState] = useState<number>(0);
  useEffect(() => {
    console.log(`useEffect.MOUNTED`);
  });
  useLayoutEffect(() => {
    console.log(`useLayoutEffect.MOUNTED`);
  });
  return (
    <>
      <h3>DemoHookLayoutEffect</h3>
      <h4>state:[{state}]</h4>
      <button
        onClick={() => setState((value) => (value + 1))}
      >
        Plus
      </button>
    </>
  );
}
