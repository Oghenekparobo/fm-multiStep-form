import sumIcon from "../assets/images/icon-thank-you.svg";

const Summary = () => {
  return (
    <section className="flex flex-col items-center justify-center py-20">
      <div className="sum-icon">
        <img src={sumIcon} alt="summary-icon" />
      </div>
      <div className="sum-header">
        <h1 className="text-blue-950 font-bold text-xl lg:text-7xl">
          Thank you!
        </h1>
      </div>
      <p className="px-10 text-gray-400 max-w-sm xl:max-w-md md:px-0">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. if you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </section>
  );
};

export default Summary;
