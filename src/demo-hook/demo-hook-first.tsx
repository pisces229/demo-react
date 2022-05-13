import { useEffect } from "react";

export function DemoHookFirst() {
  useEffect(() => {
    console.log("MOUNTED");
    return () => {
      console.log("UNMOUNTED");
    };
  });
  return (
    <>
      <h2>DemoHookFirst</h2>
    </>
  );
}
