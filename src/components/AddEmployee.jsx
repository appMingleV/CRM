import React from "react";
import { RxCross2 } from "react-icons/rx";
import EmpImg from "../assets/illustration.png";
// import { MyContext } from "./MyContext/MyContext";
const AddEmployee = () => {
  // const { showEmployeeForm, setShowEmployeeForm } = useContext(MyContext);
  return (
    <div className="bg-white w-1/2 ">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-semibold  p-4">Add Employee</h1>
        <RxCross2
          className="text-3xl cursor-pointer"
          // onClick={() => setShowEmployeeForm(false)}
        />
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
          Company Email
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
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="text-lg font-semibold text-gray-500 mt-2 px-4">
            Date of Birth
          </div>
          <div className="px-4">
            <input
              type="text"
              placeholder="memberemail.com"
              className="w-full  border-2 text-lg border-b-gray-400 p-2 rounded-xl my-2"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-semibold text-gray-500 mt-2 px-4">
            Age
          </div>
          <div className="px-4">
            <input
              type="text"
              placeholder="Enter Age"
              className="w-full  border-2 text-lg border-b-gray-400 p-2 rounded-xl my-2"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="text-lg font-semibold text-gray-500 mt-2 px-4">
          Father's Name
        </div>
        <div className="px-4">
          <input
            type="text"
            placeholder="  Fasther's Name"
            className="w-full  border-2 text-lg border-b-gray-400 p-2 rounded-xl my-2"
          />
        </div>
      </div>
      <div>
        <div className="text-lg font-semibold text-gray-500 mt-2 px-4">
          Mother's Name
        </div>
        <div className="px-4">
          <input
            type="text"
            placeholder="Enter Mother's Name"
            className="w-full  border-2 text-lg border-b-gray-400 p-2 rounded-xl my-2"
          />
        </div>
      </div>
      <div>
        <div className="text-lg font-semibold text-gray-500 mt-2 px-4">
          Address 1
        </div>
        <div className="px-4">
          <input
            type="text"
            placeholder="Enter Mother's Name"
            className="w-full  border-2 text-lg border-b-gray-400 p-2 rounded-xl my-2"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <div className="text-lg font-semibold text-gray-500 mt-2 px-4">
            State
          </div>
          <div className="px-4">
            <input
              type="text"
              placeholder="State"
              className="w-full  border-2 text-lg border-b-gray-400 p-2 rounded-xl my-2"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-semibold text-gray-500 mt-2 px-4">
            City
          </div>
          <div className="px-4">
            <input
              type="text"
              placeholder="City"
              className="w-full  border-2 text-lg border-b-gray-400 p-2 rounded-xl my-2"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-lg font-semibold text-gray-500 mt-2 px-4">
            Pin Code
          </div>
          <div className="px-4">
            <input
              type="text"
              placeholder="Pin Code"
              className="w-full  border-2 text-lg border-b-gray-400 p-2 rounded-xl my-2"
            />
          </div>
        </div>
      </div>

      <div>
        <div className="text-lg font-semibold text-gray-500 mt-2 px-4">
          UPdate Profile
        </div>
        <div className="px-4">
          <input
            type="text"
            placeholder="Update Profile Picture"
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
      {/* {showEmployeeForm ? <AddEmployee /> : null} */}
    </div>
  );
};

export default AddEmployee;
