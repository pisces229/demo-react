import { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

export function DemoTestAlert() {
  return (
    <>
      <DemoTestAlertChildren children={
        <>
          <input type="text" />
          <label>First</label>
        </>
      }></DemoTestAlertChildren>
    </>
  );
}

function DemoTestAlertChildren(props: {children: JSX.Element}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      // console.log("DemoTestAlert.handleClickOutside");
      // console.log(wrapperRef.current);
      // console.log(event.target);
      if (wrapperRef.current) {
        if (event.target instanceof Node) {
          if (!wrapperRef.current.contains(event.target)) {
            console.log("DemoTestAlert.handleClickOutside");
          }
        }
      }
      // const node = ReactDOM.findDOMNode(wrapperRef.current);
      // if (node && event.target instanceof Node && !node.contains(event.target)) {
      //   console.log("DemoTestAlert.handleClickOutside");
      // }
    }
    console.log("DemoTestAlert.addEventListener.mousedown");
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      console.log("DemoTestAlert.removeEventListener.mousedown");
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);
  return (
    <>
      <div ref={wrapperRef}>{props.children}</div>
    </>
  );
}

