import { Suspense, lazy } from 'react';
import ErrorBoundary from '../../components/error-boundary';
// import LazyComponent from "../../components/lazy-component";
const LazyComponent = lazy(() =>
  import('../../components/lazy-component').then((module) => ({
    default: module.default,
  })),
);

const Index = () => {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </ErrorBoundary>
  );
};
export default Index;
