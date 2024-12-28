
import { Calendar, Clock } from 'lucide-react';

const LeadPopupsThree = () => {
  return (
    <div className="max-w-md mx-auto bg-gray-50 p-6 rounded-xl">
      <form className="space-y-6">
        {/* Remark */}
        <div className="space-y-2">
          <label className="flex justify-between">
            <span className="text-sm">Remark</span>
            <span className="text-sm text-gray-400">Today | 5:00 PM</span>
          </label>
          <textarea
            placeholder="Write remark"
            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            rows={4}
          />
        </div>

        {/* Time Spend With Client */}
        <div className="space-y-2">
          <label className="text-sm">Time Spend With Client</label>
          <div className="relative">
            <input
              type="text"
              placeholder="2Min"
              className="w-full p-3 rounded-lg border border-gray-200 pr-10"
            />
            <Clock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Possibilities of Conversion */}
        <div className="space-y-2">
          <label className="text-sm">Possibilities of Conversion</label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="conversion"
                className="text-green-500"
              />
              <span className="text-sm flex items-center">
                <span className="text-green-500">↑</span> Highest
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="conversion"
                className="text-yellow-500"
              />
              <span className="text-sm flex items-center">
                <span className="text-yellow-500">↑</span> High
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="conversion"
                className="text-orange-500"
              />
              <span className="text-sm flex items-center">
                <span className="text-orange-500">↑</span> Medium
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="conversion" className="text-red-500" />
              <span className="text-sm flex items-center">
                <span className="text-red-500">↓</span> Low
              </span>
            </label>
          </div>
        </div>

        {/* Reminder Title */}
        <div className="space-y-2">
          <label className="text-sm">Reminder Title</label>
          <input
            type="text"
            placeholder="Eg. Send quotation first call"
            className="w-full p-3 rounded-lg border border-gray-200"
          />
        </div>

        {/* Reminder Date and Time */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm">Reminder Date</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Dec 20, 2020"
                className="w-full p-3 rounded-lg border border-gray-200 pr-10"
              />
              <Calendar className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm">Reminder Time</label>
            <div className="relative">
              <input
                type="text"
                placeholder="2:00 PM"
                className="w-full p-3 rounded-lg border border-gray-200 pr-10"
              />
              <Clock className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Reminder Priority */}
        <div className="space-y-2">
          <label className="text-sm">Reminder Priority</label>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input type="radio" name="priority" className="text-green-500" />
              <span className="text-sm flex items-center">
                <span className="text-green-500">↑</span> Highest
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="priority" className="text-yellow-500" />
              <span className="text-sm flex items-center">
                <span className="text-yellow-500">↑</span> High
              </span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="priority" className="text-red-500" />
              <span className="text-sm flex items-center">
                <span className="text-red-500">↓</span> Low
              </span>
            </label>
          </div>
        </div>

        {/* Remark for Reminder */}
        <div className="space-y-2">
          <label className="text-sm">Remark for Reminder</label>
          <textarea
            placeholder="Write remark"
            className="w-full p-3 rounded-lg border border-gray-200"
            rows={4}
          />
        </div>

        {/* Leads Status */}
        <div className="flex justify-between items-center">
          <div className="space-y-2">
            <label className="text-sm">Leads Status</label>
            <select className="p-2 rounded-lg border border-gray-200 bg-pink-50 text-pink-500">
              <option>In Review</option>
            </select>
          </div>
          <button className="px-6 py-2 bg-[#ff6503] text-white rounded-lg hover:bg-[#ff8f48] transition-colors">
            Save Status
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeadPopupsThree;