import { useMemo, useState } from 'react';

const Index = () => {
  const [state, setState] = useState<{ first: number; second: number }>({
    first: 0,
    second: 0,
  });
  // memo
  const memoValue = useMemo(() => {
    console.log('useMemo,[]');
    return new Date().toString();
  }, []);
  const memoFirst = useMemo(() => {
    console.log('useMemo,[state.first]');
    return `[${state.first}]`;
  }, [state.first]);
  const memoSecond = useMemo(() => {
    console.log('useMemo,[state.second]');
    // return `[${state.second}]`;
    return DoSomething(state.second);
  }, [state.second]);
  return (
    <>
      <h3>Memo</h3>
      <p>memoValue:[{memoValue}]</p>
      <button onClick={() => setState(() => ({ first: 0, second: 0 }))}>
        Clear
      </button>
      <p>first:[{state.first}]</p>
      <p>memoFirst:[{memoFirst}]</p>
      <button
        onClick={() =>
          setState((state) => ({ ...state, first: state.first + 1 }))
        }
      >
        Plus
      </button>
      <p>second:[{state.second}]</p>
      <p>memoSecond:[{memoSecond}]</p>
      <button
        onClick={() =>
          setState((state) => ({ ...state, second: state.second + 1 }))
        }
      >
        Plus
      </button>
    </>
  );
};

const DoSomething = (value: number) => {
  console.log('Calculating...');
  for (let i = 0; i < 1000000000; i++) {
    value += 1;
  }
  return <>{value}</>;
};
export default Index;
