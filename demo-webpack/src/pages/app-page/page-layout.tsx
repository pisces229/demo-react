import produce from 'immer';
import { useState } from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';
import { usePageLayoutStore } from '@/stores/app-page/page-layout-store';

const Index = () => {
  const [count, setCount] = useState(0);
  // work
  const [message] = usePageLayoutStore((state) => [state.message]);
  // not work
  // const message = usePageLayoutStore.getState().message;
  return (
    <>
      <h3>Page Layout</h3>
      <p>message:[{message}]</p>
      <p>[{count}]</p>
      <button onClick={() => setCount(produce((draft) => ++draft))}>
        Plus
      </button>
      <nav>
        <ul>
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
      <hr></hr>
      <Outlet />
    </>
  );
};
export default Index;
