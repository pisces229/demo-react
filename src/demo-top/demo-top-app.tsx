import React, { ForwardedRef, useState } from "react";

export function DemoTopApp() {
  // React.cloneElement
  const [count, setCount] = useState<number>(0);
  const onClick = () => setCount(() => count + 1);
  const createElement = (value: string) => {
    const style = { style: { color: 'red' } };
    return (
      <label {...style}>{value}</label>
    )
  };
  // React.Children
  const onClickChildrenForeach = () => {
    React.Children.forEach(createElement('abcd'), (child, index) => {
      console.log(child, index);
    })
  };
  const onClickChildrenToArray = () => {
    console.log(React.Children.toArray(createElement('abcd')));
  };
  // React.createRef
  const createRef = React.createRef<HTMLButtonElement>();
  const onClickCreateRef = () => {
    console.log(createRef);
  };
  // React.forwardRef
  const createForwardRef = React.createRef<HTMLButtonElement>();
  const onClickCreateForwardRef = () => {
    console.log(createForwardRef);
  };
  return (
    <>
      <h3>React.createElement</h3>
      {React.createElement('button', { type: 'button', onClick: onClick }, count)}
      <br/>
      {React.createElement('div', { style: { color: 'red' } }, 'createElement')}
      <br/>
      {
        React.createElement('div', { style: { color: 'red' } },
          React.createElement('div', { style: { color: 'blue' } },
            'createElement')
        )
      }
      <br/>
      <h3>React.cloneElement</h3>
      {React.cloneElement(createElement(count.toString()), { style: { color: 'blue' } })}
      <br/>
      <h3>isValidElement</h3>
      {/* {React.isValidElement(createElement(count.toString())) && 'isValidElement'} */}
      {React.isValidElement('div') && 'isValidElement'}
      <br/>
      <h3>React.Children</h3>
      <button type='button' onClick={onClickChildrenForeach}>ChildrenForeach</button>
      <button type='button' onClick={onClickChildrenToArray}>ChildrenToArray</button>
      <br/>
      <h3>React.createRef</h3>
      <button type='button' ref={createRef} onClick={onClickCreateRef}>CreateRef</button>
      <h3>React.forwardRef</h3>
      <button type='button' ref={createRef} onClick={onClickCreateForwardRef}>CreateForwardRef</button>
      <ForwardRefButton ref={createForwardRef}>ForwardRefButton</ForwardRefButton>
    </>
  );
}

const ForwardRefButton = React.forwardRef(
  (props: { children: string }, ref: ForwardedRef<HTMLButtonElement>) =>
  (<button ref={ref}>{props.children}</button>)
);
