import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export function DemoHookLayoutEffect() {
  const [state, setState] = useState<number>(0);
  const divRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    divRef.current!.style.top = "100px";
    console.log(`useEffect.MOUNTED`);
  }, []);
  useLayoutEffect(() => {
    // divRef.current!.style.top = "100px";
    console.log(`useLayoutEffect.MOUNTED`);
  });
  return (
    <>
      <h3>DemoHookLayoutEffect</h3>
      <h4>state:[{state}]</h4>
      <button
        onClick={() => setState((value) => (value + 1))}
      >
        Plus
      </button>
      <div style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            height: '100px',
            width: '100px',
            backgroundColor: 'green',
            top: '0px'
          }}
          ref={divRef}
        />
      </div>
    </>
  );
}
