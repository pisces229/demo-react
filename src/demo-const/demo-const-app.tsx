import { useState } from 'react';
import { DemoCostFirst } from './demo-const-first';
import { DemoCostSecond } from './demo-const-second';

export function DemoConstApp() {
  const [value, setValue] = useState(true);
  return (
    <>
      <h2>DemoConstApp</h2>
      <button onClick={() => setValue((state) => !state)}>Change</button>
      {value && <DemoCostFirst />}
      {!value && <DemoCostSecond />}
    </>
  );
}
