import { useMemo, useState } from 'react';

export function DemoHookMemo() {
  const [state, setState] = useState<{ first: number; second: number }>({
    first: 0,
    second: 0,
  });
  // always run
  const constValue = new Date().toString();
  const constFirst = `[${state.first}]`;
  const constSecond = `[${state.second}]`;
  // memo
  const memoValue = useMemo(() => new Date().toString(), []);
  const memoFirst = useMemo(() => `[${state.first}]`, [state.first]);
  const memoSecond = useMemo(() => `[${state.second}]`, []);
  return (
    <>
      <h3>DemoHookDemo</h3>
      <h4>constValue:[{constValue}]</h4>
      <h4>memoValue:[{memoValue}]</h4>
      <button onClick={() => setState(() => ({ first: 0, second: 0 }))}>
        Clear
      </button>
      <h4>first:[{state.first}]</h4>
      <h4>constFirst:[{constFirst}]</h4>
      <h4>memoFirst:[{memoFirst}]</h4>
      <button
        onClick={() => setState((state) => ({ ...state, first: state.first + 1 }))}
      >
        Plus
      </button>
      <h4>second:[{state.second}]</h4>
      <h4>constSecond:[{constSecond}]</h4>
      <h4>memoSecond:[{memoSecond}]</h4>
      <button
        onClick={() => setState((state) => ({ ...state, second: state.second + 1 }))}
      >
        Plus
      </button>
    </>
  );
}
