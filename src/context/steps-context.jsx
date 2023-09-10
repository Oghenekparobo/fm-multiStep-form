import { useContext } from "react";
import { createContext, useState, useEffect } from "react";
import { stepLists } from "../util";
import { useFormDataCtx } from "./formData-context";

const multiFormCtx = createContext({});

// eslint-disable-next-line react/prop-types
export const MultiFormProvider = ({ children }) => {
  const [stepList, setStepList] = useState([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [emailMsg, setEmailMsg] = useState("");

  const [errorState, setErrorState] = useState({
    customers_name: false,
    email: false,
    phone_no: false,
  });

  const {
    product_info: { customers_name, email, phone_no },
  } = useFormDataCtx();

  useEffect(() => {}, [customers_name, email, phone_no]);

  const handleController = (dir) => {
    let updatedStep = currentStep;

    if (customers_name === "" || email === "" || phone_no === "") {
      setErrorState((prevState) => ({
        ...prevState,
        customers_name: true,
        email: true,
        phone_no: true,
      }));
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailMsg("invalid email format");
      return;
    }

    if (isNaN(phone_no) || phone_no.length >= 12) {
      setErrorState((prevState) => ({ ...prevState, phone_no: true }));
      return;
    } else {
      setErrorState((prevState) => ({ ...prevState, phone_no: false }));
    }

    // for plans

    dir === "front" ? updatedStep++ : updatedStep--;

    updatedStep > 0 &&
      updatedStep <= stepList.length &&
      setCurrentStep(updatedStep);
  };

  const updateList = (step, lists) => {
    const steps = [...lists];

    let count = 0;

    while (count < steps.length) {
      if (count === step - 1) {
        steps[count] = {
          ...steps[count],
          completed: true,
          active: true,
        };
        count++;
      } else if (count < step - 1) {
        steps[count] = {
          ...steps[count],
          completed: true,
          active: false,
        };
        count++;
      } else {
        steps[count] = {
          ...steps[count],
          completed: false,
          active: false,
        };
        count++;
      }
    }

    return steps;
  };

  useEffect(() => {
    const newList = stepLists.map((step, index) => {
      return Object.assign(
        {},
        {
          desc: step,
          completed: false,
          active: index === 0 ? true : false,
        }
      );
    });

    const currentList = updateList(currentStep, newList);

    setStepList(currentList);
  }, [currentStep]);

  const handleKeyUp = () => {
    setErrorState((prevState) => ({
      ...prevState,
      customers_name: false,
      email: false,
      phone_no: false,
    }));

    setEmailMsg("");
  };
  return (
    <multiFormCtx.Provider
      value={{
        stepList,
        setCurrentStep,
        currentStep,
        handleController,
        errorState,
        handleKeyUp,
        emailMsg,
      }}
    >
      {children}
    </multiFormCtx.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMulltiFormContext = () => useContext(multiFormCtx);
