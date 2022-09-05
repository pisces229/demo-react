import { useState } from 'react';
import { DemoConstFirst } from './demo-const-first';
import { DemoConstSecond } from './demo-const-second';

export function DemoConstApp() {
  const [value, setValue] = useState(true);
  return (
    <>
      <h2>DemoConstApp</h2>
      <button onClick={() => setValue((state) => !state)}>Change</button>
      {value && <DemoConstFirst />}
      {!value && <DemoConstSecond />}
    </>
  );
}
