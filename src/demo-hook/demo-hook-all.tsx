import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export function DemoHookAll() {
  // useState
  const [state, setState] = useState({ value: 0 });
  const onClickPlus = (e: React.MouseEvent<HTMLElement>) => {
    // console.log(e);
    setState(() => ({ ...state, value: state.value + 1 }));
  };
  const onClickClear = (e: React.MouseEvent<HTMLElement>) => {
    // console.log(e);
    setState({ value: 0 });
  };
  // useEffect
  useEffect(() => {
    // MOUNTED...
    // return () => {
    //   // UNMOUNTED...
    // };
  });
  useEffect(() => {
    console.log('useEffect.MOUNTED');
    return () => {
      console.log('useEffect.UNMOUNTED');
    };
  });
  useEffect(() => {
    console.log('useEffect[state.value].MOUNTED');
  }, [state.value]);
  // useCallback
  const useCallbackValue = useCallback(
    () => `useCallback:[${state.value}]`,
    [state.value],
  );
  useEffect(
    () => console.log('useEffect[useCallbackValue]'),
    [useCallbackValue],
  );
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
      <h3>useCallbackValue:[{useCallbackValue()}]</h3>
      <h3>useMemoValue:[{useMemoValue}]</h3>
      -----
      <input ref={useRefInput} type="text" />
      <button onClick={onClickRefInput}>Focus the input</button>
    </>
  );
}
