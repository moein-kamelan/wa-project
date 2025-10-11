import React, { useState } from "react";
import Sidebar from "../../components/modules/Dashboard/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import MobileSidebar from "../../components/modules/Dashboard/MobileSidebar/MobileSidebar";

function Dashboard() {
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const handleOpenSidebar = () => {
    setIsOpenSidebar(true);
  };

  const handleCloseSidebar = () => {
    setIsOpenSidebar(false);
  };

  return (
    <div className="flex min-h-screen  overflow-y-auto ">
      <Sidebar />
      <MobileSidebar
        isOpenSidebar={isOpenSidebar}
        onOpenSidebar={handleOpenSidebar}
      />
      <div className="grow bg-neutral-tertiary relative overflow-hidden z-10  ">
        <img
          src="/public/images/dashboard/new-campaign/ellipse.png"
          alt="ellipse"
          className="absolute left-[-280px] top-[-140px] rotate-180 -z-10"
        />
        <img
          src="/public/images/dashboard/new-campaign/ellipse.png"
          alt="ellipse"
          className="absolute right-[-280px] bottom-[-110px]  -z-10"
        />
        <Outlet />
        <div
          className={`hidden fixed inset-0 w-full h-full bg-[#075E54]/36 border border-neutral-tertiary z-10 ${
            isOpenSidebar ? "!block lg:!hidden" : ""
          }`}
          onClick={handleCloseSidebar}
        ></div>
      </div>
    </div>
  );
}

export default Dashboard;
