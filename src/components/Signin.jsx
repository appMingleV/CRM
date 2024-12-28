import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Illustration from "../assets/LogoIcon/Illustration.png";
import SigninLogo from "../assets/LogoIcon/white.png";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setAlertMessage("Please enter your email address.");
      return;
    }
    if (!password) {
      setAlertMessage("Please enter your password.");
      return;
    }
    setAlertMessage("");
    // Add further logic for form submission
    console.log("Form submitted:", { email, password });
  };

  const navigate = useNavigate();
  const handleMove = () => {
    navigate("/signup");
  };

  return (
    <div className="flex items-center justify-center h-screen  bg-[#f3f8fc]  ">
      {/* Left Panel */}

      <div className="w-1/3 relative rounded-l-3xl border ml-8  h-[550px]  bg-blue-500 flex flex-col justify-center items-center text-white ">
        <div className=" absolute left-[74px] top-[40px] flex flex-col   ">
          <div className="flex gap-2">
            <img src={SigninLogo} alt="" />

            <h1 className="text-xl font-semibold">Wookroom</h1>
          </div>

          <div>
            <p className="text-xl font-semibold mb-2">Your place to work</p>
            <p className="text-xl font-semibold mb-8">Plan. Create. Control.</p>
          </div>
        </div>

        <div className="mt-[140px] absolute left-[44px] top-[40px] ">
          {/* Add the image or SVG illustration */}
          <img
            src={Illustration} // Replace with your actual illustration URL
            alt="Illustration"
            className="w-[400px] h-[280px] object-cover"
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="w-1/3 rounded-r-3xl h-[550px] mr-8 bg-white flex flex-col justify-center items-center">
        <div className="w-3/4 max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Sign In to Wookroom
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="youremail@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {alertMessage.includes("email") && (
                <p className="text-red-500 text-sm mt-2">{alertMessage}</p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
              {alertMessage.includes("password") && (
                <p className="text-red-500 text-sm mt-2">{alertMessage}</p>
              )}
            </div>
            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="form-checkbox text-blue-500 border-gray-300"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot Password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
            >
              Sign In →
            </button>
          </form>
          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={handleMove}
            >
              Sign Up
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
