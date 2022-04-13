import { useContext } from "react";
import { DemoContextContext } from "./demo-context-context";

export function DemoContextComponentSecond() {
  const { count, plusCount } = useContext(DemoContextContext);
  return (
    <button onClick={() => { plusCount() }}>TestComponentSecond:[{count}]</button>
  );
}
