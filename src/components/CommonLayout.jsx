import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";

const CommonLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Section */}
      <div className="w-[14%] bg-[#f4f9fd] shadow-md">
        <div className="fixed top-0 left-0 h-full overflow-y-auto">
          <Sidebar />
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 bg-[#f4f9fd] px-4 py-2">
        <div className="flex flex-col h-full">
          {/* Header Section */}
          <div className="w-full">
            <Header />
          </div>

          {/* Outlet for nested routes */}
          <div className="flex-1 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommonLayout;
