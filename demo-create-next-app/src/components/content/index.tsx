import { useState } from 'react';

console.log('Load Compontents Content...');

const Index = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h3>Content</h3>
      <button onClick={() => setCount((state) => state + 1)}>{count}</button>
    </>
  );
};

export default Index;
