import { useEffect, useState } from 'react';

export function DemoComponentFunctional() {
  const [state, setState] = useState<boolean>(true);
  const onCallback = async (value: string) => {
    console.log('onCallback', value);
  };
  return (
    <>
      <h2>DemoComponentFunctional</h2>
      <button onClick={async () => setState((state) => !state)}>Change</button>
      {state && <DemoLifeCycle />}
      {/* <DemoNoProp /> */}
      {/* <DemoWithProp value="React" /> */}
      <DemoWithCallback message="DemoComponentFunctional" callback={onCallback} />
    </>
  );
}
const DemoLifeCycle = () => {
  const [value, setValue] = useState<number>(0);
  // any effect
  useEffect(() => {
    console.log(`useEffect.MOUNTED`);
    // return () => {
    //   console.log(`useEffect.UNMOUNTED`);
    // };
  });
  // once effect
  useEffect(() => {
    console.log(`useEffect[].MOUNTED`);
    return () => {
      console.log(`useEffect[].UNMOUNTED`);
    };
  }, []);
  return (
    <>
      <h3>DemoLifeCycle</h3>
      <h3>state.value:{value}</h3>
      <button onClick={async () => setValue((state) => state + 1)}>Click</button>
    </>
  );
};
const DemoNoProp = () => {
  return (
    <>
      <h3>DemoNoProp</h3>
    </>
  );
};
const DemoWithProp = (prop: { value: string }) => {
  return (
    <>
      <h3>DemoWithProp</h3>
      <h4>prop.value:{prop.value}</h4>
    </>
  );
};
const DemoWithCallback = (prop: { message: string, callback: ((value: string) => {}) }) => {
  const onClick = async () => {
    prop.callback('DemoWithCallback');
  };
  return (
    <>
      <h3>DemoWithFunction</h3>
      <h4>{prop.message}</h4>
      <button onClick={onClick}>Callback</button>
    </>
  );
};
