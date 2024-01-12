import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard/Dashboard";
import Environment from "../pages/Emvironment/Environment";
import Layout from "../Layout/Layout";
import Admin from "../pages/Admin/Admin";
import Teams from "../pages/Teams/Teams";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/environment", element: <Environment /> },
      { path: "/teams", element: <Teams /> },
      { path: "/admin", element: <Admin /> },
    ],
  },
]);

export default router;
