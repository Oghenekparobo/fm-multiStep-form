import { FormDetails, Steps } from "./components";
import { Controls } from "./sub-components";

const App = () => {
  return (
    <div className=" relative bg-gray-400/10 relative shadow-sm flex space-x-0 flex-col h-screen md:bg-none md:space-x-20 xl:space-x-52 md:flex-row ">
      <div className="steps-container border p-0 overflow-hidden h-[35%] mx-w-xl md:max-w-md md:w-[40%] md:p-3  md:h-full  xl:w-[30%]">
        <Steps />
      </div>

      <div className="w-full form-details col-span-2 flex flex-col  justify-between md:w-[70%] md:p-10">
        <FormDetails />
        <Controls />
      </div>
    </div>
  );
};

export default App;
3;
