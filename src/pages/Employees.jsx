import { Filter, Plus } from "lucide-react";
import { useState } from "react";
import AddEmployee from "../components/AddEmployee";
import EmployeesActivity from "../components/EmployeesActivity";
import EmployeesList from "../components/EmployeesList";

const Employees = () => {
  const [showcomponent, setshowcomponent] = useState("A");
  const [showEmployeeFrom, setShowEmployeeForm] = useState(false);

  const handleComponentA = () => {
    setshowcomponent("A");
  };
  const handleComponentB = () => {
    setshowcomponent("B");
  };

  return (
    <div>
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-semibold">Employees</h1>
          <span className="text-2xl text-gray-500">(28)</span>
        </div>
        <div className="flex  items-center gap-4">
          <div className="flex  w-[310px] h-[50px] rounded-full bg-gray-300 p-1">
            <button
              className={`px-6 w-[50%] rounded-full ${
                showcomponent === "A"
                  ? "bg-[#ff6503] text-white"
                  : "bg-gray-300 text-gray-600 hover:text-gray-800"
              }`}
              onClick={handleComponentA}
            >
              List
            </button>

            <button
              className={`px-6 py-2 w-[50%] rounded-full ${
                showcomponent === "B"
                  ? "bg-[#ff6503] text-white"
                  : "bg-gray-300 text-gray-600 hover:text-gray-800"
              }`}
              onClick={handleComponentB}
            >
              Activity
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center ">
          <div className="p-2 rounded-xl border bg-white border-gray-300">
            {/* <img src={filter} alt="" /> */}
            <Filter size={20} />
          </div>

          <button
            className="flex items-center gap-2 px-4 py-2 ml-2 bg-[#ff6503] text-white rounded-xl hover:bg-[#ff8f48]"
            onClick={() => {
              setShowEmployeeForm(true);
            }}
          >
            <Plus size={20} />
            Add Employee
          </button>
        </div>
      </div>

      {showcomponent === "A" && <EmployeesList />}
      {showcomponent === "B" && <EmployeesActivity />}
      {showEmployeeFrom ? <AddEmployee /> : null}
    </div>
  );
};

export default Employees;
