import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";
import ProfileForm from "../components/Profile/ProfileForm";
import ProfileLeads from "../components/Profile/ProfileLeads";
import ProfileVacations from "../components/Profile/ProfileVacations";

const Profile = () => {
  const [changecomponent, Setchangecomponent] = useState("profile");

  const handleA = () => {
    Setchangecomponent("profile");
  };
  const handleB = () => {
    Setchangecomponent("lead");
  };
  const handleC = () => {
    Setchangecomponent("vacation");
  };

  return (
    <div className="  bg-[#f4f9fd] min-h-screen">
      {/* Navigation Bar */}
      <div className="flex items-center justify-between bg-[#f4f9fd] rounded-lg  p-4">
        <div className="text-3xl font-bold">My Profile</div>
        <div className="flex items-center bg-[#E6EDF5] w-[460px] h-[45px] rounded-[20px] p-[2px]">
          {/* Tabs */}
          <button
            className={` ${
              changecomponent === "profile"
                ? "bg-blue-500"
                : "bg-[#E6EDF5] text-black"
            } px-4 py-2 w-[150px] h-[40px]  font-medium rounded-[20px]`}
            onClick={handleA}
          >
            Profile
          </button>
          <button
            className={` ${
              changecomponent === "lead"
                ? "bg-blue-500"
                : "bg-[#E6EDF5] text-black"
            } px-4 py-2 w-[150px] h-[40px]  font-medium rounded-[20px]`}
            onClick={handleB}
          >
            Leads
          </button>
          <button
            className={` ${
              changecomponent === "vacation"
                ? "bg-blue-500"
                : "bg-[#E6EDF5] text-black"
            } px-4 py-2 w-[150px] h-[40px]  font-medium rounded-[20px]`}
            onClick={handleC}
          >
            My vacations
          </button>
        </div>
        {/* Settings Icon */}
        <div className="flex gap-2">
          <div className="p-2 rounded-xl border bg-white border-gray-200">
            <LuFilter />
          </div>

          <button className=" p-2 rounded-xl border bg-white border-gray-200 hover:bg-gray-200">
            <IoSettingsOutline />
          </button>
        </div>
      </div>

      {changecomponent === "profile" && <ProfileForm />}
      {changecomponent === "lead" && <ProfileLeads />}
      {changecomponent === "vacation" && <ProfileVacations />}
    </div>
  );
};

export default Profile;
