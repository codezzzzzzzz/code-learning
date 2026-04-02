import { useRoutes } from "react-router-dom";
import { lazy } from "react";

// 路由懒加载
const Login = lazy(() => import("../pages/login/index.jsx"));
const Layout = lazy(() => import("../pages/layout/index.jsx"));

const ContentManage = lazy(() => import("../pages/content-manage/index.jsx"));
const DataPreview = lazy(() => import("../pages/data-preview/index.jsx"));



const routesList = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <DataPreview />,
      },
      {
        path: "/data-preview",
        element: <DataPreview />,
      },
      {
        path: "/content-manage",
        element: <ContentManage />,
      }
    ]
  }
]

function WrapperRoutes() {
  return useRoutes(routesList)
}

export default WrapperRoutes;