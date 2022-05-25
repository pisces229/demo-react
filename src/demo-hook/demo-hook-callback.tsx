/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useState } from 'react';

export function DemoHookCallback() {
  console.log('DemoHookCallback');
  const [state, setState] = useState(0);
  const callbackOriginal = useCallback(() => state, []);
  // const callbackOriginal = useCallback(() => state, [state]);
  const callbackCurrent = useCallback(() => state, [state]);
  // const callbackCurrent = useCallback(() => state, []);
  const onClick = () => {
    console.log('callbackOriginal():', callbackOriginal());
    console.log('callbackCurrent():', callbackCurrent());
  };
  return (
    <>
      <h3>DemoHookCallback</h3>
      <h4>state:[{state}]</h4>
      <button onClick={() => setState((state) => state + 1)}>Change</button>
      <h4>Click</h4>
      <button onClick={onClick}>Click</button>
    </>
  );
}
