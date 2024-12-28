import React from "react";
import EmpImg from "../assets/illustration.png";
import { RxCross2 } from "react-icons/rx";
const AddEmployee = () => {
  return (
    <div className="bg-white w-1/2 ">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold  p-4">Add Employee</h1>
        <RxCross2 className="text-3xl"/>
      </div>
      <div className="flex justify-center items-center">
        <img src={EmpImg} alt="" className="w-full px-4" />
      </div>
      <div>
        <div className="text-lg font-semibold text-gray-500 mt-5 px-4">
          Employee Name
        </div>
        <div className="px-4">
          <input
            type="text"
            placeholder="memberemail.com"
            className="w-full  border-2 text-lg border-b-gray-400 p-2 rounded-xl my-2"
          />
        </div>
      </div>
      <div>
        <div className="text-lg font-semibold text-gray-500 mt-2 px-4">
          Position
        </div>
        <div className="px-4">
          <input
            type="text"
            placeholder="memberemail.com"
            className="w-full  border-2 text-lg border-b-gray-400 p-2 rounded-xl my-2"
          />
        </div>
      </div>
      <div>
        <div className="text-lg font-semibold text-gray-500 mt-2 px-4">
          Company Name
        </div>
        <div className="px-4">
          <input
            type="text"
            placeholder="memberemail.com"
            className="w-full  border-2 text-lg border-b-gray-400 p-2 rounded-xl my-2"
          />
        </div>
      </div>
      <div>
        <div className="text-lg font-semibold text-gray-500 mt-2 px-4">
          Contact Number
        </div>
        <div className="px-4">
          <input
            type="text"
            placeholder="memberemail.com"
            className="w-full  border-2 text-lg border-b-gray-400 p-2 rounded-xl my-2"
          />
        </div>
      </div>
      <div>
        <div className="text-lg font-semibold text-gray-500 mt-2  px-4">
          Password for login
        </div>
        <div className="px-4">
          <input
            type="text"
            placeholder="memberemail.com"
            className="w-full  border-2 text-lg border-b-gray-400 p-2 rounded-xl my-2"
          />
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;
