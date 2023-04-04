import { Fragment, useState } from 'react';
import { flushSync } from 'react-dom';

const Index = () => {
  const [first, setFirst] = useState<number>(0);
  const onClickFirst = () => {
    flushSync(() => {
      setFirst(() => first + 1);
    });
    // +1
    setFirst(() => first + 1);
    setFirst(() => first + 1);
    setFirst(() => first + 1);
    // +1
  };
  const [second, setSecond] = useState<number>(0);
  const onClickSecond = () => {
    setSecond((state) => state + 1);
    setSecond((state) => state + 1);
    setSecond((state) => state + 1);
    // +3
  };
  const [items, setItems] = useState([{ a: 0 }, { a: 1 }]);

  const onClickItem = (i: number) => () => {
    // ...
    const newItems = [...items];
    newItems[i].a += 1;
    // map
    // const newItems = items.map((item, index) => {
    //   if (index === i) {
    //     item.a += 1;
    //   }
    //   return item;
    // });
    console.log(Object.is(newItems, items));
    console.log(Object.is(newItems[0], items[0]));
    console.log(Object.is(newItems[1], items[1]));
    setItems(newItems);
  };
  return (
    <>
      <h3>State</h3>
      <p>first:[{first}]</p>
      <button onClick={onClickFirst}>first</button>
      <p>second:[{second}]</p>
      <button onClick={onClickSecond}>second</button>
      {items.map((item, index) => (
        <Fragment key={index}>
          <h4>
            items[{index}]:[{item.a}]
          </h4>
          <button onClick={onClickItem(index)}>item</button>
        </Fragment>
      ))}
    </>
  );
};
export default Index;
