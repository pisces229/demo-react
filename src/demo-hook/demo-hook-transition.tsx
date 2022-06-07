import { Suspense, useState, useTransition } from 'react';

const LazyCompoent = () => {
  console.log('LazyCompoent');
  const [state, setState] = useState(0);
  let count = 0;
  while (count < 5000) {
    console.log(++count);
    // ++count;
  }
  return (
    <>
      <p>LazyCompoent</p>
      <p>{state}</p>
      <button onClick={() => setState((state) => state + 1)}>Plus</button>
    </>
  );
};

export function DemoHookTransition() {
  const [transition, startTransition] = useTransition();
  console.log(`transition:[${transition}]`);
  const onClick = async () => {
    console.log('startTransition.1');
    startTransition(() => {
      console.log(`startTransition:[${transition}]`);
      console.log('startTransition.2');
    });
    console.log('startTransition.3');
  };
  return (
    <>
      <h3>DemoHookTransition</h3>
      <p>transition:[{transition.toString()}]</p>
      <button disabled={transition} onClick={onClick}>
        Click
      </button>
      {transition ? <p>Loading</p> : <LazyCompoent />}
    </>
  );
}
