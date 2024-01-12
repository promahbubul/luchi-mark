import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/my", element: <App /> },
]);

export default router;
