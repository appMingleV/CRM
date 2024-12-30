import React, { useState } from "react";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";

const LeadStatusForm = ({ onClose }) => {
  const [leadStatus, setLeadStatus] = useState("In Review");

  return (
    <div className="relative max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <button
        onClick={onClose}
        className="absolute top-0 right-0 text-gray-500 hover:text-red-500"
      >
        ✖
      </button>

      {/* Remark Section */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-500">Remark</label>
        <div className="flex justify-between items-center text-gray-500 text-xs mb-1">
          <span>Write remark</span>
          <span>Today | 5:00 PM</span>
        </div>
        <textarea
          className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
          placeholder="Write remark"
        />
      </div>

      {/* Time Spent with Client */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-500">
          Time Spent With Client
        </label>
        <div className="relative mt-1">
          <input
            type="text"
            value="2Min"
            className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            readOnly
          />
          <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
            <i className="far fa-clock"></i>
          </span>
        </div>
      </div>

      {/* Possibilities of Conversion */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-500">
          Possibilities of Conversion
        </label>
        <div className="flex items-center gap-4 mt-2">
          {["Highest", "High", "Medium", "Low"].map((level, index) => (
            <label
              key={index}
              className="flex items-center gap-1 text-sm text-gray-600"
            >
              <input
                type="radio"
                name="conversion"
                value={level}
                className="text-green-500"
              />
              {level === "Highest" ? (
                <div className="flex items-center gap-1 text-green-400 font-bold">
                  <span>
                    <FaArrowUpLong />
                  </span>
                  <span>{level}</span>
                </div>
              ) : level === "High" ? (
                <div className="flex items-center gap-1 text-yellow-400 font-bold">
                  <span>
                    <FaArrowUpLong />
                  </span>
                  <span>{level}</span>
                </div>
              ) : level === "Medium" ? (
                <div className="flex items-center gap-1 text-orange-400 font-bold">
                  <span>
                    <FaArrowUpLong />
                  </span>
                  <span>{level}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-red-400 font-bold">
                  <span>
                    <FaArrowDownLong />
                  </span>
                  <span>{level}</span>
                </div>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Reminder Title */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-500">
          Reminder Title
        </label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Eg. Send quotation first call"
        />
      </div>

      {/* Reminder Date and Time */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label className="text-sm font-medium text-gray-500">
            Reminder Date
          </label>
          <div className="relative mt-1">
            <input
              type="date"
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
              <i className="far fa-calendar"></i>
            </span>
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">
            Reminder Time
          </label>
          <div className="relative mt-1">
            <input
              type="time"
              className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
              <i className="far fa-clock"></i>
            </span>
          </div>
        </div>
      </div>

      {/* Reminder Priority */}
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-500">
          Reminder Priority
        </label>
        <div className="flex items-center gap-4 mt-2">
          {["Highest", "High", "Medium", "Low"].map((level, index) => (
            <label
              key={index}
              className="flex items-center gap-1 text-sm text-gray-600"
            >
              <input
                type="radio"
                name="conversion"
                value={level}
                className="text-green-500"
              />
              {level === "Highest" ? (
                <div className="flex items-center gap-1 text-green-400 font-bold">
                  <span>
                    <FaArrowUpLong />
                  </span>
                  <span>{level}</span>
                </div>
              ) : level === "High" ? (
                <div className="flex items-center gap-1 text-yellow-400 font-bold">
                  <span>
                    <FaArrowUpLong />
                  </span>
                  <span>{level}</span>
                </div>
              ) : level === "Medium" ? (
                <div className="flex items-center gap-1 text-orange-400 font-bold">
                  <span>
                    <FaArrowUpLong />
                  </span>
                  <span>{level}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1 text-red-400 font-bold">
                  <span>
                    <FaArrowDownLong />
                  </span>
                  <span>{level}</span>
                </div>
              )}
            </label>
          ))}
        </div>
      </div>

      {/* Remark for Reminder */}
      <div className="mb-1">
        <label className="text-sm font-medium text-gray-500">
          Remark for Reminder
        </label>
        <textarea
          className="w-full border border-gray-300 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="3"
          placeholder="Write remark"
        />
      </div>

      {/* Lead Status */}
      <div className="flex items-center justify-between">
        <div className="relative border w-1/2 flex gap-2 items-center">
          <label className="text-sm font-medium text-gray-500">
            Leads Status
          </label>
          <select
            value={leadStatus}
            onChange={(e) => setLeadStatus(e.target.value)}
            className="w-32 border border-gray-300 rounded-md p-2 text-sm bg-[#C418E61C] text-blue-700 font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 mt-1"
          >
            <option value="">In Review</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
        <button className="bg-blue-500 text-white px-4 py-3 rounded-xl text-md font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Save Status
        </button>
      </div>
    </div>
  );
};

export default LeadStatusForm;
