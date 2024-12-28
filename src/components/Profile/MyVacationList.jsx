import React from 'react';

const MyVacationList = () => {
  const requests = [
    {
      type: 'Sick Leave',
      duration: '3 days',
      startDay: 'Sep 13, 2020',
      endDay: 'Sep 16, 2020',
      status: 'Pending',
      dotColor: 'bg-red-400'
    },
    {
      type: 'Work remotely',
      duration: '1 day',
      startDay: 'Sep 1, 2020',
      endDay: 'Sep 2, 2020',
      status: 'Approved',
      dotColor: 'bg-purple-400'
    },
    {
      type: 'Vacation',
      duration: '1 day',
      startDay: 'Sep 1, 2020',
      endDay: 'Sep 2, 2020',
      status: 'Approved',
      dotColor: 'bg-cyan-400'
    }
  ];

  return (
    <div className=" rounded-lg">
      <h1 className="text-2xl font-bold mb-6">My Requests</h1>
      <div className="space-y-4">
        {requests.map((request, index) => (
          <div key={index} className="bg-white p-6 h-[90px]  rounded-3xl ">
            <div className="flex items-center justify-between">
              <div className="space-y-1 w-full">
                <div className="flex items-center space-x-2">
                  <div className={`h-2 w-2 rounded-full ${request.dotColor}`}></div>
                  <div className="text-[#91929E]">Request Type</div>
                </div>
                <div className="font-bold text-[16px] ">{request.type}</div>
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
                <span className={`px-4 py-2 rounded-full text-sm
                  ${request.status === 'Pending' 
                    ? 'bg-[#FDC748] text-white font-bold' 
                    : 'bg-[#00D097] text-white font-bold pr-3'
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
  );
};

export default MyVacationList;