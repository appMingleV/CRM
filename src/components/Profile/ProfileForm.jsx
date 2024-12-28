import { TbEdit } from "react-icons/tb";
// import { TiEdit } from "react-icons/ti";

import man1 from "../../assets/Profile/man1.png";

const ProfileForm = () => {
  return (
    <div className="min-h-screen rounded-b-3xl bg-white mt-10 ">
      {/* Profile Header */}
      <div className="bg-white   p-6">
        <div className="flex  justify-end">
          <button className="p-2 rounded-[14px]  bg-[#f4f9fd] hover:bg-gray-200">
            <TbEdit className="h-[24px] w-[24px]" />
          </button>
        </div>
        <div className="flex justify-between items-center">
          {/* User Information */}

          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center">
              <div className="relative ">
                {/* Outer Circle - Progress */}
                <div className="w-24 h-24 rounded-full ">
                  <svg className="w-24 h-24 transform -rotate-0">
                    {/* Background Circle */}
                    <circle
                      cx="50%"
                      cy="50%"
                      r="40%"
                      fill="transparent"
                      stroke="#E5E7EB" /* Gray color */
                      strokeWidth="10"
                    />
                    {/* Progress Circle */}
                    <circle
                      cx="50%"
                      cy="50%"
                      r="40%"
                      fill="transparent"
                      stroke="#3B82F6" /* Blue color */
                      strokeWidth="10"
                      strokeDasharray="251.2" /* Circumference = 2 * Math.PI * r */
                      strokeDashoffset="75" /* Adjust progress, smaller means more progress */
                    />
                  </svg>
                </div>

                {/* Inner Content */}

                <div className="absolute  top-0 left-0 w-24 h-24 flex items-center justify-center">
                  <img
                    src={man1} 
                    alt="User Avatar"
                    className="w-20 h-20  rounded-full"
                  />
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                Evan Yates
              </h2>
              <p className="text-gray-500">UI/UX Designer</p>
            </div>
          </div>

          
        </div>
      </div>


      <div
        className="border-[#E4E6E8] border mr-4  ml-4
"
      />

      {/* Main Information */}
      <div className="bg-white rounded-lg   mt-6  pl-8 pr-16">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Main Info</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Position */}
          <div>
            <label className="block text-sm font-medium text-[#7D8592] mb-1">
              Position
            </label>
            <input
              type="text"
              value="UI/UX Designer"
              className="w-full border border-gray-300  text-[#7D8592] rounded-[14px] p-2 bg-gray-50"
            />
          </div>
          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-[#7D8592] mb-1">
              Company
            </label>
            <input
              type="text"
              value="Cadabra"
              className="w-full border border-gray-300 text-[#7D8592] rounded-[14px]  p-2 bg-gray-50"
            />
          </div>
          {/* Company Address */}
          <div>
            <label className="block text-sm font-medium text-[#7D8592] mb-1">
              Company Address
            </label>
            <input
              type="text"
              value="NYC, New York, USA"
              className="w-full border border-gray-300 text-[#7D8592] rounded-[14px]  p-2 bg-gray-50"
            />
          </div>
          {/* Company Support Mail */}
          <div>
            <label className="block text-sm font-medium text-[#7D8592] mb-1">
              Company Support Mail
            </label>
            <input
              type="text"
              value="evanyates@gmail.com"
              className="w-full border border-gray-300 text-[#7D8592] rounded-[14px]  p-2 bg-gray-50"
            />
          </div>
          {/* Name */}
          <div className="mt-12">
            <label className="block text-sm font-medium text-[#7D8592] mb-1">
              Name
            </label>
            <input
              type="text"
              value="Evan 2256"
              className="w-full border border-gray-300 text-[#7D8592] rounded-[14px]  p-2 bg-gray-50"
            />
          </div>
          {/* Mail ID */}
          <div className="mt-12">
            <label className="block text-sm font-medium text-[#7D8592] mb-1">
              Mail ID
            </label>
            <input
              type="text"
              value="evanyates@gmail.com"
              className="w-full border border-gray-300 text-[#7D8592] rounded-[14px]  p-2 bg-gray-50"
            />
          </div>
          {/* Mobile Number */}
          <div className="mt-12">
            <label className="block text-sm font-medium text-[#7D8592] mb-1">
              Mobile Number
            </label>
            <input
              type="text"
              value="+1 675 346 23-10"
              className="w-full border border-gray-300 text-[#7D8592] rounded-[14px]  p-2 bg-gray-50"
            />
          </div>
          {/* Birthday Date */}
          <div className="mt-12">
            <label className="block text-sm font-medium text-[#7D8592] mb-1">
              Birthday Date
            </label>
            <input
              type="date"
              value="May 19, 1996"
              className="w-full border border-gray-300 text-[#7D8592] rounded-[14px]  p-2 bg-gray-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
