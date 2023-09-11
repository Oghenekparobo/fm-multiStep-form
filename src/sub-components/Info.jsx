import { useFormDataCtx } from "../context/formData-context";
import { useMulltiFormContext } from "../context/steps-context";
import Heading from "./utils/Heading";
import Input from "./utils/Input";

const Info = () => {
  const {
    product_info: { customers_name, email, phone_no },
    fillData,
  } = useFormDataCtx();

  const { errorState, handleKeyUp, emailMsg } = useMulltiFormContext();

  return (
    <section className="info-section py-12 px-6 md:px-0">
      <Heading
        header="Personal info"
        paragraph=" Please provide your name, email address, and phone number."
      />

      <div className="info-form">
        <Input
          text="name"
          value={customers_name}
          errorState={errorState}
          mode="name"
          i_name="customers_name"
          fillData={fillData}
          handleKeyUp={handleKeyUp}
        />

        <Input
          text="email address"
          value={email}
          errorState={errorState}
          mode="email"
          i_name="email"
          fillData={fillData}
          handleKeyUp={handleKeyUp}
          emailMsg={emailMsg}
        />

        <Input
          text="phone number"
          value={phone_no}
          errorState={errorState}
          mode="phone"
          i_name="phone_no"
          fillData={fillData}
          handleKeyUp={handleKeyUp}
        />
      </div>
    </section>
  );
};

export default Info;
