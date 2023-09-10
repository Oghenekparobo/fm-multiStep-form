import { useFormDataCtx } from "../../context/formData-context";

const BillingCard = ({ type, price, icon, index, selected, onClick }) => {
  const { fillPlanDetails } = useFormDataCtx();

  const handleClick = () => {
    onClick(index);
    const details = { type, price };
    fillPlanDetails(details);
  };

  return (
    <div
      className={`card bg-${
        selected ? "blue-100/10 border-2 border-blue-400" : "white"
      } shadow-md cursor-pointer flex flex-row items-center space-x-4 ${
        selected
          ? "border-blue-500"
          : "hover:border-2 hover:border-blue-500 hover:bg-blue-100/10"
      } duration-300 w-full h-full p-5 rounded-md md:space-x-0 md:p-4 md:items-start md:justify-between lg:flex-col lg:w-44 lg:h-44 lg:w-44 lg:h-44`}
      onClick={handleClick}
    >
      <img src={icon} className="w-10 h-10" alt="billing-logo" />

      <div>
        <p className="text-blue-900 font-bold capitalize">{type}</p>
        <p className="text-gray-400 pt-2">${price}/mo</p>
      </div>
    </div>
  );
};

export default BillingCard;
