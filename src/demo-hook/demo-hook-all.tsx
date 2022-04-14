import React, { useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';

const DemoHookContext = React.createContext({ value: 0 });

export function DemoHookAll() {
  // useState
  const [state, setState] = useState({ value: 0 });
  const onClickPlus = (e: React.MouseEvent<HTMLElement>) => {
    // console.log(e);
    setState(() => ({...state, value: state.value + 1}));
  };
  const onClickClear = (e: React.MouseEvent<HTMLElement>) => {
    // console.log(e);
    setState({value: 0});
  };
  // useEffect
  useEffect(
    () => {
      console.log('useEffect');
    }
  );
  useEffect(
    () => {
      console.log('useEffect[state.value]');
    },
    [state.value]
  );
  // useContext
  const context = useContext(DemoHookContext);
  // useCallback
  const useCallbackValue = useCallback(() => `useCallback:[${state.value}]`, [state.value]);
  useEffect(() => console.log('useEffect[useCallbackValue]'), [useCallbackValue]);
  // useMemo
  const useMemoValue = useMemo(() => `useMemo:[${state.value}]`, [state.value]);
  // useRef
  const useRefInput = useRef<HTMLInputElement>(null);
  const onClickRefInput = () => {
    useRefInput!.current!.focus();
  };
  return (
  <>
    <h2>DemoHookAll</h2>
    <h3>state.value:[{state.value}]</h3>
    <button onClick={onClickPlus}>plus</button>
    <button onClick={onClickClear}>clear</button>
    <h3>context.value:[{context.value}]</h3>
    <DemoHookContext.Provider value={{value: state.value}}>
      <DemoHookContext.Consumer>
        {({ value }) => (
          <h3>context.value:[{value}]</h3>
        )}
      </DemoHookContext.Consumer>
    </DemoHookContext.Provider>
    <h3>useCallbackValue:[{useCallbackValue()}]</h3>
    <h3>useMemoValue:[{useMemoValue}]</h3>
    -----
    <input ref={useRefInput} type="text" />
    <button onClick={onClickRefInput}>Focus the input</button>
  </>
  );
}
