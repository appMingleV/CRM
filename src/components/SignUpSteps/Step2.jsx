import { useState } from "react";

const Step2 = ({ onNext, onPrev }) => {
  const [servicePurpose, setServicePurpose] = useState("Work");
  const [description, setDescription] = useState("Business Owner");
  const [isYes, setIsYes] = useState(true);
  return (
    <div className="min-h-screen flex flex-col justify-between items-center mt-4   mr-6 border rounded-3xl bg-white">
      <div className="flex-1 flex mt-6">
        <div className="bg-white  rounded-lg p-8 w-full max-w-lg">
          <h3 className="text-center text-blue-600 font-semibold  text-[16px]">
            STEP 2/4
          </h3>
          <h1 className="text-2xl text-center font-semibold mt-2">
            Tell about yourself
          </h1>

          <form className="mt-6 space-y-6 w-[400px]">
            {/* Why will you use the service? */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Why will you use the service?
              </label>
              <select
                value={servicePurpose}
                onChange={(e) => setServicePurpose(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl p-2 text-gray-700"
              >
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* What describes you best? */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                What describes you best?
              </label>
              <select
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-2xl p-2 text-gray-700"
              >
                <option value="Business Owner">Business Owner</option>
                <option value="Employee">Employee</option>
                <option value="Student">Student</option>
              </select>
            </div>

            {/* Yes or No Question */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                What describes you best?
              </label>
              <div className="flex items-center gap-6">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="yesOrNo"
                    checked={isYes}
                    onChange={() => setIsYes(true)}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="yesOrNo"
                    checked={!isYes}
                    onChange={() => setIsYes(false)}
                    className="form-radio text-blue-600"
                  />
                  <span className="ml-2 text-gray-700">No</span>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="w-full flex justify-between items-center    border  bg-white border-t border-gray-300 py-4 px-8  rounded-bl-3xl   rounded-br-3xl">
        <button
          type="button"
          className="flex items-center text-[#3F8CFF] font-medium"
          onClick={onPrev}
        >
          ← Previous
        </button>
        <button
          type="button"
          className="flex items-center  p-2  bg-[#3F8CFF] text-white font-medium py-2 px-4 rounded-2xl"
          onClick={onNext}
        >
          Next Step →
        </button>
      </div>
    </div>
  );
};

export default Step2;
