import React, { useState } from 'react';

const Index = () => {
  // React.cloneElement
  const [count, setCount] = useState<number>(0);
  const onClick = () => setCount(() => count + 1);
  const createElement = (value: string) => {
    const style = { style: { color: 'blue' } };
    return <label {...style}>{value}</label>;
  };
  // React.Children
  const onClickChildrenForeach = () => {
    React.Children.forEach(createElement('abcd'), (child, index) => {
      console.log(child, index);
    });
  };
  const onClickChildrenToArray = () => {
    console.log(React.Children.toArray(createElement('abcd')));
  };
  return (
    <>
      <p>React.createElement</p>
      {React.createElement('button', { type: 'button', onClick: onClick }, count)}
      <br />
      {React.createElement('div', { style: { color: 'red' } }, 'createElement')}
      <br />
      {React.createElement(
        'div',
        { style: { backgroundColor: 'red' } },
        React.createElement('div', { style: { color: 'blue' } }, 'createElement'),
      )}
      <hr></hr>
      <p>React.cloneElement</p>
      {React.cloneElement(createElement(count.toString()), {
        style: { color: 'red' },
      })}
      <hr></hr>
      <p>isValidElement</p>
      {/* {React.isValidElement(createElement(count.toString())) && 'isValidElement'} */}
      {React.isValidElement('div') && 'isValidElement'}
      <p>React.Children</p>
      <button type="button" onClick={onClickChildrenForeach}>
        ChildrenForeach
      </button>
      <button type="button" onClick={onClickChildrenToArray}>
        ChildrenToArray
      </button>
    </>
  );
};
export default Index;
