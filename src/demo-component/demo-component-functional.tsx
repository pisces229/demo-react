import { useEffect, useState } from 'react';

export function DemoComponentFunctional() {
  const [value, setValue] = useState<boolean>(true);
  return (
    <>
      <h2>DemoComponentFunctional</h2>
      <button onClick={() => setValue((state) => !state)}>Change</button>
      {value && <DemoLifeCycle />}
      <DemoNoProp />
      <DemoWithProp value="React" />
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
      <button onClick={() => setValue((state) => state + 1)}>Click</button>
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
