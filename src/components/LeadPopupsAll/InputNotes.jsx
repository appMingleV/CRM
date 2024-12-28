// import { Clock, Calendar, PushPin, ArrowUp, SmileIcon, ArrowUpCircle } from 'lucide-react';
import { GrAttachment } from "react-icons/gr";
import { GoClockFill } from "react-icons/go";
import { MdCalendarMonth } from "react-icons/md";
import { RiPushpin2Line } from "react-icons/ri";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaRegSmile } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { BsFillCloudUploadFill } from "react-icons/bs";


const InputNotes = () => {
  return (
    <div className=" bg-[#F4F9FD] rounded-lg p-5 space-y-4 mt-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-5">
          <div className="w-6 h-6 flex items-center justify-center">
            <div className="w-3 h-3 text-purple-500 mb-4 "><GrAttachment size={25} /></div>
          </div>
          <span className="text-lg text-gray-400">Shakti Singh</span>
        </div>
        <span className="text-gray-500">23 Dec 2024 | 5:00 PM</span>
      </div>
      {/* Description */}
      <p className="text-gray-600">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      {/* Metrics Row */}
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-gray-600">
          <GoClockFill className="w-5 h-5 text-[#6D5DD3]" />
          <span>5m</span>
          <span className="text-gray-400">spend with client</span>
        </div>
        <div className="flex items-center">
          <FaRegSmile size={30} className="w-6 h-6 text-yellow-400" />
          <FaArrowUpLong className="w-7 h-5 text-green-500" />
          <span className="text-green-500 font-medium ">Highest</span>
          <div className="group relative items-center">
            <IoIosInformationCircleOutline className='mx-2 w-4 h-4 text-[#6D5DD3]' />
            <span className="absolute left-8 -top-1 bottom-full text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              possibilities
            </span>
          </div>
        </div>
      </div>

      {/* Calendar Row */}
      <div className="flex items-center gap-1 text-gray-500">
        <MdCalendarMonth className="w-5 h-5 text-[#6D5DD3]" />
        <span>1 Jan 2024 | 9:00am</span>
        <IoIosInformationCircleOutline className=' w-4 h-4 text-[#6D5DD3]' />
        <span className="text-gray-400">next call reminder</span>
        <FaArrowUpLong className="w-4 h-4 text-yellow-400" />
        <div className="group relative items-center">
            <IoIosInformationCircleOutline className='mx-2 w-4 h-4 text-[#6D5DD3]' />
            <span className="absolute left-8 -top-1 bottom-full text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
              priority
            </span>
          </div>
      </div>

      {/* Notes Section */}
      <div className="flex items-start gap-2">
        <RiPushpin2Line className="w-10 h-10 text-[#6D5DD3]" />
        <p className="text-gray-500">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

      </div>

      {/* Status Update */}
      <div className="flex items-center gap-2">
        <BsFillCloudUploadFill className="w-5 h-5 text-[#6D5DD3]" />
        <span>Updated the status of</span>
        <span className="font-medium">Mind Map</span>
        <span>task to</span>
        <span className="text-blue-500 font-bold">In Progress</span>
      </div>
    </div>
  );
};

export default InputNotes;