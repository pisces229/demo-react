import { useEffect } from 'react';
import { DemoConstStore } from './demo-const-store';

export function DemoCostFirst() {
  const store = DemoConstStore;
  useEffect(() => {
    console.log('DemoCostFirst.MOUNT');
    return () => {
      console.log('DemoCostFirst.UNMOUNT');
    };
  }, []);
  return (
    <>
      <h3>DemoCostFirst</h3>
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
