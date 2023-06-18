import React, { useState, useCallback } from 'react';

const Index = () => {
  const [inputDebounce, setInputDebounce] = useState('');
  const [inputThrottle, setInputThrottle] = useState('');

  const fetchData = (value: string) => {
    return console.log('fetch data', value);
  };

  const debounce = (fn: (value: string) => void, delay: number) => {
    let timer: NodeJS.Timeout;
    return (value: string) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn(value);
      }, delay);
    };
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandler = useCallback(debounce(fetchData, 1000), []);
  const onInputDebounceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDebounce(e.target.value);
    debounceHandler(e.target.value);
    console.log('fire onInputDebounceChange');
  };

  const throttle = (fn: (value: string) => void, delay: number) => {
    let isWait = false;
    const timeoutFn = () => {
      if (!inputThrottle) {
        isWait = false;
      } else {
        fn(inputThrottle);
        setInputThrottle('');
        setTimeout(timeoutFn, delay);
      }
    };
    return (value: string) => {
      if (!isWait) {
        fn(value);
        isWait = true;
        setTimeout(timeoutFn, delay);
      }
    };
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const throttleHander = useCallback(throttle(fetchData, 1000), []);
  const onClickThrottle = () => {
    throttleHander(inputDebounce);
    console.log('fire onInputThrottleChange');
  };
  return (
    <>
      <div>
        <input value={inputDebounce} onChange={onInputDebounceChange} />
      </div>
      <div>
        <button onClick={onClickThrottle}>Button</button>
      </div>
    </>
  );
};
export default Index;
