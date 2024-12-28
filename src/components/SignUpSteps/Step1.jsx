// import { useState } from "react";

// const Step1 = ({ onNext }) => {
//   const [smsCode, setSmsCode] = useState(["", "", "", ""]);
//   const [isPasswordVisible, setIsPasswordVisible] = useState(false);

//   const handleSmsCodeChange = (index, value) => {
//     const newCode = [...smsCode];
//     newCode[index] = value;
//     setSmsCode(newCode);
//   };

//   const togglePasswordVisibility = () => {
//     setIsPasswordVisible((prev) => !prev);
//   };

//   return (
//     <div className="h-[95vh] flex flex-col justify-center items-center bg-[#f3f8fc]">
//       <div className="w-[400px] bg-white border rounded-t-3xl shadow-lg">
//         <div className="p-6">
//           <h3 className="text-center text-blue-600 font-semibold text-[16px]">
//             STEP 1/4
//           </h3>
//           <h1 className="text-2xl text-center font-semibold mt-2">
//             Validate your phone
//           </h1>
//           <form className="mt-6">
//             {/* Mobile Number */}
//             <div>
//               <label className="block text-gray-700 font-medium">
//                 Mobile Number
//               </label>
//               <div className="flex gap-2 mt-2">
//                 <select className="border border-gray-300 rounded-xl p-2 w-20">
//                   <option value="+1">+1</option>
//                   <option value="+91">+91</option>
//                   <option value="+44">+44</option>
//                 </select>
//                 <input
//                   type="text"
//                   placeholder="345 567-23-56"
//                   className="flex-1 border border-gray-300 rounded-xl p-2"
//                 />
//               </div>
//               <p className="text-red-500 text-sm mt-1">
//                 Invalid mobile number.
//               </p>
//             </div>

//             {/* SMS Code */}
//             <div className="mt-4">
//               <label className="block text-gray-700 font-medium">
//                 Code from SMS
//               </label>
//               <div className="flex gap-2 mt-2">
//                 {smsCode.map((code, index) => (
//                   <input
//                     key={index}
//                     type="text"
//                     maxLength="1"
//                     value={code}
//                     onChange={(e) => handleSmsCodeChange(index, e.target.value)}
//                     className="border border-gray-300 rounded-xl p-2 w-12 text-center"
//                   />
//                 ))}
//               </div>
//               <p className="text-red-500 text-sm mt-1">Code is incorrect.</p>
//             </div>

//             {/* Email Address */}
//             <div className="mt-4">
//               <label className="block text-gray-700 font-medium">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 placeholder="youremail@gmail.com"
//                 className="w-full border border-gray-300 rounded-xl p-2 mt-2"
//               />
//               <p className="text-red-500 text-sm mt-1">Email is required.</p>
//             </div>

//             {/* Password */}
//             <div className="mt-4 mb-4">
//               <label className="block text-gray-700 font-medium">
//                 Create Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={isPasswordVisible ? "text" : "password"}
//                   placeholder="Password"
//                   className="w-full border border-gray-300 rounded-xl p-2 mt-2 pr-10"
//                 />
//                 <button
//                   type="button"
//                   onClick={togglePasswordVisibility}
//                   className="absolute right-3 top-4 text-gray-400 focus:outline-none"
//                 >
//                   {isPasswordVisible ? "🙈" : "👁️"}
//                 </button>
//               </div>
//               <p className="text-red-500 text-sm mt-1">
//                 Password must be at least 8 characters.
//               </p>
//             </div>
//           </form>
//         </div>

//         {/* Footer */}
//         <div className="w-full flex justify-between items-center border bg-white border-t border-gray-300 py-4 px-8 rounded-bl-3xl rounded-br-3xl">
//           <button
//             type="button"
//             className="flex items-center text-[#3F8CFF] font-medium"
//           >
//             {/* Optionally add a Back button here */}
//           </button>
//           <button
//             type="button"
//             className="flex items-center p-2 bg-[#3F8CFF] text-white font-medium py-2 px-4 rounded-2xl"
//             onClick={onNext}
//           >
//             Next Step →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Step1;

import { useState } from "react";

const Step1 = ({ onNext }) => {
  const [smsCode, setSmsCode] = useState(["", "", "", ""]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  // Alert States
  const [smsCodeError, setSmsCodeError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState(false);

  const handleSmsCodeChange = (index, value) => {
    if (/[^0-9]/.test(value)) return; // Only numbers allowed

    const newCode = [...smsCode];
    newCode[index] = value;
    setSmsCode(newCode);

    // Move to next input if it's not the last one
    if (value !== "" && index < 3) {
      const nextInput = document.getElementById(`sms-input-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(!e.target.value.includes("@")); // Basic email validation
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(e.target.value.length < 8); // Password length check
  };

  const handleMobileNumberChange = (e) => {
    setMobileNumber(e.target.value);
    setMobileNumberError(
      !/^\+?\d{1,4}?\s?\(?\d{1,4}?\)?\s?\d{1,4}?\s?\d{1,4}$/.test(
        e.target.value
      )
    ); // Basic mobile number check
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div className="relative h-[100vh] w-full flex flex-col justify-center items-center bg-[#f3f8fc]">
      <div className="h-[90vh] w-full bg-white border rounded-3xl shadow-lg">
        <div className="p-6">
          <h3 className="text-center text-blue-600 font-semibold text-[16px]">
            STEP 1/4
          </h3>
          <h1 className="text-2xl text-center font-semibold mt-2">
            Validate your phone
          </h1>
          <form className="mt-6">
            {/* Mobile Number */}
            <div>
              <label className="block text-gray-700 font-medium">
                Mobile Number
              </label>
              <div className="flex gap-2 mt-2">
                <select
                  className="border border-gray-300 rounded-xl p-2 w-20"
                  onChange={handleMobileNumberChange}
                  value={mobileNumber}
                >
                  <option value="+1">+1</option>
                  <option value="+91">+91</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="text"
                  placeholder="345 567-23-56"
                  className="flex-1 border border-gray-300 rounded-xl p-2"
                  value={mobileNumber}
                  onChange={handleMobileNumberChange}
                />
              </div>
              {mobileNumberError && (
                <p className="text-red-500 text-sm mt-1">
                  Invalid mobile number.
                </p>
              )}
            </div>

            {/* SMS Code */}
            <div className="mt-4">
              <label className="block text-gray-700 font-medium">
                Code from SMS
              </label>
              <div className="flex gap-2 mt-2">
                {smsCode.map((code, index) => (
                  <input
                    id={`sms-input-${index}`}
                    key={index}
                    type="text"
                    maxLength="1"
                    value={code}
                    onChange={(e) => handleSmsCodeChange(index, e.target.value)}
                    className="border border-gray-300 rounded-xl p-2 w-12 text-center"
                  />
                ))}
              </div>
              {smsCodeError && (
                <p className="text-red-500 text-sm mt-1">Code is incorrect.</p>
              )}
            </div>

            {/* Email Address */}
            <div className="mt-4">
              <label className="block text-gray-700 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="youremail@gmail.com"
                className="w-full border border-gray-300 rounded-xl p-2 mt-2"
                value={email}
                onChange={handleEmailChange}
              />
              {emailError && (
                <p className="text-red-500 text-sm mt-1">
                  Please enter a valid email.
                </p>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 mb-4">
              <label className="block text-gray-700 font-medium">
                Create Password
              </label>
              <div className="relative">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border border-gray-300 rounded-xl p-2 mt-2 pr-10"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-4 text-gray-400 focus:outline-none"
                >
                  {isPasswordVisible ? "🙈" : "👁️"}
                </button>
              </div>
              {passwordError && (
                <p className="text-red-500 text-sm mt-1">
                  Password must be at least 8 characters.
                </p>
              )}
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 w-full flex justify-between items-center border bg-white border-t border-gray-300 py-4 px-8 rounded-bl-3xl rounded-br-3xl">
          <button
            type="button"
            className="flex items-center text-[#3F8CFF] font-medium"
          >
            {/* Optionally add a Back button here */}
          </button>
          <button
            type="button"
            className="flex items-center p-2 bg-[#3F8CFF] text-white font-medium py-2 px-4 rounded-2xl"
            onClick={onNext}
          >
            Next Step →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
