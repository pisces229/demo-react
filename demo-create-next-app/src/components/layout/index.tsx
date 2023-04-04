import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';

const HomeLayout = (props: { children: ReactElement }) => {
  const router = useRouter();
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h3>Home Layout</h3>
      <Link href="/home/first">First</Link>
      <Link href="/home/second">Second</Link>
      <hr></hr>
      <button onClick={() => setCount((state) => state + 1)}>{count}</button>
      <hr></hr>
      {props.children}
    </>
  );
};

const FirstLayout = (props: { children: ReactElement }) => {
  const router = useRouter();
  const [count, setCount] = useState<number>(0);
  return (
    <>
      <h3>First Layout</h3>
      <Link href="/home/first">First</Link>
      <Link href="/home/second">Second</Link>
      <hr></hr>
      <button onClick={() => setCount((state) => state + 1)}>{count}</button>
      <hr></hr>
      {props.children}
    </>
  );
};

export const getHomeLayout = (page: ReactElement) => {
  return (
    <HomeLayout>{page}</HomeLayout>
  );
};

export const getFirstLayout = (page: ReactElement) => {
  return (
    <HomeLayout>
      <FirstLayout>{page}</FirstLayout>
    </HomeLayout>
  );
};
