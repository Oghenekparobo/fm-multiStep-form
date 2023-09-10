import { useEffect } from "react";
import { useMulltiFormContext } from "../context/steps-context";

const Controls = () => {
  const { stepList, currentStep, handleController, errorState } =
    useMulltiFormContext();

  useEffect(() => {}, [errorState]);

  return (
    <div className="fixed md:absolute bg-white bottom-0 mx-auto controls flex items-center justify-between py-8 px-4 w-full md:relative md:bg-transparent md:mx-0 md:pt-0 ">
      {currentStep !== 1 ? (
        <button
          className="text-gray-400 capitalize cursor hover:text-blue-950 hover:font-bold transition duration-500 ease-in-out"
          onClick={() => handleController("back")}
        >
          go back
        </button>
      ) : (
        <button></button>
      )}

      <button
        className={`text-white capitalize bg-blue-950 font-semibold py-2 px-2 rounded cursor transition duration-300 ease-in-out hover:bg-blue-900 ${
          Object.values(errorState).some((error) => error)
            ? "cursor-not-allowed opacity-75"
            : ""
        }`}
        onClick={() => handleController("front")}
        disabled={Object.values(errorState).some((error) => error)}
      >
        {currentStep === stepList.length ? "confirm" : " next step"}
      </button>
    </div>
  );
};

export default Controls;
