import { Outlet, Link, useRoutes, RouteObject } from 'react-router-dom';
import Page from './page';
const Index = () => {
  const routeObject: RouteObject[] = [
    {
      path: '/',
      element: (
        <>
          <h3>Root Layout</h3>
          <nav>
            <ul>
              <li>
                <Link to="/">Index</Link>
              </li>
              <li>
                <Link to="/first">First</Link>
              </li>
              <li>
                <Link to="/second">Second</Link>
              </li>
              <li>
                <Link to="/third">Third</Link>
              </li>
            </ul>
          </nav>
          <Outlet />
        </>
      ),
      children: [
        {
          index: true,
          element: (
            <Page>
              <p>[Root Index]</p>
            </Page>
          ),
        },
        {
          path: 'first',
          element: (
            <>
              <h3>[First Layout]</h3>
              <nav>
                <ul>
                  <li>
                    <Link to="/first/">Index</Link>
                  </li>
                  <li>
                    <Link to="/first/first">First</Link>
                  </li>
                  <li>
                    <Link to="/first/second">Second</Link>
                  </li>
                  <li>
                    <Link to="/first/third">Third</Link>
                  </li>
                </ul>
              </nav>
              <Outlet />
            </>
          ),
          children: [
            {
              index: true,
              element: (
                <Page>
                  <p>[First Index]</p>
                </Page>
              ),
            },
            {
              path: 'first',
              element: (
                <Page>
                  <p>[First First]</p>
                </Page>
              ),
            },
            {
              path: 'second',
              element: (
                <Page>
                  <p>[First Second]</p>
                </Page>
              ),
            },
            {
              path: '*',
              element: (
                <Page>
                  <p>[First NoMatch]</p>
                </Page>
              ),
            },
          ],
        },
        {
          path: 'second',
          element: (
            <>
              <h3>[Second Layout]</h3>
              <nav>
                <ul>
                  <li>
                    <Link to="/second/">Index</Link>
                  </li>
                  <li>
                    <Link to="/second/first">First</Link>
                  </li>
                  <li>
                    <Link to="/second/second">Second</Link>
                  </li>
                  <li>
                    <Link to="/second/third">Third</Link>
                  </li>
                </ul>
              </nav>
              <Outlet />
            </>
          ),
          children: [
            {
              index: true,
              element: (
                <Page>
                  <p>[Second Index]</p>
                </Page>
              ),
            },
            {
              path: 'first',
              element: (
                <Page>
                  <p>[Second First]</p>
                </Page>
              ),
            },
            {
              path: 'second',
              element: (
                <Page>
                  <p>[Second Second]</p>
                </Page>
              ),
            },
            {
              path: '*',
              element: (
                <Page>
                  <p>[Second NoMatch]</p>
                </Page>
              ),
            },
          ],
        },
        {
          path: '*',
          element: <h3>[Root NoMatch]</h3>,
        },
      ],
    },
  ];
  const element = useRoutes(routeObject);
  return <>{element}</>;
};
export default Index;
