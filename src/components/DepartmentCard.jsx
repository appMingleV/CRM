import React, { useContext } from "react";
import UserImg from "../assets/studentImg.png";
import { MyContext } from "../context/MyContext";

const DepartmentCard = ({ name, role, user, icon }) => {
  const { userType, setUserType, navigate } = useContext(MyContext);

  console.log(user);

  const handleClick = () => {
    if (user === "student") {
      setUserType(user);
      navigate("/");
    } else if (user === "finance") {
      setUserType(user);
      navigate("/");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 bg-[#F5F9FC] rounded-lg shadow-sm ">
      <div className=" border-l-blue-500 border-b-blue-400 border-2 rounded-full">
        {/* <img
          src={UserImg}
          alt={name}
          className="mx-auto rounded-full h-14 w-14"
        /> */}
        <div className="mx-auto rounded-full text-cyan-700 h-14 w-14 flex justify-center items-center text-3xl">
          {icon}
        </div>
      </div>

      <h2 className="font-medium mt-2">{name}</h2>
      <p className="text-sm text-gray-500">{role}</p>
      <button
        onClick={handleClick}
        className="mt-2 px-4 py-1 text-sm bg-blue-500 text-white rounded "
      >
        Login
      </button>
    </div>
  );
};

export default DepartmentCard;
