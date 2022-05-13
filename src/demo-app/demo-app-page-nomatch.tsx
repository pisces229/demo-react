import { useNavigate } from "react-router-dom";
import { useCommonConstructor, useCommonRouteGuard } from "./demo-app-hook";

export function DemoAppPageNoMatch() {
  const navigate = useNavigate();
  useCommonRouteGuard();
  useCommonConstructor(() => {});
  return (
    <>
      <h2>DemoAppPageNoMatch</h2>
    </>
  );
}
