import { MdCalendarMonth } from "react-icons/md";
import { FaArrowUpLong } from "react-icons/fa6";
// import logo from "../../assets/leadimage/logoimg.png";
import image from "../../assets/leadimage/people.png";

const LeadDetailsCards = ({
  lead = {
    name: "Suresh Kumar",
    phone: "+916203689042",
    city: "Patna",
    requirement: "Private Funding 100Cr",
    date: "Sep 12, 2020",
    priority: "Medium",
    calls: 34,
    remarks: 13,
    spend: "100hr",
    meta: "Meta",
    assignees: [],
  },


}) => {
  return (
    <div className="w-full bg-white rounded-2xl p-2 shadow-sm shadow-gray-300">
      <div className="flex items-start gap-20">
        {/* Left section with profile info */}
        <div className="flex-1 border-r-2 border-gray-300">
          <div className="flex mr-[80px]">
            <span className="px-2 rounded text-sm border-[1px] border-gray-500 text-gray-600 ml-auto">
              {lead.meta}
            </span>
          </div>

          <div className="flex items-center gap-5 mb-3">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                {/* <img src={logo} alt="fff" /> */}
              </div>
            </div>
            <div>
              <div className="text-gray-500 text-sm">Name</div>
              <div className="font-semibold">{lead.name}</div>
            </div>
            <div className="ml-8">
              <div className="text-gray-500 text-sm">Phone Number</div>
              <div className="font-semibold">{lead.phone}</div>
            </div>
          </div>

          {/* Location and Requirements */}
          <div className="space-y-2 ml-14">
            <div className="flex items-center gap-10">
              <div className="flex flex-row gap-2">
                <div className="text-gray-500 text-md">City</div>
                <div className="font-medium text-md">{lead.city}</div>
              </div>
              <div className="bg-blue-100 text-blue-600 px-6 py-1 rounded-md font-medium text-sm">
                WhatsApp
              </div>
            </div>
            <div className="flex flex-row gap-3">
              <div className="text-gray-500 text-md">Requirement</div>
              <div className="font-medium text-md">{lead.requirement}</div>
            </div>
          </div>

          {/* Date */}
          <div className="flex items-center gap-2 mt-3 text-gray-500 text-sm font-medium">
            <MdCalendarMonth size={25} />
            <span>{lead.date}</span>
          </div>
        </div>

        {/* Right section with metrics */}
        <div className="min-w-[400px]">
          <div className="text-lg font-semibold">
            <span className="flex items-center justify-end text-[#FFBD21]">
              <FaArrowUpLong />
              <span className="ml-2">{lead.priority}</span>
            </span>
            Attempt
          </div>

          <div className="flex justify-between items-center mt-4">
            <div className="text-center">
              <div className="text-gray-500 text-sm">Calls</div>
              <div className="font-semibold text-lg">{lead.calls}</div>
            </div>
            <div className="text-center">
              <div className="text-gray-500 text-sm">Remark</div>
              <div className="font-semibold text-lg">{lead.remarks}</div>
            </div>
            <div className="text-center">
              <div className="text-gray-500 text-sm">Spend</div>
              <div className="font-semibold text-lg">{lead.spend}</div>
            </div>
            <div className="text-center">
              <div className="flex -space-x-2">
                {lead.assignees.slice(0, 3).map((assignee, index) => (
                  <div key={index} className="w-8 h-8 rounded-full">
                    <img
                      src={image}
                      alt={assignee.name}
                      className="w-8 h-8 rounded-full object-cover border-2 bg-[#FFFFFF]"
                    />
                  </div>
                ))}
                {lead.assignees.length > 3 && (
                  <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center text-white text-sm">
                    +2
                  </div>
                )}
              </div>
              <div className="text-gray-500 text-sm mt-1">Assignees</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadDetailsCards;
