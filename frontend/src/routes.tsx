import AdminDashboard from "./pages/AdminDashboard/AdminDashboard";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewCampaign from "./pages/Dashboard/NewCampaign/NewCampaign";
import UsersManagment from "./pages/AdminDashboard/UsersManagment/UsersManagment";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Campaigns from "./pages/Dashboard/Campaigns/Campaigns";
import Auth from "./pages/Auth/Auth";
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";

import Reports from "./pages/Dashboard/Reports/Reports";
const routes = createBrowserRouter([
  {path: "/" , element: <Navigate to={"/dashboard/new-campaign"} replace/>},
  {
    path: "/dashboard/*",
    element: <Dashboard />,
    children: [
      { index: true, element: <Navigate to={"new-campaign"} replace /> },
      { path: "new-campaign", element: <NewCampaign /> },
      { path: "campaigns", element: <Campaigns /> },
      {
        path: "reports",
        element: <Reports />,
      },
    ],
  },

  {
    path: "/admin-dashboard/*",
    element: <AdminDashboard />,
    children: [
      { index: true, element: <Navigate to={"user-managment"} replace /> },
      { path: "user-managment", element: <UsersManagment /> },
    ],
  },

  {
    path: "/auth/*",
    element: <Auth />,
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
    ],
  },
]);

export default routes;
