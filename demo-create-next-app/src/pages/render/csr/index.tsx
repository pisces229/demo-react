import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

interface Post {
  id: string;
  name: string;
}

const Index: NextPage = () => {
  const [post, setPost] = useState<Post>();
  useEffect(() => {
    // fetch("http://localhost:9080/api/users/1")
    fetch('https://localhost:9443/api/users/1')
      .then((res) => res.json())
      .then((res) => setPost(res));
  }, []);
  return (
    <>
      <h3>Render CSR</h3>
      <p>{post?.name}</p>
    </>
  );
};

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
// const Index = () => {
//   const { data, error } = useSWR<Post>("https://localhost:9443/api/users/1", fetcher);
//   if (error) return <h3>failed to load</h3>;
//   if (!data) return <h3>loading...</h3>;
//   return <h3>{data?.name}</h3>;
// }

export default Index;
