import { useEffect } from 'react';
import { DemoConstStore } from './demo-const-store';

export function DemoCostSecond() {
  const store = DemoConstStore;
  useEffect(() => {
    console.log('DemoCostSecond.MOUNT');
    return () => {
      console.log('DemoCostSecond.UNMOUNT');
    };
  }, []);
  return (
    <>
      <h3>DemoCostSecond</h3>
      <p>
        text:[{store.text}] value:[{store.value}]
      </p>
      <button onClick={() => ++store.value}>Value</button>
      <button onClick={() => (store.text = store.value.toString())}>
        Text
      </button>
    </>
  );
}
