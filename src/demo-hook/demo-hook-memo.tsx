import { useMemo, useState } from 'react';

export function DemoHookMemo() {
  const [state, setState] = useState<{ first: number; second: number }>({
    first: 0,
    second: 0,
  });
  // once
  const memoValue = useMemo(() => {
    // do something
    console.log('memoValue');
    return new Date().toString();
  }, []);
  const memoFirstValue = useMemo(() => {
    console.log('memoFirstValue');
    return `memoFirstValue[${state.first}]`;
  }, [state.first]);
  const memoSecondValue = useMemo(() => {
    console.log('memoSecondValue');
    return `memoSecondValue[${state.second}]`;
  }, [state.second]);
  return (
    <>
      <h3>DemoHookDemo</h3>
      <h4>memoValue:[{memoValue}]</h4>
      <button onClick={() => setState(() => ({ first: 0, second: 0 }))}>
        Clear
      </button>
      <h4>
        first:[{state.first}]memoFirstValue:[{memoFirstValue}]
      </h4>
      <button
        onClick={() => setState(() => ({ ...state, first: state.first + 1 }))}
      >
        Plus
      </button>
      <h4>
        second:[{state.second}]memoSecondValue:[{memoSecondValue}]
      </h4>
      <button
        onClick={() => setState(() => ({ ...state, second: state.second + 1 }))}
      >
        Plus
      </button>
    </>
  );
}
