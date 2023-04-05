import Head from 'next/head';
import styles from '@/styles/index.module.css';
import { NextPageWithLayout } from 'next';

const Index: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>{process.env.NAME}-{process.env.ENVIRONMENT}</title>
      </Head>
      <h3 className={styles.color}>{process.env.NAME}</h3>
      <h3 className="globals-color">{process.env.NAME}</h3>
    </>
  );
};

// Index.getLayout = getLayout;

export default Index;
