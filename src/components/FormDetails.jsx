import { useMulltiFormContext } from "../context/steps-context";
import { PersonalInfo, Plan } from "../sub-components";
import AddOns from "../sub-components/AddOns";
import FinishingUp from "../sub-components/FinishingUp";
import Summary from "../sub-components/Summary";

const FormDetails = () => {
  const { currentStep } = useMulltiFormContext();

  const displayForms = (step) => {
    switch (step) {
      case 1:
        return <PersonalInfo />;

      case 2:
        return <Plan />;

      case 3:
        return <AddOns />;
      case 4:
        return <FinishingUp />;
      case 5:
        return <Summary />;

      default:
        break;
    }
  };

  return (
    <div className="absolute top-44 inset-x-10 border  rounded-md bg-white shadow-md md:relative mx-auto md:bg-transparent md:relative md:mx-0 w-[80%] md:shadow-none md:border-none md:p-0 md:top-0">
      <div className="wrapper">{displayForms(currentStep)}</div>
    </div>
  );
};

export default FormDetails;
