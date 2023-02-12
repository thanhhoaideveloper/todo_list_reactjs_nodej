import { useRoutes } from "react-router-dom";

import MainRoute from "./MainRoute";

export default function ThemeRoute() {
  return useRoutes([MainRoute]);
}
