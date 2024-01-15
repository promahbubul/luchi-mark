import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard/Dashboard";
import Environment from "../pages/Emvironment/Environment";
import Layout from "../Layout/Layout";
import Admin from "../pages/Admin/Admin";
import Teams from "../pages/Teams/Teams";
import Tasks from "../pages/Tasks/Tasks";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/environment", element: <Environment /> },
      { path: "/tasks", element: <Tasks /> },
      { path: "/teams", element: <Teams /> },
      { path: "/admin", element: <Admin /> },
    ],
  },
  { path: "/login", element: <Login /> },
]);

export default router;
