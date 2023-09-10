import { createContext, useReducer, useContext, useEffect } from "react";

const formDataCtx = createContext({});

const initialState = {
  product_info: {
    customers_name: "",
    email: "",
    phone_no: "",
  },
  plan: {
    type: "",
    duration: "",
    price: "",
  },
};

const reducerFn = (state, action) => {
  if (action.type === "FILL_DATA") {
    const { name, value } = action.payload;

    return { ...state, product_info: { ...state.product_info, [name]: value } };
  }

  if (action.type === "FILL_PLAN") {
    const { duration } = action.payload;

    const time = duration ? "monthly" : "yearly";
    return { ...state, plan: { ...state.plan, duration: time } };
  }

  if (action.type == "FILL_DETAILS") {
    const { type, price } = action.payload;

    return { ...state, plan: { ...state.plan, type: type, price: price } };
  }
  throw Error("Unknown action: " + action.type);
};

export const FormDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const fillData = (e) => {
    const name = e.target.name;
    const value = e.target.value.trim();

    dispatch({ type: "FILL_DATA", payload: { name, value } });
  };

  const fillPlan = (duration) => {
    dispatch({ type: "FILL_PLAN", payload: { duration } });
  };

  const fillPlanDetails = (details) => {
    const { type, price } = details;
    dispatch({ type: "FILL_DETAILS", payload: { type, price } });
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <formDataCtx.Provider
      value={{
        ...state,
        fillData,
        fillPlan,
        fillPlanDetails,
      }}
    >
      {children}
    </formDataCtx.Provider>
  );
};

export const useFormDataCtx = () => useContext(formDataCtx);
