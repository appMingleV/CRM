const ProfileVacations = () => {
  const vacations = [
    {
      count: 12,
      status: "Vacation",
      details: "12/16 days available",
      progress: 70, // 70% progress
      color: "blue-500",
    },
    {
      count: 6,
      status: "Sick Leave ",
      details: "6/12 days available",
      progress: 50, // 50% progress
      color: "red-500",
    },
    {
      count: 42,
      status: "Work Remotely",
      details: "42/50 days available",
      progress: 84, // 84% progress
      color: "purple-500",
    },
  ];

  const requests = [
    {
      type: "Sick Leave",
      duration: "3 days",
      startDay: "Sep 13, 2020",
      endDay: "Sep 16, 2020",
      status: "Pending",
      dotColor: "bg-red-400",
    },
    {
      type: "Work remotely",
      duration: "1 day",
      startDay: "Sep 1, 2020",
      endDay: "Sep 2, 2020",
      status: "Approved",
      dotColor: "bg-purple-400",
    },
    {
      type: "Vacation",
      duration: "1 day",
      startDay: "Sep 1, 2020",
      endDay: "Sep 2, 2020",
      status: "Approved",
      dotColor: "bg-cyan-400",
    },
  ];

  return (
    <div className="flex min-h-screen mt-10 border">
      {/* left section  */}
      <div className="w-1/4">
        <h2>Profile data</h2>
      </div>
      {/* right section  */}
      <div className="w-3/4">
        {/* progress bars  */}
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6">
          {vacations.map((vacation, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl h-[190px] shadow-md p-6 flex flex-col items-center text-center"
            >
              {/* Circular Progress */}
              <div className="relative">
                <div className="w-20 h-20">
                  <svg className="w-full h-full transform -rotate-90">
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
                      stroke={`var(--tw-color-${vacation.color})`}
                      strokeWidth="10"
                      strokeDasharray="251.2" /* Circumference = 2 * Math.PI * r */
                      strokeDashoffset={`${
                        251.2 * (1 - vacation.progress / 100)
                      }`} /* Dynamic Progress */
                    />
                  </svg>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className={`text-xl font-semibold text-${vacation.color}`}
                  >
                    {vacation.count}
                  </span>
                </div>
              </div>

              {/* Status */}
              <h3 className="text-lg font-medium text-gray-800 mt-4">
                {vacation.status}
              </h3>

              {/* Details */}
              <p className="text-sm text-gray-500 mt-2">{vacation.details}</p>
            </div>
          ))}
        </div>
        {/* My Requests */}
        <div>
          <div className=" rounded-lg">
            <h1 className="text-2xl font-bold mb-6">My Requests</h1>
            <div className="space-y-4">
              {requests.map((request, index) => (
                <div
                  key={index}
                  className="bg-white p-6 h-[90px]  rounded-3xl "
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-1 w-full">
                      <div className="flex items-center space-x-2">
                        <div
                          className={`h-2 w-2 rounded-full ${request.dotColor}`}
                        ></div>
                        <div className="text-[#91929E]">Request Type</div>
                      </div>
                      <div className="font-bold text-[16px] ">
                        {request.type}
                      </div>
                    </div>

                    <div className="space-y-1 w-full">
                      <div className="text-[#91929E]">Duration</div>
                      <div className="font-bold">{request.duration}</div>
                    </div>

                    <div className="space-y-1 w-full">
                      <div className="text-[#91929E]">Start Day</div>
                      <div className="font-bold">{request.startDay}</div>
                    </div>

                    <div className="space-y-1 w-full">
                      <div className="text-[#91929E]">End Day</div>
                      <div className="font-bold">{request.endDay}</div>
                    </div>

                    <div className="flex items-center w-[75px] h-[30px] rounded-[10px]">
                      <span
                        className={`px-4 py-2 rounded-full text-sm
                  ${
                    request.status === "Pending"
                      ? "bg-[#FDC748] text-white font-bold"
                      : "bg-[#00D097] text-white font-bold pr-3"
                  }`}
                      >
                        {request.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileVacations;
