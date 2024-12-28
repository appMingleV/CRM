import { NavLink } from "react-router-dom";
import { Logos } from "../assets/assets";
import SupportSVG from "../assets/SupportSVG";

import { BiSolidPlaneAlt } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { FaCalendar, FaFolder } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import { RiLogoutBoxFill } from "react-icons/ri";

import { SiEnterprisedb, SiMessenger } from "react-icons/si";

const Sidebar = () => {
  return (
    <div className="max-h-[98vh] overflow-y-auto m-1 bg-[#f4f9fd] shadow-md flex flex-col justify-between rounded-2xl py-4 sticky top-2 custom-scrollbar">
      {/* Top Section */}
      <div className="my-5">
        {/* Logo */}
        <div className="flex items-center justify-start w-full h-16">
          <div className="bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center ml-6">
            <img src={Logos.Logo} alt="Logo" className="w-14 h-14" />
          </div>
        </div>

        {/* Menu Items */}
        <ul className="mt-6 space-y-4 h-[50vh] mb-5">
          <li className="w-full px-4 border-[#f4f9fd] border-r-4">
            <NavLink
              to="/dashboard"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <MdDashboard className="w-6 h-6" />
              <span className="font-medium">Dashboard</span>
            </NavLink>
          </li>
          <li className="w-full px-4 border-[#f4f9fd] border-r-4">
            <NavLink
              to="/leads"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <SiEnterprisedb className="w-6 h-6" />
              <span className="font-medium">Leads</span>
            </NavLink>
          </li>
          <li className="w-full px-4 border-[#f4f9fd] border-r-4">
            <NavLink
              to="/calendar"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <FaCalendar className="w-5 h-5" />
              <span className="font-medium">Calendar</span>
            </NavLink>
          </li>
          <li className="w-full px-4 border-[#f4f9fd] border-r-4">
            <NavLink
              to="/vacations"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <BiSolidPlaneAlt className="w-6 h-6" />
              <span className="font-medium">Vacations</span>
            </NavLink>
          </li>
          <li className="w-full px-4 border-[#f4f9fd] border-r-4">
            <NavLink
              to="/employees"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <IoPeopleSharp className="w-6 h-6" />
              <span className="font-medium">Employees</span>
            </NavLink>
          </li>
          <li className="w-full px-4 border-[#f4f9fd] border-r-4">
            <NavLink
              to="/profile"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <CgProfile className="w-6 h-6" />
              <span className="font-medium">Profile</span>
            </NavLink>
          </li>
          <li className="w-full px-4 border-[#f4f9fd] border-r-4">
            <NavLink
              to="/messenger"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <SiMessenger className="w-6 h-6" />
              <span className="font-medium">Messenger</span>
            </NavLink>
          </li>
          <li className="w-full px-4 border-[#f4f9fd] border-r-4">
            <NavLink
              to="/info-portal"
              className="flex items-center space-x-3 text-gray-500 hover:text-blue-500 cursor-pointer hover:bg-[#EAF3FE] px-2 py-3 rounded-[10px] text-base"
            >
              <FaFolder className="w-6 h-6" />
              <span className="font-medium">Info Portal</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="mt-10">
        <div className="w-full border flex justify-start">
          <SupportSVG />
        </div>
        <NavLink to="/">
          <div className="mt-6 px-4 flex items-center space-x-3 text-gray-500 hover:text-red-500 cursor-pointer text-base">
            <RiLogoutBoxFill className="w-6 h-6" />
            {/* <span>Logout</span> */}
            <span>Sign Out</span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
