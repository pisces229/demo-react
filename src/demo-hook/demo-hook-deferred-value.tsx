import { useDeferredValue, useEffect, useState } from 'react';

export function DemoHookDeferredValue() {
  const [value, setValue] = useState('');
  const deferredValue = useDeferredValue(value);
  useEffect(() => {
    console.log(`[value]:[${value}]`);
  }, [value]);
  useEffect(() => {
    console.log(`[deferredValue]:[${deferredValue}]`);
  }, [deferredValue]);
  return (
    <>
      <h3>DemoHookDeferredValue</h3>
      <p>[value]:[{value}]</p>
      <p>[deferredValue]:[{deferredValue}]</p>
      <input
        type="text"
        onChange={(event) => setValue(() => event.target.value)}
      />
      <br />
      {Array(5000)
        .fill(value, 0, 5000)
        .map((item, index) => (
          <p key={index}>{item}</p>
        ))}
    </>
  );
}
