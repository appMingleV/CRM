import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaArrowDown, FaArrowUpLong } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";
import InputNotes from "./InputNotes";
import LeadDetailsCard from "./LeadDetailsCard";
import LeadStatusForm from "./LeadStatusForm";

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

  const reminders = [
    {
      id: 1,
      title: "Presentation of the new department",
      description: "Reminder Description",
      time: "Today | 5:00 PM",
      status: "up", // up or down
      duration: "4h",
      color: "bg-blue-500", // Use full Tailwind class here
    },
    {
      id: 2,
      title: "Reminder Title",
      description: "Reminder Description",
      time: "Today | 6:00 PM",
      status: "down", // up or down
      duration: "4h",
      color: "bg-[#DE92EB]", // Use full Tailwind class here
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("In Review");
  const [isFormOpen, setIsFormOpen] = useState(false);

  const options = ["Complicated", "In Progress", "Fake", "Inprogress", "Done"];

  const handleSelect = (status) => {
    setSelectedStatus(status);
    setIsOpen(false);
  };

  return (
    <div className="max-h-screen border">
      <div className="mx-auto overflow-scroll bg-white rounded-2xl shadow-sm p-6">
        <div className="flex flex-row items-center justify-between ml-auto gap-4 mb-4">
          <h1 className="text-xl font-semibold">Leads Details</h1>
          <div className="relative w-48">
            {/* Selected Dropdown */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-left bg-pink-100 text-blue-600 py-2 px-4 font-semibold rounded-lg flex items-center justify-between"
            >
              {selectedStatus}
              <span className="ml-2 transform transition-transform duration-200">
                {isOpen ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {/* Dropdown Options */}
            {isOpen && (
              <div className="absolute bg-white shadow-md mt-1 rounded-lg border">
                {options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleSelect(option)}
                    className={`w-full text-left px-4 py-2 hover:bg-blue-100 ${
                      selectedStatus === option ? "bg-blue-100" : ""
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <LeadDetailsCard lead={leadData} />
        {/* Button to Open Form */}
        <button
          onClick={() => setIsFormOpen(true)}
          className="mt-4 bg-[#C418E61C] text-[#C418E6] px-4 py-1 rounded-md font-medium text-sm"
        >
          Input +
        </button>

        {/* Conditionally Render Form */}
        {isFormOpen && (
          <div className="absolute top-0 left-0 bg-gray-100 w-full bg-opacity-50 z-50">
            <LeadStatusForm onClose={() => setIsFormOpen(false)} />
          </div>
        )}

        <div className="flex flex-row items-start justify-center gap-6 min-h-screen ">
          <div className="flex-1">
            <InputNotes />
          </div>

          <div className="flex">
            <div className="max-w-sm p-4 bg-white rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  Meetings & Reminder
                </h2>
                <span className="flex items-center justify-center w-6 h-6 text-sm font-bold text-blue-500 border-2 border-blue-500 rounded-full">
                  {reminders.length}
                </span>
              </div>
              <div className="space-y-4">
                {reminders.map((reminder) => (
                  <div
                    key={reminder.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg gap-26"
                  >
                    <div className="flex items-start">
                      {/* Apply the color dynamically */}
                      <div
                        className={`w-1 h-[104px] rounded-lg mr-3 ${reminder.color}`}
                      ></div>
                      <div>
                        <h2 className="text-sm font-semibold text-gray-800">
                          {reminder.title}
                        </h2>
                        <p className="text-sm font-medium text-gray-500">
                          {reminder.description}
                        </p>
                        <p className="text-sm text-gray-500 pt-5">
                          {reminder.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-10">
                      {/* Dynamic Arrow */}
                      <span
                        className={`text-${
                          reminder.status === "up" ? "yellow" : "green"
                        }-500 text-lg`}
                      >
                        {reminder.status === "up" ? (
                          <FaArrowUpLong />
                        ) : (
                          <FaArrowDown />
                        )}
                      </span>
                      {/* Clock and Duration */}
                      <div className="flex items-center justify-center px-2 mt-2 py-1 text-sm font-semibold text-gray-600 bg-gray-100 rounded-md">
                        <GoClockFill className="mr-1" />
                        {reminder.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
