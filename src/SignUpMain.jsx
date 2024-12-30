import { useState } from "react";
import SignUpSidebar from "./components/SignUpSidebar.jsx";
import Step1 from "./components/SignUpSteps/Step1.jsx";
import Step2 from "./components/SignUpSteps/Step2.jsx";
import Step3 from "./components/SignUpSteps/Step3.jsx";
import Step4 from "./components/SignUpSteps/Step4.jsx";
import Step5 from "./components/SignUpSteps/Step5.jsx";

const SignUpMain = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => setCurrentStep((prev) => prev + 1);
  const previousStep = () => setCurrentStep((prev) => prev - 1);

  return (
    <div className="flex min-h-screen min-w-full bg-[#f3f8fc]">
      <SignUpSidebar
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />

      <div className="flex-1 bg-[#f3f8fc]">
        {currentStep === 1 && <Step1 onNext={nextStep} />}
        {currentStep === 2 && <Step2 onNext={nextStep} onPrev={previousStep} />}
        {currentStep === 3 && <Step3 onNext={nextStep} onPrev={previousStep} />}
        {currentStep === 4 && <Step4 onPrev={previousStep} onNext={nextStep} />}
        {currentStep === 5 && <Step5 />}
      </div>
    </div>
  );
};

export default SignUpMain;
