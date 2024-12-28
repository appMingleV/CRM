import { FaArrowUpLong, FaArrowDown } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

const MeetingsReminder = () => {
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
  

  return (
    <div className="max-w-sm p-4 bg-white rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Meetings & Reminder</h2>
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
              <div className={`w-1 h-[104px] rounded-lg mr-3 ${reminder.color}`}></div>
              <div>
                <h2 className="text-sm font-semibold text-gray-800">
                  {reminder.title}
                </h2>
                <p className="text-sm font-medium text-gray-500">{reminder.description}</p>
                <p className="text-sm text-gray-500 pt-5">{reminder.time}</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-10">
              {/* Dynamic Arrow */}
              <span
                className={`text-${
                  reminder.status === "up" ? "yellow" : "green"
                }-500 text-lg`}
              >
                {reminder.status === "up" ? <FaArrowUpLong /> : <FaArrowDown />}
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
  );
};

export default MeetingsReminder;
