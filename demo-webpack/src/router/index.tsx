import { RouteObject, useRoutes } from 'react-router';
import PageLayout from '../pages/app-page/page-layout';
import PageFirst from '../pages/app-page/page-first';
import PageSecond from '../pages/app-page/page-second';

const Index = () => {
  const routeObject: RouteObject[] = [
    {
      path: '/',
      element: <PageLayout></PageLayout>,
      children: [
        {
          path: 'first',
          element: <PageFirst></PageFirst>,
        },
        {
          path: 'second',
          element: <PageSecond></PageSecond>,
        },
        {
          path: '*',
          element: <h3>[NoMatch]</h3>,
        },
      ],
    },
  ];
  const element = useRoutes(routeObject);
  return <>{element}</>;
};
export default Index;
