import LeadDetailsCard from "./LeadDetailsCard";
import InputNotes from "./InputNotes";
import MeetingsReminder from "./MeetingsReminder";


function LeadsDetails() {
  const leadData = {
    name: "Suresh Kumar",
    phone: "+916203689042",
    city: "Patna",
    requirement: "Private Funding 100Cr",
    date: " Sep 12, 2020",
    priority: "Medium",
    calls: 34,
    remarks: 13,
    spend: "100hr",
    meta: "Meta",
    assignees: [
      { image: "path-to-image1.jpg", name: "Alice" },
      { image: "path-to-image2.jpg", name: "Bob" },
      { image: "path-to-image3.jpg", name: "Charlie" },
      { image: "path-to-image4.jpg", name: "David" },
    ],
  };

  return (
    <div className="min-h-screen overflow-y-auto ">
      <div className=" mx-auto  bg-white rounded-2xl shadow-sm p-6">
        <div className="flex flex-row items-center ml-auto gap-4 mb-4">
          <h1 className="text-xl font-semibold">Leads Details</h1>
          <div className="bg-purple-100 text-[#C418E6] px-6 py-2 rounded-lg font-medium text-sm ml-auto">
            <button>In Review</button>
          </div>
        </div>

        <LeadDetailsCard lead={leadData}
         />
        <button className="mt-4 bg-[#C418E61C]  text-[#C418E6] px-4 py-1 rounded-md font-medium text-sm">
          Input +
        </button>
        
        <div className="flex flex-row items-start justify-center gap-6 min-h-screen ">
          <div className="flex-1">
            <InputNotes />
          </div>
          
          <div className="flex">
            <MeetingsReminder />
          </div>
          
        </div>
        <button className=" bg-[#C418E61C]  text-[#C418E6] px-4 py-1 rounded-md font-medium text-sm">
          Input +
        </button>
      </div>
    </div>
  );
}

export default LeadsDetails;