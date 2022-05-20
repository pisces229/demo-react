import { useContext } from "react";
import { DemoContextContext } from "./demo-context-context";

export function DemoContextSecond() {
  const context = useContext(DemoContextContext);

  return (
    <>
      <h3>DemoContextSecond</h3>
      <p>{context.count}</p>
      <button onClick={() => context.plusCount()}>plusCount</button>
    </>
  );
}
