import { SlBell } from "react-icons/sl";
import StudentImg from "../assets/studentImg.png";
// import { IoCalendarClearOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className="p-4  bg-[#f4f9fd]">
      <div className=" flex justify-between gap-5 w-full">
        <div className="">
          <p className="text-2xl font-semibold text-blue-800 mb-2"></p>
          {/* <h1 className="text-2xl font-semibold">Choose Role</h1> */}
        </div>
        <div className="flex justify-end gap-4 h-10">
          <button className="px-3 py-2 bg-white rounded-lg text-xl font-bold">
            <SlBell />
          </button>
          <button className="flex justify-start items-center gap-2 rounded-lg px-3 py-2 bg-white">
            <img src={StudentImg} alt="" className="w-8 h-8 rounded-full" />
            <span className="text-sm font-semibold  text-blue-500">
              {"SK Gupta"}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
