import { NextPage, GetServerSideProps } from 'next';
import getConfig from 'next/config';
import { useState } from 'react';
// server
import { readFile } from 'fs/promises';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

type User = {
  id: string;
  name: string;
};

type IndexProps = {
  user: User;
};

const Index: NextPage<IndexProps> = (props: IndexProps) => {
  console.log(publicRuntimeConfig.value);
  const [user, setUser] = useState<User | undefined>(props?.user);
  return (
    <>
      <h3>Render SSR</h3>
      <p>
        {user?.id}-{user?.name}
      </p>
    </>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(serverRuntimeConfig.value);
  console.log('SSR.getServerSideProps');
  context.res.setHeader('Cache-Control', 'public, s-maxage=1, stale-while-revalidate=59');
  let data: User | undefined;
  try {
    const res = await fetch("http://localhost:9080/api/users/1");
    // const res = await fetch('https://localhost:9443/api/users/1');
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
