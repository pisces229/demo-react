import Head from 'next/head';
import styles from '@/styles/index.module.css';
import { NextPageWithLayout } from 'next';

const Index: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{process.env.name}</title>
      </Head>
      <h3 className={styles.color}>{process.env.name}</h3>
      <h3 className="globals-color">{process.env.name}</h3>
    </>
  );
};

// Index.getLayout = getLayout;

export default Index;
