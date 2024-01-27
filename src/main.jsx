import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import router from "./routes/router.jsx";
import Layout from "./Layout/Layout.jsx";
import Environment from "./pages/Emvironment/Environment.jsx";
import Tasks from "./pages/Tasks/Tasks.jsx";
import Teams from "./pages/Teams/Teams.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Admin from "./pages/Admin/Admin.jsx";
import Login from "./pages/Login/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Admin />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="teams" element={<Teams />} />
        <Route path="environment" element={<Environment />} />
        <Route path="tasks" element={<Tasks />} />

        <Route path="admin" element={<Admin />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  </BrowserRouter>
);
