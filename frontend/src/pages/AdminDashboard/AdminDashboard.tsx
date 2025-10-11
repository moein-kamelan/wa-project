import React from "react";

import { Outlet } from "react-router";
import CompactNavigation from "../../components/modules/AdminDashboard/CompactNavigation/CompactNavigation";

function AdminDashboard() {
  return (
    <div className="flex h-screen overflow-hidden ">
      <CompactNavigation />
      <div className="grow max-w-[calc(100%-110px)]">
        <Outlet />
      </div>
    </div>
  );
}

export default AdminDashboard;
