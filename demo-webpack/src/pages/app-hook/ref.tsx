import { useRef, useState } from 'react';

const Index = () => {
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
      <h3>Ref</h3>
      {/* <p>state:[{state}]</p> */}
      <p>inputRef.current?.value:[{inputRef.current?.value}]</p>
      <input type="text" ref={inputRef} />
      <button onClick={onClick}>Focus</button>
    </>
  );
};
export default Index;
