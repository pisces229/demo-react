import { NextPage, GetServerSideProps } from 'next';
import Head from 'next/head';
import getConfig from 'next/config';
import { useState } from 'react';
// server
import { readFile } from 'fs/promises';
import { getUser } from '@/lib/repository/user';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

type User = {
  row: string;
  id: string;
  name: string;
  birthday: Date;
  age: number;
};

type IndexProps = {
  user: User;
};

const Index: NextPage<IndexProps> = (props: IndexProps) => {
  console.log('SSR.NextPage');
  console.log('publicRuntimeConfig', publicRuntimeConfig);
  const [user, setUser] = useState<User | undefined>(props?.user);
  return (
    <>
      <Head>
        <title>Render SSR</title>
      </Head>
      <main>
        <h3>Render SSR</h3>
        <p>
          {user?.id}-{user?.name}
        </p>
      </main>
    </>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log('SSR.getServerSideProps');
  console.log('serverRuntimeConfig', serverRuntimeConfig);
  context.res.setHeader('Cache-Control', 'public, s-maxage=1, stale-while-revalidate=59');
  context.res.setHeader('Set-Cookie', [
    'Page1=1; Path=/; HttpOnly; SameSite=Strict;',
    'Page2=2; Path=/; HttpOnly; SameSite=Strict;',
  ]);
  let data: User | undefined = { 
    row: '',
    id: '',
    name: '', 
    birthday: new Date() ,
    age: 0
  };
  // api
  // try {
  //   const res = await fetch("http://localhost:9080/api/users/1");
  //   // const res = await fetch('https://localhost:9443/api/users/1');
  //   data = await res.json();
  //   console.log('fetch:', data);
  // } catch (e) {
  //   console.error(e);
  //   try {
  //     const content = await readFile('c:/workspace/user.json');
  //     data = JSON.parse(content.toString('utf8'));
  //     console.log('readFile:', data);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }
  data = await getUser();
  // if (!data) {
  //   return {
  //     notFound: true,
  //   }
  // }
  return {
    props: {
      user: data,
    },
  };
};
