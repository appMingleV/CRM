import { useState } from "react";
import { LuFilter } from "react-icons/lu";

import combinedshaped from "../assets/leadimage/CombinedShape.png";
import selected from "../assets/leadimage/selected.png";
import unselected from "../assets/leadimage/unselected.png";
import LeadCard from "../components/LeadsDetails/LeadCard";

const Leads = () => {


  return (
    <div className="mt-10 max-w-[1280px] w-full rounded-3xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Leads Management</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-xl flex items-center">
          {/* <PlusCircle size={20} /> */}+ Add Project
        </button>
      </div>

      <div className="flex justify-end">
        <div className="flex flex-col w-[755px]">
          {/* Header Section */}
          <div className="flex items-center  justify-between mb-4">
            <h2 className="text-xl font-medium">Leads</h2>
            <div className="flex gap-3">
              <button className="p-3 w-[50px] h-[50px] rounded-xl border bg-white ">
                <img className="w-[25px] h-[25px]" src={selected} alt="" />
              </button>
              <button className="p-3 w-[50px] h-[50px] rounded-xl border bg-white ">
                <img
                  className="w-[25px] h-[25px]"
                  src={combinedshaped}
                  alt=""
                />
              </button>
              <button className="p-3 w-[50px] h-[50px] rounded-xl border bg-white ">
                <img className="w-[25px] h-[25px]" src={unselected} alt="" />
              </button>
            </div>
            <div className="p-2 w-[50px] h-[50px]  flex justify-center items-center rounded-[14px] border bg-white ">
              <LuFilter className="w-[25px] h-[25px]" />
            </div>
          </div>

          {/* New Leads Section */}
          <div
            className="flex items-center justify-center bg-[#E6EDF5]
                p-4 rounded-3xl w-full h-[40px] mb-4"
          >
            <div className="text-lg font-medium text-center">New Leads</div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="flex flex-col gap-2">
          <LeadCard />
        </div>
      </div>


    </div>
  );
};
export default Leads;
