import { useEffect, useState } from 'react';
import {
  Link,
  useLocation,
  useNavigationType,
  useNavigate,
  useMatch,
  Routes,
  Route,
  Outlet,
} from 'react-router-dom';

export function DemoRouterHook() {
  return (
    <>
      <h1>DemoRouterHook</h1>
      <nav>
        <ul>
          <li>
            <Link to="first" >First</Link>
          </li>
          <li>
            <Link to="second">Second</Link>
          </li>
        </ul>
      </nav>
      <h1>Outlet</h1>
      <Routes>
        <Route path="first" element={<DemoRouterFirst />} />
        <Route path="second" element={<DemoRouterSecond />} />
      </Routes>
      <Outlet />
    </>
  );
}

const DemoRouterFirst = () => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const location = useLocation();
  // const { result } = useParams();
  const match = useMatch({ path: 'first' });
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('DemoRouterFirst.MOUNT');
    console.log(navigationType);
    console.log(location);
    console.log(match);
    if (location.state) {
      setValue((location.state as { start: number }).start);
    } else {
      setValue(0);
    }
    return () => {
      console.log('DemoRouterFirst.UNMOUNT');
    }
  }, []);
  // useDemoRouterHook();
  const onClickTo = () => {
    setValue((state) => (state + 1));
    navigate(`/second`, {
      state: { start: value },
    });
  };
  const onClickBack = () => {
    navigate(-1);
  };
  return (
    <>
      <h2>DemoRouterFirst[{value}]</h2>
      <button onClick={() => setValue((state) => (state + 1))}>onClickPlus</button>
      <button onClick={onClickTo}>onClickTo</button>
      <button onClick={onClickBack}>onClickBack</button>
    </>
  );
}
const DemoRouterSecond = () => {
  const navigate = useNavigate();
  const navigationType = useNavigationType();
  const location = useLocation();
  // const { result } = useParams();
  const match = useMatch({ path: 'second' });
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log('DemoRouterSecond.MOUNT');
    console.log(navigationType);
    console.log(location);
    console.log(match);
    if (location.state) {
      setValue((location.state as { start: number }).start);
    } else {
      setValue(0);
    }
    return () => {
      console.log('DemoRouterSecond.UNMOUNT');
    }
  }, [location]);

  // useDemoRouterHook();
  const onClickTo = () => {
    setValue((state) => (state + 1));
    navigate(`/first`, {
      state: { start: value },
    });
  };
  const onClickBack = () => {
    navigate(-1);
  };
  return (
    <>
      <h2>DemoRouterSecond[{value}]</h2>
      <button onClick={() => setValue((state) => (state + 1))}>onClickPlus</button>
      <button onClick={onClickTo}>onClickTo</button>
      <button onClick={onClickBack}>onClickBack</button>
    </>
  );
}
