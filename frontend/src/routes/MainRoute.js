import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";

const MainRoute = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
  ],
};

export default MainRoute;
