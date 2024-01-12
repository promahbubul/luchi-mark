import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard/Dashboard";
import Environment from "../pages/Emvironment/Environment";
import Layout from "../Layout/Layout";

const router = createBrowserRouter([
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/environment", element: <Environment /> },
  { path: "/teams", element: <App /> },
  { path: "/admn", element: <App /> },
  { path: "/", element: <Layout /> },
]);

export default router;
