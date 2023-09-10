const Input = ({
  text,
  value,
  errorState,
  mode,
  i_name,
  fillData,
  handleKeyUp,
  emailMsg,
}) => {
  let errorMessage = "";

  let placeholder = "";

  if (mode === "name") {
    errorMessage = errorState.customers_name ? "This field is required" : "";
    placeholder = "e.g. Stephen king";
  } else if (mode === "email") {
    errorMessage = errorState.email ? "This field is required" : "";
    placeholder = "e.g StephenKing@lorem.com";
  } else if (mode === "phone") {
    errorMessage = errorState.phone_no ? "This field is required" : "";
    placeholder = "e.g. +1 234 567 890";
  }

  return (
    <div className="info-form__input flex flex-col pt-9">
      <label htmlFor="customers_name" className="capitalize font-semibold py-1">
        {text}
      </label>
      <div className="error-msg text-end normal-case text-red-500 py-1">
        {errorMessage} {emailMsg}
      </div>
      <input
        type={mode === "email" ? "email" : "text"}
        name={i_name}
        value={value}
        placeholder={placeholder}
        className={`border appearance-none outline-none input py-2 px-2 rounded-md ${
          errorState.customers_name || errorState.email || errorState.phone_no
            ? "border-red-500"
            : "border-gray-400"
        }`}
        onChange={fillData}
        onKeyUp={handleKeyUp}
      />
    </div>
  );
};

export default Input;
