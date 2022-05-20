import { Outlet, Link, useRoutes, RouteObject } from 'react-router-dom';

export function DemoRouterModel() {
  // let routeObject: RouteObject[] = [
  //   {
  //     path: "/",
  //     element: (
  //       <>
  //         <h1>DemoRouterModel</h1>
  //         <nav>
  //           <ul>
  //             <li>
  //               <Link to="/">Home</Link>
  //             </li>
  //             <li>
  //               <Link to="/courses">Courses</Link>
  //             </li>
  //             <li>
  //               <Link to="/nothing-here">Nothing Here</Link>
  //             </li>
  //           </ul>
  //         </nav>
  //         <Outlet />
  //       </>
  //     ),
  //     children: [
  //       {
  //         index: true,
  //         element: (
  //           <>
  //             <h2>Home</h2>
  //           </>
  //         )
  //       },
  //       {
  //         path: "/courses",
  //         element: (
  //           <>
  //             <h2>Courses</h2>
  //             <Outlet />
  //           </>
  //         ),
  //         children: [
  //           {
  //             index: true,
  //             element: (
  //               <>
  //                 <h3>index</h3>
  //               </>
  //             )
  //           },
  //           {
  //             path: "*",
  //             element: (
  //               <>
  //                 <h3>NoMatch</h3>
  //               </>
  //             )
  //           },
  //         ],
  //       },
  //       {
  //         path: "*",
  //         element: (
  //           <>
  //             <h2>NoMatch</h2>
  //           </>
  //         )
  //       },
  //     ],
  //   },
  // ];
  let routeObject: RouteObject[] = [
    {
      path: '/',
      element: (
        <>
          <h1>DemoRouterModel</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
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
          element: <h2>[index]</h2>,
        },
        {
          path: 'first',
          element: (
            <>
              <h2>[FirstLayout]</h2>
              <nav>
                <ul>
                  <li>
                    <Link to="/first/">Home</Link>
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
              element: <h2>[index]</h2>,
            },
            {
              path: 'first',
              element: <h2>[first]</h2>,
            },
            {
              path: 'second',
              element: <h2>[second]</h2>,
            },
            {
              path: '*',
              element: <h2>[NoMatch]</h2>,
            },
          ],
        },
        {
          path: 'second',
          element: (
            <>
              <h2>[SecondLayout]</h2>
              <nav>
                <ul>
                  <li>
                    <Link to="/second/">Home</Link>
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
              element: <h2>[index]</h2>,
            },
            {
              path: 'first',
              element: <h2>[first]</h2>,
            },
            {
              path: 'second',
              element: <h2>[second]</h2>,
            },
            {
              path: '*',
              element: <h2>[NoMatch]</h2>,
            },
          ],
        },
        {
          path: '*',
          element: <h2>[NoMatch]</h2>,
        },
      ],
    },
  ];
  let element = useRoutes(routeObject);
  return <>{element}</>;
}
