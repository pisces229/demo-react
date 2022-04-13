import React, { useEffect } from 'react';
import {
  Link,
  useLocation,
  useNavigationType,
  useNavigate,
  useOutlet,
  useParams,
  useResolvedPath,
  useSearchParams,
  useMatch,
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

export function DemoRouterHook() {
  return (
    <>
      <h1>DemoRouterHook</h1>
      <nav>
        <ul>
          <li>
            <Link to="/first">First</Link>
          </li>
          <li>
            <Link to="/second">Second</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="first" element={<DemoRouterFirst />} />
        <Route path="second" element={<DemoRouterSecond />} />
      </Routes>
      <h1>Outlet</h1>
      <Outlet />
    </>
  );
}

function useDemoRouterHook() {
  let location = useLocation();
  let navigationType = useNavigationType();
  let navigate = useNavigate();
  // let outlet = useOutlet();
  let { result } = useParams();
  let resolvedPath = useResolvedPath('first');
  // let [searchParams, setSearchParams] = useSearchParams();
  let match = useMatch({ path: location.pathname, end: true });
  // let match = useMatch({ path: 'first', end: true });
  useEffect(() => {
    console.log(`useEffect`);
    console.log(`useLocation:[${JSON.stringify(location)}]`);
    console.log(`useNavigationType:[${JSON.stringify(navigationType)}]`);
    console.log(`useNavigate:[${JSON.stringify(navigate)}]`);
    // console.log(`useOutlet:[${JSON.stringify(outlet)}]`);
    console.log(`useParams:[${JSON.stringify(result)}]`);
    console.log(`useResolvedPath:[${JSON.stringify(resolvedPath)}]`);
    console.log(`useMatch:[${JSON.stringify(match)}]`);
  });
  useEffect(() => {
    console.log(`useEffect[location]`);
  }, [location]);
  let handleClickNavigate = () => {
    if (location.pathname === '/first') {
      navigate(`../second`);
      // navigate(`../second`, { replace: true });
    }
    if (location.pathname === '/second') {
      navigate(`../first`);
      // navigate(`../first`, { replace: true });
    }
  }
  // let handleClick = (event: React.MouseEvent<HTMLFormElement>) => {
  //   // let params = serializeFormQuery(event.target);
  //   setSearchParams(params);
  // }
  return { handleClickNavigate };
}
function DemoRouterFirst() {
  let { handleClickNavigate } = useDemoRouterHook();
  return (
    <>
      <h2>DemoRouterFirst</h2>
      <nav>
        <Link to="/second">Second</Link>
      </nav>
      <button onClick={handleClickNavigate}>Second</button>
    </>
  );
}
function DemoRouterSecond() {
  let { handleClickNavigate } = useDemoRouterHook();
  return (
  <>
    <h2>DemoRouterSecond</h2>
    <nav>
      <Link to="/first">First</Link>
    </nav>
    <button onClick={handleClickNavigate}>First</button>
  </>
  );
}

