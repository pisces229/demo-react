import { NextPageWithLayout } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { getHomeLayout, getFirstLayout } from '@/components/layout';

const Index: NextPageWithLayout = () => {
  const router = useRouter();
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h3>First</h3>
      <button onClick={() => setCount((state) => state + 1)}>{count}</button>
    </>
  );
};

// Index.getLayout = getHomeLayout;
Index.getLayout = getFirstLayout;

export default Index;
