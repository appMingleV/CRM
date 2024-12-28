// import logo from "../assets/LogoIcon/white.png";

// const steps = [
//   { id: 1, label: "Validate your phone" },
//   { id: 2, label: "Tell about yourself" },
//   { id: 3, label: "Tell about your company" },
//   { id: 4, label: "Invite Team Members" },
// ];

// const SignUpSidebar = ({ currentStep }) => {
//   return (
//     <div className="w-[22%] h-[620px]  bg-blue-500 p-6 border rounded-3xl text-white m-4">
//       <div>
//         <img className="mb-6" src={logo} alt="Logo" />
//       </div>
//       <h2 className="text-2xl font-semibold mb-6">Get started</h2>
//       <div className="relative">
//         <ul className="space-y-6 relative z-10">
//           {steps.map((step) => (
//             <li key={step.id} className="flex items-center space-x-4">
//               {/* Step Circle */}
//               <div
//                 className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
//                   currentStep >= step.id
//                     ? "bg-white text-blue-500"
//                     : "border-white text-white"
//                 }`}
//               >
//                 {step.id}
//               </div>
//               {/* Step Label */}
//               <span
//                 className={`${
//                   currentStep === step.id
//                     ? "font-bold text-white"
//                     : "text-gray-300"
//                 }`}
//               >
//                 {step.label}
//               </span>
//             </li>
//           ))}
//         </ul>
//         {/* Vertical timeline */}
//         <div
//           className="absolute left-3 top-3 w-0.5 bg-gray-400"
//           style={{
//             height: `${Math.min(
//               ((currentStep - 1) / (steps.length - 1)) * 100,
//               100
//             )}%`,
//           }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default SignUpSidebar;
import logo from "../assets/LogoIcon/white.png";

const steps = [
  { id: 1, label: "Validate your phone" },
  { id: 2, label: "Tell about yourself" },
  { id: 3, label: "Tell about your company" },
  { id: 4, label: "Invite Team Members" },
];

const SignUpSidebar = ({ currentStep, setCurrentStep }) => {
  return (
    <div className="sm:w-1/5 h-[94vh] min-h-[50vh] bg-blue-500 p-6 border rounded-3xl text-white m-4 flex flex-col justify-center">
      <div>
        <img className="mb-6 w-20 sm:w-28" src={logo} alt="Logo" />
      </div>
      <h2 className="text-lg sm:text-2xl font-semibold mb-6">Get started</h2>
      <div className="relative">
        <ul className="space-y-6 relative z-10">
          {steps.map((step) => (
            <li
              key={step.id}
              className="flex items-center space-x-4 cursor-pointer"
              onClick={() => setCurrentStep(step.id)}
            >
              {/* Step Circle */}
              <div
                className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full border-2 transition-all duration-300 ${
                  currentStep >= step.id
                    ? "bg-white text-blue-500"
                    : "border-white text-white"
                }`}
              >
                {step.id}
              </div>
              {/* Step Label */}
              <span
                className={`text-sm sm:text-base transition-all duration-300 ${
                  currentStep === step.id
                    ? "font-bold text-white"
                    : "text-gray-300"
                }`}
              >
                {step.label}
              </span>
            </li>
          ))}
        </ul>
        {/* Vertical timeline */}
        <div
          className="absolute left-3 sm:left-4 top-3 w-0.5 bg-gray-400 transition-all duration-300"
          style={{
            height: `${Math.min(
              ((currentStep - 1) / (steps.length - 1)) * 100,
              100
            )}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default SignUpSidebar;
