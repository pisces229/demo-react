import '@/styles/globals.css';
import type { AppPropsWithLayout } from 'next/app';
import { ReactNode } from 'react';
import ErrorBoundary from '@/components/error-boundary';

// const App = ({ Component, pageProps }: AppProps) => {
//   return <Component {...pageProps}></Component>;
// }

const LayoutApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout || ((page: ReactNode) => page);
  return (
    <ErrorBoundary>
      {getLayout(<Component {...pageProps}></Component>)}
    </ErrorBoundary>
  );
}

type Metric = {
  id: string;
  label: string;
  name: string;
  startTime: number;
  value: number;
}
export function reportWebVitals(metric: Metric) {
  console.log(metric);
}

export default LayoutApp;
