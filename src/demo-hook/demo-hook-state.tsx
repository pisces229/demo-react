import { useState } from 'react';

export function DemoHookState() {
  const [first, setFirst] = useState<number>(0);
  const onClickFirst = () => {
    setFirst(() => first + 1);
    setFirst(() => first + 1);
    setFirst(() => first + 1);
    // +1
  };
  const [second, setSecond] = useState<number>(0);
  const onClickSecond = () => {
    setSecond((state) => state + 1);
    setSecond((state) => state + 1);
    setSecond((state) => state + 1);
    // +3
  };
  return (
    <>
      <h3>DemoHookState</h3>
      <h4>first:[{first}]</h4>
      <button onClick={onClickFirst}>first</button>
      <h4>second:[{second}]</h4>
      <button onClick={onClickSecond}>second</button>
    </>
  );
}
