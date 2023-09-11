const AddOnCard = ({ id, name, desc, price, isChecked, onCheckboxChange }) => {
  return (
    <div
      className={`add-on__card flex items-center justify-between p-4 shadow-md duration-300 ${
        isChecked
          ? "bg-blue-100/10 border-2 border-blue-500"
          : "hover:bg-blue-100/10 hover:border-2 hover:border-blue-500"
      } rounded-md`}
    >
      <div className="add-on__categories flex items-center space-x-6">
        <input
          type="checkbox"
          name={id}
          checked={isChecked}
          onChange={() => onCheckboxChange(id)}
          className="w-5 h-5 border border-gray-300/100 cursor-pointer"
        />
        <div className="desc">
          <h4 className="text-blue-950 text-xl font-bold">{name}</h4>
          <p className="text-gray-400">{desc}</p>
        </div>
      </div>
      <div className="add-on__duration text-blue-600 font-semi-bold">
        +${price}/yr
      </div>
    </div>
  );
};

export default AddOnCard;
