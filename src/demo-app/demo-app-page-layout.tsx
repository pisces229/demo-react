import { Link, Outlet, useNavigate } from "react-router-dom";
import { useCommonConstructor, useCommonRouteGuard } from "./demo-app-hook";
import { Head1, Head2, Head3 } from './demo-app-page-layout-styled';

export function DemoAppPageLayout() {
  const navigate = useNavigate();
  useCommonRouteGuard();
  useCommonConstructor(() => { });
  return (
  <>
    <Head1>DEMO APP</Head1>
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
    <Outlet />
  </>
  );
}
