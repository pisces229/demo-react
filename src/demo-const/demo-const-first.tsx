import { useEffect, useState } from 'react';
import { DemoConstStoreModel } from './demo-const-model';
import { demoConstStore } from './demo-const-store';

export function DemoConstFirst() {
  const [state, setState] = useState<DemoConstStoreModel>({
    text: '',
    value: 0,
  });
  useEffect(() => {
    console.log('DemoConstFirst.MOUNT');
    if (demoConstStore.get()) {
      setState({ ...demoConstStore.get()! });
    }
    return () => {
      console.log('DemoConstFirst.UNMOUNT');
    };
  }, []);
  useEffect(() => {
    demoConstStore.set({ ...state });
  }, [state]);
  const doValue = () =>
    setState((state) => ({ ...state, value: ++state.value }));
  const doText = () =>
    setState((state) => ({ ...state, text: state.value.toString() }));
  const doClear = () => demoConstStore.set(undefined);
  return (
    <>
      <h3>DemoCostFirst</h3>
      <p>
        text:[{state!.text}] value:[{state!.value}]
      </p>
      <button onClick={doValue}>Value</button>
      <button onClick={doText}>Text</button>
      <button onClick={doClear}>Clear</button>
    </>
  );
}
