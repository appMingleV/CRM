import { useState } from "react";

const Step4 = ({ onNext, onPrev }) => {
  const [companyName, setCompanyName] = useState("");

  return (
    <div className="min-h-screen flex flex-col justify-between  mt-4   mr-6 border rounded-3xl bg-white">
      <div className="flex-1 flex mt-10 justify-center">
        <div className="bg-white rounded-lg  w-full max-w-lg">
          <h3 className="text-center text-[#ff6503] font-semibold text-[16px]">
            STEP 4/4
          </h3>
          <h1 className="text-2xl text-center font-semibold mt-2  ">
            Invite Team Member
          </h1>

          <form className="mt-6 space-y-6">
            {/* Your Company's Name */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Member's Email
              </label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                placeholder="memberemail@email.com"
                className="w-[400px] border border-gray-300 rounded-2xl p-2 text-gray-700"
              />
            </div>

            {/* Business Direction */}
            <div>
              <p className=" text-[#ff6503] font-medium mb-2">
                <p> + Add Another Member</p>
              </p>
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

export default Step4;
