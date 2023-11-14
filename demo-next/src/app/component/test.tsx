'use client';

import { useState } from 'react';

export default function ClientComponent({ children, count }: { children: React.ReactNode; count: number }) {
  const [count1, setCount1] = useState(count);
  const onClick = async () => {
    var temp = await (await fetch('/api')).json();
    // var temp = await getCount();
    setCount1(temp.res);
  };

  return (
    <>
      <button onClick={onClick}>
        {children} {count1}
      </button>
    </>
  );
}
