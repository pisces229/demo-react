import { useState } from "react";
import { DemoContextContext } from "./demo-context-context";
import { DemoContextSecond } from "./demo-context-second";

export function DemoContextFirst() {
  const [count, setCount] = useState<number>(0);
  const plusCount = () => setCount(() => count + 1);
  return (
    <>
      <h3>DemoContextFirst</h3>
      <p>{count}</p>
      <button onClick={() => plusCount()}>plusCount</button>
      <DemoContextContext.Provider value={{ count, plusCount }}>
        <DemoContextSecond />
      </DemoContextContext.Provider>
    </>
  );
}

