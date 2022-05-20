import { Routes, Route, Outlet, Link } from 'react-router-dom';

export function DemoRouterBase() {
  return (
    <>
      <h1>DemoRouterBase</h1>
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
      <Routes>
        <Route index element={<>[index]</>} />
        <Route
          path="first"
          element={
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
          }
        >
          <Route index element={<h3>[index]</h3>} />
          <Route path="first" element={<h3>[first]</h3>} />
          <Route path="second" element={<h3>[second]</h3>} />
          <Route path="*" element={<h3>NoMatch</h3>} />
        </Route>
        <Route
          path="second"
          element={
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
                    <Link to="/second">Second</Link>
                  </li>
                  <li>
                    <Link to="/second/third">Third</Link>
                  </li>
                </ul>
              </nav>
              <Outlet />
            </>
          }
        >
          <Route index element={<h3>[index]</h3>} />
          <Route path="first" element={<h3>[first]</h3>} />
          <Route path="second" element={<h3>[second]</h3>} />
          <Route path="*" element={<h3>NoMatch</h3>} />
        </Route>
        <Route path="*" element={<h2>NoMatch</h2>} />
      </Routes>
    </>
  );
}
