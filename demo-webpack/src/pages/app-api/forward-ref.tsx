import React, { ForwardedRef } from 'react';

const ForwardRefButton = (props: { children: string }, ref: ForwardedRef<HTMLButtonElement>) => (
  <button ref={ref}>{props.children}</button>
);

const ForwardRef = React.forwardRef(ForwardRefButton);

const Index = () => {
  // React.createRef
  const createRef = React.createRef<HTMLButtonElement>();
  const onClickCreateRef = () => {
    console.log(createRef.current);
  };
  // React.forwardRef
  const createForwardRef = React.createRef<HTMLButtonElement>();
  const onClickCreateForwardRef = () => {
    console.log(createForwardRef.current);
  };
  return (
    <>
      <h3>React.createRef</h3>
      <button type="button" ref={createRef} onClick={onClickCreateRef}>
        CreateRef
      </button>
      <h3>React.forwardRef</h3>
      <button type="button" ref={createRef} onClick={onClickCreateForwardRef}>
        CreateForwardRef
      </button>
      <ForwardRef ref={createForwardRef}>ForwardRefButton</ForwardRef>
    </>
  );
};
export default Index;
