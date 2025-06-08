import { Outlet } from "react-router-dom";
import SidebarAdmin from "../pages/Dashboard/components/SidebarAdmin";
import { useState } from "react";
import { Menu } from "lucide-react";

const LayoutAdmin = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  return (
    <div className="flex h-screen">
      <div className="hidden md:block md:w-[15%] h-full fixed bg-gray-800 text-white z-40">
        <SidebarAdmin onLinkClick={() => setIsOpenSidebar(false)} />
      </div>

      {isOpenSidebar && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 md:hidden" onClick={() => setIsOpenSidebar(false)}>
          <div className="w-64 bg-white h-full" onClick={(e) => e.stopPropagation()}>
            <SidebarAdmin onLinkClick={() => setIsOpenSidebar(false)} />
          </div>
        </div>
      )}

      <div className="flex-1 md:ml-[15%] flex flex-col w-full">
        <div className="md:hidden bg-white shadow p-4 flex items-center">
          <button onClick={() => setIsOpenSidebar(true)} className="text-gray-600">
            <Menu />
          </button>
          <h1 className="ml-4 font-semibold text-lg">Admin Dashboard</h1>
        </div>

        <div className="flex-1 overflow-auto p-4 bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutAdmin;
