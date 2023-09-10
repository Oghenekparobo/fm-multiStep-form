import { useState } from "react";
import { useFormDataCtx } from "../context/formData-context";
import { useEffect } from "react";

const ToggleSwitch = () => {
  const [monthly, setMonthly] = useState(true);
  const { fillPlan } = useFormDataCtx();

  const toggleSwitch = () => {
    setMonthly(!monthly);
  };

  useEffect(() => {
    fillPlan(monthly);
  }, [monthly]);

  return (
    <div className="flex justify-around w-50 bg-blue-100/10 rounded-sm capitalize p-2 max-w-sm justify-content items-center ">
      <p
        className={
          monthly
            ? "text-blue-900 font-bold transition-all duration-300"
            : "text-gray-400"
        }
      >
        monthly
      </p>
      <div className="relative inline-block w-14 bg-blue-900 h-6  rounded-full">
        <input
          type="checkbox"
          className="sr-only "
          id="toggle-switch"
          checked={monthly}
          onChange={toggleSwitch}
        />
        <label
          htmlFor="toggle-switch"
          className={`absolute top-[0.9px] left-0 w-5 h-5 bg-white rounded-full shadow-md cursor-pointer transition-transform transform ${
            monthly ? "translate-x-0" : "translate-x-8"
          } hover:opacity-70 active:scale-95`}
        >
          <span className="sr-only">Toggle Switch</span>
        </label>
      </div>
      <p
        className={
          !monthly
            ? "text-blue-900 font-bold transition-all duration-300"
            : "text-gray-400"
        }
      >
        yearly
      </p>
    </div>
  );
};

export default ToggleSwitch;
