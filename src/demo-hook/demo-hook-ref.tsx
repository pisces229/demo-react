import { useRef, useState } from 'react';

export function DemoHookRef() {
  console.log('DemoHookRef');
  // const [state, setState] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    // setState((state) => (state + 1));
    console.log(`inputRef.current?.value:[${inputRef.current?.value}]`);
    inputRef.current?.focus();
  };
  return (
    <>
      <h3>useRef</h3>
      {/* <p>state:[{state}]</p> */}
      <p>inputRef.current?.value:[{inputRef.current?.value}]</p>
      <input type="text" ref={inputRef} />
      <button onClick={onClick}>Focus</button>
    </>
  );
}
