import { useCallback, useState } from 'react';

const Index = () => {
  const [state, setState] = useState(0);
  const callbackOriginal = useCallback(
    (value: string) => {
      console.log('useCallback[]');
      return `[${value}][${state}]`;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );
  const callbackCurrent = useCallback(
    (value: string) => {
      console.log('useCallback[state]');
      return `[${value}][${state}]`;
    },
    [state],
  );
  return (
    <>
      <h3>Callback</h3>
      <h4>state:[{state}]</h4>
      <h4>{callbackOriginal('callbackOriginal')}</h4>
      <h4>{callbackCurrent('callbackCurrent')}</h4>
      <button onClick={() => setState((state) => state + 1)}>Change</button>
    </>
  );
};
export default Index;
