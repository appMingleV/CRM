import { useState } from "react";

const Step3 = ({ onNext, onPrev }) => {
  const [companyName, setCompanyName] = useState("");
  const [businessDirection, setBusinessDirection] =
    useState("IT and programming");
  const [teamSize, setTeamSize] = useState("41 - 50");

  const teamSizeOptions = [
    "Only me",
    "2 - 5",
    "6 - 10",
    "11 - 20",
    "21 - 40",
    "41 - 50",
    "51 - 100",
    "101 - 500",
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between  mt-4   mr-6 border rounded-3xl bg-white">
      <div className="flex-1 flex mt-6 justify-center">
        <div className="bg-white rounded-lg p-8 w-full max-w-lg">
          <h3 className="text-center text-[#ff6503] font-semibold text-[16px]">
            STEP 3/4
          </h3>
          <h1 className="text-2xl text-center font-semibold mt-2">
            Tell about your company
          </h1>

          <form className="mt-6 space-y-6">
            {/* Your Company's Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Your Company's Name
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="Company's Name"
                className="w-full border border-gray-300 rounded-2xl p-2 text-gray-700"
              />
            </div>

            {/* Business Direction */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Business Direction
              </label>
              <select
                value={businessDirection}
                onChange={(e) => setBusinessDirection(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl p-2 text-gray-700"
              >
                <option value="IT and programming">IT and programming</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Education">Education</option>
                <option value="Finance">Finance</option>
              </select>
            </div>

            {/* How many people in your team? */}
            <div>
              <label className="block text-gray-700 font-medium mb-4">
                How many people in your team?
              </label>
              <div className="grid grid-cols-4 gap-4">
                {teamSizeOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setTeamSize(option)}
                    className={`border rounded-2xl px-4 py-2 text-sm font-medium ${
                      teamSize === option
                        ? "bg-[#ff6503] text-white border-[#ff6503]"
                        : "bg-white text-gray-700 border-gray-300"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full flex justify-between items-center bg-white border-t border-gray-300 py-4 px-8">
        <button
          type="button"
          className="flex items-center text-[#ff6503] font-medium"
          onClick={onPrev}
        >
          ← Previous
        </button>
        <button
          type="button"
          className="flex items-center bg-[#ff6503] text-white font-medium py-2 px-4 rounded-2xl"
          onClick={onNext}
        >
          Next Step →
        </button>
      </div>
    </div>
  );
};

export default Step3;
