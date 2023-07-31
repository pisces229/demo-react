import { NextPageWithLayout } from 'next';
import Head from 'next/head';
import Image from 'next/image'
import getConfig from 'next/config';
import styles from '@/styles/index.module.css';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();

console.log('serverRuntimeConfig', serverRuntimeConfig);
console.log('publicRuntimeConfig', publicRuntimeConfig);

const title = `${publicRuntimeConfig.ENVIRONMENT}-${publicRuntimeConfig.NAME}`;

const Index: NextPageWithLayout = () => {
  const onClickApp = (method: string) => async () => {
    fetch('/api/app', { method }).then(async (res) => {
      console.log(res);
      if (res.ok) {
        res.headers.forEach((value, key) => console.log(key, value));
        console.log(await res.json());
      }
    });
  }
  const onClickTest = async () => {
    fetch('/api/user',{
      credentials: 'include',
    }).then(async (res) => {
      console.log(res);
      if (res.ok) {
        console.log(await res.json());
      }
    });
  }
  return (
    <>
      <Head>
        {/* <title></title> */}
        <title>{title}</title>
      </Head>
      <main>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:shrink-0">
              <div className="h-48 w-full object-cover md:h-full md:w-48">
              <Image
                className="h-48 w-full object-cover md:h-full md:w-48"
                src="photo-1637734433731-621aca1c8cb6.avif"
                alt="Modern building architecture"
                width={0}
                height={0}
              />
              </div>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Company retreats
              </div>
              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                Incredible accommodation for your team
              </a>
              <p className="mt-2 text-slate-500">
                Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className={styles.color}>{process.env.NAME}</h3>
          <h3 className="globals-color">{process.env.NAME}</h3>
          <button onClick={onClickApp('GET')}>GET</button>
          <button onClick={onClickApp('POST')}>POST</button>
          <button onClick={onClickApp('PUT')}>PUT</button>
          <button onClick={onClickTest}>Test</button>
        </div>
      </main>
    </>
  );
};

// Index.getLayout = getLayout;

export default Index;
