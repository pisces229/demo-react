import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

type User = {
  id: string;
  name: string;
};

const Index: NextPage = () => {
  const [user, setUser] = useState<User | undefined>();
  useEffect(() => {
    fetch("http://localhost:9080/api/users/1")
    // fetch('https://localhost:9443/api/users/1')
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, []);
  return (
    <>
      <Head>
        <title>Render CSR</title>
      </Head>
      <main>
        <h3>Render CSR</h3>
        <p>
          {user?.id}-{user?.name}
        </p>
      </main>
    </>
  );
};

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
// const Index = () => {
//   const { data, error } = useSWR<User>("https://localhost:9443/api/users/1", fetcher);
//   if (error) return <h3>failed to load</h3>;
//   if (!data) return <h3>loading...</h3>;
//   return <h3>{data?.id}-{data?.name}</h3>;
// }

export default Index;
