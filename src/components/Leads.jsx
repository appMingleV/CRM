import { useState } from "react";
import { LuFilter } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import combinedshaped from "../assets/leadimage/CombinedShape.png";
import people from "../assets/leadimage/people.png";
import selected from "../assets/leadimage/selected.png";
import unselected from "../assets/leadimage/unselected.png";

import LeadsDetails from "../components/LeadsDetails/LeadsDetails";

const Leads = () => {
  const [leadsDetailsPreview, setLeadsDetailsPreview] = useState(false);
  // Step 3: Styles for Modal and Overlay
  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      // justifyContent: "start",

      alignItems: "center",
    },
    modal: {
      backgroundColor: "#fff",
      // padding: "20px",
      // marginLeft: "20px ",
      // marginTop: "1px ",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
      textAlign: "center",
      // minWidth: "300px",
      // width:"880px"
      // width:"900px"
      maxWidth: "1000px",

      maxHeight: "80vh",
      overflowY: "auto",
    },
  };

  const leadsData = [
    {
      name: "Rajkishor Rai",
      phone: "6203689042",
      email: "optimizaum@..",
      location: "Patna",
      estimate: "2d 4h",
      spentTime: "1d 2h",
      assignees: ["user1.jpg", "user2.jpg", "user3.jpg"],
      priority: "Medium",
    },
    {
      name: "Rajkishor Rai",
      phone: "6203689042",
      email: "optimizaum@..",
      location: "Patna",
      estimate: "2d 4h",
      spentTime: "1d 2h",
      assignees: ["user1.jpg", "user2.jpg", "user3.jpg"],
      priority: "Medium",
    },
    {
      name: "Rajkishor Rai",
      phone: "6203689042",
      email: "optimizaum@..",
      location: "Patna",
      estimate: "2d 4h",
      spentTime: "1d 2h",
      assignees: ["user1.jpg", "user2.jpg", "user3.jpg"],
      priority: "Medium",
    },
  ];

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
              {/* <img src={filter} alt="" /> */}
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
          {leadsData.map((lead, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-4 shadow-sm border lg:gap-3 border-gray-100 flex items-center justify-between"
            >
              {/* Name */}
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm text-gray-400">Name</p>
                <p className="font-normal text-base">{lead.name}</p>
              </div>

              {/* Phone */}
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm text-gray-400">Phone Number</p>
                <p className="font-normal text-base">{lead.phone}</p>
              </div>

              {/* Email */}
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm text-gray-400">Email</p>
                <p className="font-normal text-base">{lead.email}</p>
              </div>

              {/* Location */}
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-normal text-base">{lead.location}</p>
              </div>

              {/* Estimate */}
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm text-gray-400">Estimate</p>
                <p className="font-normal text-base">{lead.estimate}</p>
              </div>

              {/* Spent Time */}
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm text-gray-400">Spent Time</p>
                <p className="font-normal text-base">{lead.spentTime}</p>
              </div>

              {/* Assignees */}
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm text-gray-400">Assignees</p>
                <div className="flex -space-x-2">
                  {lead.assignees.map((assignee, i) => (
                    <img
                      key={i}
                      src={people}
                      alt="assignee"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-sm text-gray-600">
                    +2
                  </div>
                </div>
              </div>

              {/* Priority */}
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm text-gray-400">Priority</p>
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 text-yellow-400 rotate-90"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
                  </svg>
                  <span className="text-yellow-400 font-normal">
                    {lead.priority}
                  </span>
                </div>
              </div>

              {/* Show More */}
              <div>
                <button
                  className="bg-[#E6D9FB] text-purple-600 text-sm font-medium px-4 py-2 rounded-full flex items-center"
                  onClick={() => setLeadsDetailsPreview(!leadsDetailsPreview)}
                >
                  Show More
                  <div className="h-2 w-2 bg-purple-600 rounded-full ml-1 mt-1"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {leadsDetailsPreview && (
        <div className="flex gap-2 items-start" style={styles.overlay}>
          <div style={styles.modal}>
            <div className=" ">
              <LeadsDetails />
            </div>
          </div>

          <div className="w-[44px] h-[44px] border flex items-center justify-center bg-[red] rounded-[14px] ">
            <button className=" w-[14px] h-[14px]" onClick={setLeadsDetailsPreview()}>
              <RxCross2 />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Leads;
