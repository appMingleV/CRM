import { useState } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

const AllStudentList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const students = [
    {
      name: "Aryan Singh",
      email: "aryan.singh@gmail.com",
      gender: "male",
      birthday: "2023-2027",
      fullpage: "A1",
      position: "UI/UX Designer",
    },
    {
      name: "Aryan Singh",
      email: "aryan.singh@gmail.com",
      gender: "male",
      birthday: "2023-2027",
      fullpage: "A1",
      position: "UI/UX Designer",
    },
    {
      name: "Aryan Singh",
      email: "aryan.singh@gmail.com",
      gender: "male",
      birthday: "2023-2027",
      fullpage: "A1",
      position: "UI/UX Designer",
    },
    {
      name: "Aryan Singh",
      email: "aryan.singh@gmail.com",
      gender: "male",
      birthday: "2023-2027",
      fullpage: "A1",
      position: "UI/UX Designer",
    },
  ];

  const handleCloseModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  return (
    <div>
      {/* Main Content Section */}
      <main className="space-y-4">
        {students.map((student, index) => (
          <div
            key={index}
            className="flex justify-between items-center gap-4 bg-white p-6 rounded-lg shadow"
          >
            {/* Student Info */}
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/50"
                alt="Student"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="text-lg font-bold">{student.name}</h3>
                <p className="text-sm text-gray-500">{student.email}</p>
              </div>
            </div>

            {/* Student Details */}
            <div className="">
              <div className=" font-normal text-gray-400  text-sm">Gender</div>
              <span className="font-normal text-base">{student.gender}</span>
            </div>
            <div>
              <div className="font-normal text-gray-400  text-sm">Birthday</div>
              <span className="font-normal text-base  ">
                {student.birthday}
              </span>
            </div>
            <div>
              <div className="font-normal text-gray-400  text-sm">
                Full Page
              </div>
              <span className="font-normal text-base">{student.fullpage}</span>
            </div>

            {/* Enrollment & Actions */}
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="font-normal text-gray-400  text-sm">
                  Position
                </div>
                <div className="flex  justify-center items-center">
                  <span className=" text-gray-700 text-sm font-medium px-3 py-1 rounded-lg">
                    {student.position}
                  </span>
                  <div className="border-2  border-[#7D8592] rounded-lg px-1 bg-white ml-2 cursor-pointer">
                    <p className="">middle</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-2 rounded-xl border bg-[#F4F9FD] border-gray-200">
              <PiDotsThreeVerticalBold className="text-gray-500 text-xl cursor-pointer" />
            </div>
          </div>
        ))}

        {/* Pagination */}
        <div className="flex justify-center space-x-2 mt-4">
          <span className="bg-blue-500 text-white px-3 py-1 rounded-lg">1</span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
            2
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
            3
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
            ...
          </span>
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg">
            10
          </span>
        </div>
      </main>

      {/* Modal for AddStudent */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="relative bg-white p-2 rounded-lg shadow-lg w-auto">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-1 right-2 text-gray-500 bg-gray-100 px-1 rounded-md hover:text-gray-700"
            >
              ✖
            </button>
            {/* Modal Content */}
            {/* <AddStudent /> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllStudentList;
