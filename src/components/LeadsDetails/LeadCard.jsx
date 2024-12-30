import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import people from "../../assets/leadimage/people.png";
import LeadsDetails from "../../components/LeadsDetails/LeadsDetails.jsx";

const LeadCard = () => {
  const [leadsDetailsPreview, setLeadsDetailsPreview] = useState(false);
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
    <>
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
              onClick={() => {
                setLeadsDetailsPreview(true);
                console.log("Modal should show:", leadsDetailsPreview); // Check if the state changes
              }}
            >
              Show More
              <div className="h-2 w-2 bg-purple-600 rounded-full ml-1 mt-1"></div>
            </button>
          </div>
        </div>
      ))}
      {leadsDetailsPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          {/* Modal content */}
          <div className="bg-white mt-1 rounded-lg shadow-lg w-3/4 max-w-[1280px] p-6 relative h-[700px] overflow-y-auto scrollbar-none">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              onClick={() => setLeadsDetailsPreview(false)}
            >
              <RxCross2 className="w-6 h-6" />
            </button>
            <div>Test Modal Content</div> {/* Debug content */}
            <LeadsDetails />
          </div>
        </div>
      )}
    </>
  );
};

export default LeadCard;
