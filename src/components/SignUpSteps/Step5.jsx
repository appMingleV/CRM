import { useNavigate } from "react-router-dom";
import image from "../../assets/LogoIcon/donelogin.png";

const Step5 = () => {
  const naviagte = useNavigate();
  const handleNext = () => {
    naviagte("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between  mt-4   mr-6 border rounded-3xl bg-white">
      <div className="flex-1 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 w-full max-w-lg">
          <div>
            <img className="w-[500px]  h-[300]" src={image} alt="" />
          </div>

          {/* Your Company's Name */}
          <div className="text-[22px] text-center font-semibold mt-2">
            <p>You Are Successfully Registered !</p>
          </div>

          {/* Business Direction */}
          <div className="flex  items-center justify-center mt-2  ">
            <button
              className=" bg-[#ff6503] text-white font-medium py-2 px-4 rounded-2xl"
              onClick={handleNext}
            >
              Let's Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5;
