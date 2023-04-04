import { useEffect, useRef, useState } from 'react';

const Component = (props: { children: JSX.Element }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    const musedownOutside = (event: MouseEvent | TouchEvent) => {
      // console.log("DemoTestAlert.handleClickOutside");
      // console.log(wrapperRef.current);
      // console.log(event.target);
      if (wrapperRef.current) {
        if (event.target instanceof Node) {
          if (!wrapperRef.current.contains(event.target)) {
            console.log('DemoTestAlert.musedownOutside');
            setDisplay(false);
          } else {
            setDisplay(true);
          }
        }
      }
      // const node = ReactDOM.findDOMNode(wrapperRef.current);
      // if (node && event.target instanceof Node && !node.contains(event.target)) {
      //   console.log("DemoTestAlert.handleClickOutside");
      // }
    };
    console.log('addEventListener.musedownOutside');
    document.addEventListener('mousedown', musedownOutside);
    return () => {
      console.log('removeEventListener.musedownOutside');
      document.removeEventListener('mousedown', musedownOutside);
    };
  }, [wrapperRef]);
  return (
    <>
      <div ref={wrapperRef}>
        <input type="text" />
        {display && props.children}
      </div>
    </>
  );
};

const Index = () => {
  return (
    <>
      <Component>
        <label>Outside</label>
      </Component>
    </>
  );
};
export default Index;
