import MyVacationList from "./MyVacationList";

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
    // {
    //   count: 42,
    //   status: "Completed",
    //   details: "42/50 days available",
    //   progress: 84, // 84% progress
    //   color: "green-500",
    // },
  ];

  return (
    <div className="min-h-screen mt-10">
      <div>
        <h2>Profile data</h2>
      </div>
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

      <div className="mt-8">
        <MyVacationList />
      </div>
    </div>
  );
};

export default ProfileVacations;
