import LeadCard from "../LeadsDetails/LeadCard.jsx";
const ProfileLeads = () => {
  const leads = [
    {
      count: 12,
      status: "In Progress",
      progress: "12/16 days available",
      color: "text-cyan-500 border-cyan-500",
    },
    {
      count: 6,
      status: "Fake",
      progress: "6/12 days available",
      color: "text-red-500 border-red-500",
    },
    {
      count: 42,
      status: "Unread",
      progress: "42/50 days available",
      color: "text-purple-500 border-purple-500",
    },
    {
      count: 42,
      status: "Completed",
      progress: "42/50 days available",
      color: "text-purple-500 border-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f9fd] mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
        {leads.map((lead, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl h-[190px] p-6 flex flex-col items-center text-center"
          >
            {/* Circular Progress Indicator */}

            <div
              className={`relative w-16 h-16 flex items-center justify-center rounded-full border-2 ${lead.color}`}
            >
              <span className={`text-xl font-semibold ${lead.color}`}>
                {lead.count}
              </span>
            </div>

            {/* Status */}
            <h3 className="text-lg font-medium text-gray-800 mt-4">
              {lead.status}
            </h3>

            {/* Progress */}
            <p className="text-sm text-gray-500 mt-2">{lead.progress}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 space-y-2 border">
        <LeadCard />
      </div>
    </div>
  );
};

export default ProfileLeads;

//   import React from 'react';

// const CircularProgress = ({ progress, count, variant = "stroke" }) => {
//   const radius = 30;
//   const circumference = 2 * Math.PI * radius;
//   const strokeDashoffset = circumference - (progress / 100) * circumference;

//   if (variant === "fill") {
//     // Calculate coordinates for the arc
//     const angle = (progress / 100) * 360;
//     const x = 50 + 30 * Math.cos((-90 + angle) * (Math.PI / 180));
//     const y = 50 + 30 * Math.sin((-90 + angle) * (Math.PI / 180));
//     const largeArcFlag = angle > 180 ? 1 : 0;

//     return (
//       <svg width="100" height="100" viewBox="0 0 100 100">
//         <circle
//           cx="50"
//           cy="50"
//           r="30"
//           fill="white"
//           stroke="rgb(226 232 240)"
//           strokeWidth="8"
//         />
//         <path
//           d={`M 50 20 A 30 30 0 ${largeArcFlag} 1 ${x} ${y} L 50 50 Z`}
//           fill="currentColor"
//         />
//         <text
//           x="50"
//           y="55"
//           textAnchor="middle"
//           fontSize="20"
//           fontWeight="500"
//           fill="currentColor"
//         >
//           {count}
//         </text>
//       </svg>
//     );
//   }

//   return (
//     <svg width="100" height="100" viewBox="0 0 100 100">
//       <circle
//         cx="50"
//         cy="50"
//         r={radius}
//         fill="none"
//         stroke="rgb(226 232 240)"
//         strokeWidth="8"
//       />
//       <circle
//         cx="50"
//         cy="50"
//         r={radius}
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="8"
//         strokeDasharray={circumference}
//         strokeDashoffset={strokeDashoffset}
//         transform="rotate(-90 50 50)"
//         style={{
//           transition: "stroke-dashoffset 0.5s ease"
//         }}
//       />
//       <text
//         x="50"
//         y="55"
//         textAnchor="middle"
//         fontSize="20"
//         fontWeight="500"
//         fill="currentColor"
//       >
//         {count}
//       </text>
//     </svg>
//   );
// };

// const ProfileLeads = () => {
//   const leads = [
//     {
//       count: 12,
//       status: "In Progress",
//       progress: "12/16 days available",
//       color: "text-cyan-500",
//       progressPercent: 75,
//       variant: "stroke"
//     },
//     {
//       count: 6,
//       status: "Fake",
//       progress: "6/12 days available",
//       color: "text-red-500",
//       progressPercent: 50,
//       variant: "fill"
//     },
//     {
//       count: 42,
//       status: "Unread",
//       progress: "42/50 days available",
//       color: "text-purple-500",
//       progressPercent: 84,
//       variant: "stroke"
//     },
//     {
//       count: 42,
//       status: "Completed",
//       progress: "42/50 days available",
//       color: "text-green-500",
//       progressPercent: 84,
//       variant: "fill"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-[#f4f9fd] mt-10">
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
//         {leads.map((lead, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-3xl h-[190px] p-6 flex flex-col items-center text-center shadow-sm"
//           >
//             <div className={lead.color}>
//               <CircularProgress
//                 progress={lead.progressPercent}
//                 count={lead.count}
//                 variant={lead.variant}
//               />
//             </div>

//             <h3 className="text-lg font-medium text-gray-800 mt-4">
//               {lead.status}
//             </h3>

//             <p className="text-sm text-gray-500 mt-2">
//               {lead.progress}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProfileLeads;
