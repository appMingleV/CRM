import { useNavigate } from "react-router-dom";

const Enterprise = () => {

  const navigator=useNavigate();


  return (
    <div className="flex justify-center  min-h-screen bg-[#f4f9fd]   mt-4">
      <div className="w-full max-w-5xl  bg-[#f4f9fd]">
        <form className="space-y-6">
          {/* Name of the Company */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="companyName">
              Name of the Company
            </label>
            <input
              type="text"
              id="companyName"
              placeholder="Enter Company Name"
              className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Name of the Promoter */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="promoterName">
              Name of the Promoter
            </label>
            <input
              type="text"
              id="promoterName"
              placeholder="Enter Name of the Promoter"
              className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="button"
              className="text-blue-500 text-sm mt-1 hover:underline"
            >
              + Add More Promoter
            </button>
          </div>

          {/* Year of the Establishment and MSME Number */}
          <div className="flex gap-4">
            <div>
              <label
                className=" text-gray-700 mb-1"
                htmlFor="yearEstablishment"
              >
                Year of the Establishment
              </label>
              <input
                type="month"
                id="yearEstablishment"
                className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              />
              <p className="text-sm text-gray-500 mt-1">Format: MM-YYYY</p>
            </div>

            <div>
              <label className=" text-gray-700 mb-1" htmlFor="msmeNumber">
                MSME Number (if registered)
              </label>
              <input
                type="text"
                id="msmeNumber"
                placeholder="Enter MSME Number"
                className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* </div> */}

            {/* Constitution and Category of the Entity */}
            {/* <div className=" "> */}
            <div>
              <label className=" text-gray-700 mb-1" htmlFor="constitution">
                Constitution
              </label>
              <select
                id="constitution"
                className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">--Select--</option>
              </select>
            </div>

            <div>
              <label className=" text-gray-700 mb-1" htmlFor="categoryEntity">
                Category of the Entity
              </label>
              <select
                id="categoryEntity"
                className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">--Select--</option>
              </select>
            </div>

            {/* </div> */}
          </div>

          {/* Business Description */}
          <div>
            <label
              className="block text-gray-700 mb-1"
              htmlFor="businessDescription"
            >
              Business Description
            </label>
            <textarea
              id="businessDescription"
              placeholder="Write business description"
              className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Address Section */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="addressEntity">
              Address of the Entity
            </label>
            <input
              type="text"
              id="addressEntity"
              placeholder="Enter Address Line 1"
              className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="city">
                City
              </label>
              <input
                type="text"
                id="city"
                placeholder="Enter city name"
                className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="landmark">
                Landmark
              </label>
              <input
                type="text"
                id="landmark"
                placeholder="Enter Landmark"
                className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="state">
                State
              </label>
              <select
                id="state"
                className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">--Select--</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="pinCode">
                PIN Code
              </label>
              <input
                type="text"
                id="pinCode"
                placeholder="Enter Pin Code"
                className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Purpose of Loan */}
          <div>
            <label className="block text-gray-700 mb-1" htmlFor="purposeLoan">
              Purpose of Loan
            </label>
            <input
              type="text"
              id="purposeLoan"
              placeholder="Enter Purpose of loan"
              className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Total Project Cost, Repayment Period, and Number of Employment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-gray-700 mb-1" htmlFor="totalCost">
                Total Project Cost (in Lacks)
              </label>
              <input
                type="number"
                id="totalCost"
                placeholder="Enter amount"
                className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                className="block text-gray-700 mb-1"
                htmlFor="repaymentPeriod"
              >
                Repayment Period (in months)
              </label>
              <select
                id="repaymentPeriod"
                className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">--Select--</option>
              </select>
            </div>
            <div>
              <label
                className="block text-gray-700 mb-1"
                htmlFor="numEmployment"
              >
                Number of Employment
              </label>
              <input
                type="number"
                id="numEmployment"
                placeholder="Enter number of employment"
                className="w-full border rounded-xl p-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-right">
            <button
            onClick={()=>{
              navigator('/project-description')
            }}
              type="submit"
              className="bg-blue-500 text-white px-6 py-2 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
            >
              Next

            </button>            
          </div>

          
        </form>
      </div>
    </div>
  );
};

export default Enterprise;
