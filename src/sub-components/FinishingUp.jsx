import Heading from "./utils/Heading";

const FinishingUp = () => {
  return (
    <section className="info-section py-12 px-6 md:px-0">
      <Heading
        header="Finishing up"
        paragraph="Double-check everything looks OK before comfirming."
      />

      <div className="finishing-section py-10">
        <div className="bg-blue-200/10 p-6">
          <div className="top flex justify-between mb-4">
            <div className="">
              <h6 className="capitalize text-blue-950 text-md font-bold mb-2">
                arcade (yearly)
              </h6>
              <button className="block border-b text-gray-400">Change</button>
            </div>
            <p className="text-blue-950 text-md font-bold">$90/yr</p>
          </div>

          <p className="border border-b w-full bg-black "></p>

          <div className="bottom">
            <div className="flex justify-between my-4">
              <h6 className="text-gray-400">Online service</h6>
              <p className="text-blue-800 font-semi-bold">$90/yr</p>
            </div>
            <div className="flex justify-between">
              <h6 className="text-gray-400">Larger service</h6>
              <p className="text-blue-800 font-semi-bold">$90/yr</p>
            </div>
          </div>
        </div>

        <div className="total p-6 mt-6">
          <div className="flex justify-between">
            <h6 className="text-gray-400">Total (per year)</h6>
            <p className="text-blue-900 font-bold">$120/yr</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinishingUp;
