import Heading from "./utils/Heading";

import { addOns } from "../assets/dummies/data";
import AddOnCard from "./utils/AddOnCard";
import { useEffect, useState } from "react";
import { useFormDataCtx } from "../context/formData-context";

const AddOns = () => {
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const { fillAddOns } = useFormDataCtx();

  const handleCheckboxChange = (id) => {
    setSelectedAddOns((prevSelectedAddOns) => {
      if (prevSelectedAddOns.includes(id)) {
        return prevSelectedAddOns.filter((item) => item !== id);
      } else {
        return [...prevSelectedAddOns, id];
      }
    });
  };

  useEffect(() => {
    fillAddOns(selectedAddOns);
  }, [selectedAddOns]);

  console.log(selectedAddOns);
  return (
    <section className="info-section py-12 px-6 md:px-0">
      <Heading
        header="Pick add-ons"
        paragraph="Add-ons helps enhance your gaming experience."
      />

      <div className="add-ons py-6 ">
        {addOns.map((addOn) => (
          <div className="mb-10" key={addOn.id}>
            <AddOnCard
              id={addOn.id}
              name={addOn.name}
              desc={addOn.desc}
              price={addOn.price}
              isChecked={selectedAddOns.includes(addOn.id)}
              onCheckboxChange={handleCheckboxChange}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default AddOns;
