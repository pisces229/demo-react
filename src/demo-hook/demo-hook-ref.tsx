import { useRef } from 'react';

export function DemoHookRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  const onClick = () => {
    console.log(inputRef.current?.value);
    inputRef.current?.focus();
  };
  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={onClick}>Focus</button>
    </>
  );
}
