import { useNavigate } from "react-router-dom";
import { useCommonConstructor, useCommonRouteGuard } from "./demo-app-hook";

export function DemoAppPageHome() {
  const navigate = useNavigate();
  useCommonRouteGuard();
  useCommonConstructor(() => { });
  return (
  <>
    <h2>DemoAppPageHome</h2>
  </>
  );
}
