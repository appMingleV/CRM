import people from "../assets/leadimage/people.png";
import priority from "../assets/leadimage/priority.png";

const LeadsTableList = () => {
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
    <div>
      <div className=" w-full">
        <div className=" h-[91px] flex flex-col gap-3 ">
          {leadsData.map((lead, index) => (
            <div
              key={index}
              className="  bg-white rounded-3xl p-4 shadow-sm border lg:gap-4  border-gray-100 flex items-center"
            >
              {/* Name */}
              <div className="mr-3">
                <p className="text-sm font-normal text-gray-400">Name</p>
                <p className="font-normal text-base">{lead.name}</p>
              </div>

              {/* Phone */}
              <div className="mr-3">
                <p className="text-sm font-normal text-gray-400">
                  Phone Number
                </p>
                <p className="font-normal text-base">{lead.phone}</p>
              </div>

              {/* Email */}
              <div className="mr-3">
                <p className="text-sm font-normal text-gray-400">Email</p>
                <p className="font-normal text-base">{lead.email}</p>
              </div>

              {/* Location */}
              <div className="mr-3">
                <p className="text-sm font-normal text-gray-400">Location</p>
                <p className="font-normal text-base">{lead.location}</p>
              </div>

              {/* Estimate */}
              <div className="mr-3">
                <p className="text-sm font-normal text-gray-400">Estimate</p>
                <p className="font-normal text-base">{lead.estimate}</p>
              </div>

              {/* Spent Time */}
              <div className="">
                <p className="text-sm font-normal  text-gray-400">Spent Time</p>
                <p className="font-normal text-base">{lead.spentTime}</p>
              </div>

              {/* Assignees */}
              <div className="">
                <p className="text-sm font-normal text-gray-400">Assignees</p>
                <div className="flex -space-x-2  ">
                  {lead.assignees.map((assignee, i) => (
                    <img
                      key={i}
                      src={people}
                      alt="assignee"
                      className="w-8 h-8 rounded-full border-2 border-white"
                    />
                  ))}
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-sm text-white">
                    +2
                  </div>
                </div>
              </div>

              {/* Priority */}
              <div className="mr-3">
                <p className="text-sm font-normal text-gray-400">Priority</p>
                <div className="flex items-center">
                  <img src={priority} alt="" />
                  <span className="text-yellow-400 font-bold ml-1">
                    {lead.priority}
                  </span>
                </div>
              </div>

              {/* Show More */}
              <div>
                <button className="bg-[#E6D9FB] text-[#C418E6] text-sm font-medium px-4 py-2 rounded-lg flex items-center">
                  Show More
                  <div className="h-2 w-2 bg-[#C418E6] rounded-full ml-1 mt-1"></div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadsTableList;
