import { useRoutes, RouteObject } from 'react-router-dom';
import { DemoAppPageLayout } from './demo-app-page-layout';
import { DemoAppPageFirst } from './demo-app-page-first';
import { DemoAppPageSecond } from './demo-app-page-second';
import { DemoAppPageNoMatch } from './demo-app-page-nomatch';
import { DemoAppPageHome } from './demo-app-page-home';

export function DemoAppRouter() {
  let routeObject: RouteObject[] = [
    {
      path: '',
      element: <DemoAppPageLayout />,
      children: [
        {
          path: '',
          element: <DemoAppPageHome />,
        },
        {
          path: 'first',
          element: <DemoAppPageFirst />,
        },
        {
          path: 'second',
          element: <DemoAppPageSecond />,
        },
        {
          path: '*',
          element: <DemoAppPageNoMatch />,
        },
      ],
    },
  ];
  const element = useRoutes(routeObject);
  return <>{element}</>;
}
