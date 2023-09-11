import { useMulltiFormContext } from "../context/steps-context";

const StepBar = () => {
  const { stepList, setCurrentStep } = useMulltiFormContext();

  return (
    <div className="bg-blue-700 bg-sidebar-desktop h-full  bg-no-repeat bg-right bg-left h-full flex items-start py-20 justify-center md:flex-none md:justify-between md:bg-cover md:items-start md:h-full md:py-0 md:w-full">
      <div className="flex flex-row justify-center uppercase steps pt-0 space-y-0 pl-0  md:flex-col md:pl-16 md:pt-14 md:space-y-10">
        {stepList &&
          stepList.map((step, index) => {
            // Check if it's the last step (index + 1 === stepList.length)
            const isLastStep = index + 1 === stepList.length;

            // Display the step only if it's not the last step
            if (!isLastStep) {
              return (
                <div className="steps-wrapper flex space-x-4" key={index}>
                  <div
                    className={`steps-wrapper__rounded  rounded-full py-3 px-4 cursor-pointer transition duration-300 ease-in  ${
                      step.active ? "bg-blue-200" : "border border-white"
                    }`}
                    onClick={() => setCurrentStep(index + 1)}
                  >
                    {index + 1}
                  </div>
                  <div className="steps-wrapper__details flex flex-col">
                    <span className="text-gray-200 font-light opacity-75 text-md hidden md:flex">
                      step {index + 1}
                    </span>
                    <span className="text-white tracking-wide font-bold hidden md:flex">
                      {step.desc}
                    </span>
                  </div>
                </div>
              );
            }
            return null;
          })}
      </div>
    </div>
  );
};

export default StepBar;
