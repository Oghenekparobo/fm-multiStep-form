import Heading from "./utils/Heading";
import { billings } from "../assets/dummies/data";
import BillingCard from "./utils/BillingCard";
import ToggleSwitch from "./ToggleSwitch";
import { useState } from "react";

const Plan = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  return (
    <section className="info-section py-12 px-6 md:px-0">
      <Heading
        header="select your plan"
        paragraph="you have the option of monthly or yearly billing"
      />

      {/* cards */}
      <div className="py-10 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3">
        {billings.map((billing, index) => (
          <div
            className={`mb-4 lg:mb-0 ${
              index === billings.length - 1 ? "mb-0" : ""
            }`}
            key={billing.type}
          >
            <BillingCard
              type={billing.type}
              price={billing.price}
              icon={billing.icon}
              index={index}
              selected={index === selectedCard}
              onClick={handleCardClick}
            />
          </div>
        ))}
      </div>

      {/* Other content here */}
      <div>
        <ToggleSwitch />
      </div>
    </section>
  );
};

export default Plan;
