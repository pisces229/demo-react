import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useState } from 'react';
// server
import { readFile } from 'fs/promises';

type User = {
  id: string;
  name: string;
};

type IndexProps = {
  user: User;
};

const Index: NextPage<IndexProps> = (props: IndexProps) => {
  const [user, setUser] = useState<User | undefined>(props.user);
  return (
    <>
      <Head>
        <title>Render SSG</title>
      </Head>
      <main>
        <h3>Render SSG</h3>
        <p>
          {user?.id}-{user?.name}
        </p>
      </main>
    </>
  );
};
export default Index;

export const getStaticProps: GetStaticProps = async (context) => {
  console.log('SSG.getStaticProps');
  let data: User | undefined;
  try {
    const res = await fetch("http://localhost:9080/api/users/${context?.params?.id}");
    // const res = await fetch(`https://localhost:9443/api/users/${context?.params?.id}`);
    data = await res.json();
    console.log('fetch:', data);
  } catch (e) {
    console.error(e);
    try {
      const content = await readFile('c:/workspace/user.json');
      data = JSON.parse(content.toString('utf8'));
      console.log('readFile:', data);
    } catch (e) {
      console.error(e);
    }
  }
  return {
    props: {
      user: data,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  console.log('SSG.getStaticPaths');
  return {
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    // fallback: true,
    fallback: 'blocking',
  };
};
