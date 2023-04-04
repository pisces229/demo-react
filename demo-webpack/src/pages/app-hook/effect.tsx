import { useEffect, useState } from 'react';

const Index = () => {
  const [state, setState] = useState<{ first: number; second: number }>({
    first: 0,
    second: 0,
  });
  // any effect
  useEffect(() => {
    // do ssomething
    console.log(`useEffect.MOUNTED`);
    return () => {
      // cleanup
      console.log(`useEffect.UNMOUNTED`);
    };
  });
  // once effect
  useEffect(() => {
    // do ssomething
    console.log(`useEffect[].MOUNTED`);
    return () => {
      // cleanup
      console.log(`useEffect[].UNMOUNTED`);
    };
  }, []);
  // state effect
  useEffect(() => {
    console.log(`useEffect[state].MOUNTED:[${JSON.stringify(state)}]`);
    return () => {
      console.log(`useEffect[state].UNMOUNTED:[${JSON.stringify(state)}]`);
    };
  }, [state]);
  useEffect(() => {
    console.log(`useEffect[state.first].MOUNTED:[${state.first}]`);
    return () => {
      console.log(`useEffect[state.first].UNMOUNTED:[${state.first}]`);
    };
  }, [state.first]);
  useEffect(() => {
    console.log(`useEffect[state.second].MOUNTED:[${state.second}]`);
    return () => {
      console.log(`useEffect[state.second].UNMOUNTED:[${state.second}]`);
    };
  }, [state.second]);
  // setInterval
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   console.log('setInterval');
  //   const interval = setInterval(() => {
  //     setCount((state) => (state + 1));
  //   }, 1000);
  //   return () => {
  //     console.log('clearInterval');
  //     clearInterval(interval);
  //   };
  // }, []);
  return (
    <>
      <h3>Effect</h3>
      <button onClick={() => setState(() => ({ first: 0, second: 0 }))}>Clear</button>
      <p>first:[{state.first}]</p>
      <button onClick={() => setState(() => ({ ...state, first: state.first + 1 }))}>Plus</button>
      <p>second:[{state.second}]</p>
      <button onClick={() => setState(() => ({ ...state, second: state.second + 1 }))}>Plus</button>
      {/* <p>counts:[{count}]</p> */}
    </>
  );
};
export default Index;
