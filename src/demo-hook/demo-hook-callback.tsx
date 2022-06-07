/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react';

export function DemoHookCallback() {
  console.log('DemoHookCallback');
  const [state, setState] = useState(0);
  const callbackOriginal = useCallback(
    (value: string) => `[${value}][${state}]`,
    [],
  );
  const callbackCurrent = useCallback(
    (value: string) => `[${value}][${state}]`,
    [state],
  );
  return (
    <>
      <h3>DemoHookCallback</h3>
      <p>state:[{state}]</p>
      <p>{callbackOriginal('callbackOriginal')}</p>
      <p>{callbackCurrent('callbackCurrent')}</p>
      <button onClick={() => setState((state) => state + 1)}>Change</button>
    </>
  );
}
