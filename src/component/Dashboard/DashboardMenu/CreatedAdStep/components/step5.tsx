

import React from "react";
import Header from "../../../../ui/Header";
import arrow from "../assets/ArrowLeft.png";

interface Step5Props {
  handleSubmit: () => void; 
  values:any,
  handleChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  setStep: (step: number) => void;
}

const plans = [
  {
    name: "REGULAR AD",
    price: "$19.00",
    recommended: false,
  },
  {
    name: "VIP ADS",
    price: "$19.00",
    recommended: true,
  },
  {
    name: "FEATURE ADS",
    price: "$19.00",
    recommended: false,
  },
];

const Step5: React.FC<Step5Props> = ({ values,setStep, handleSubmit}) => {
  console.log(values);
  
  return (
    <div className="bg-black p-5 w-full">
      <Header
        variant={{ size: "2xl", theme: "white", weight: "normal" }}
        className="font-cormorant uppercase mb-6"
      >
        Verification
      </Header>

      {/* Plans Section */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-center gap-5 py-10">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`text-white relative bg-[#181818] rounded-lg p-5 ${
              plan.recommended ? "border-4 border-[#2196F3]" : "" // Highlight recommended plan
            }`}
          >
            {plan.recommended && (
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#2196F3] to-[#F44336] text-white font-normal mb-2 rounded-full py-2 px-5">
                Recommended
              </div>
            )}
            <h2 className="text-2xl text-center font-albert my-10 text-[#CBCCCE]">
              {plan.name}
            </h2>
            <p className="text-3xl font-semibold text-center pb-5 border-b border-b-[#DDE1E830] font-cormorant tracking-wider">
              {plan.price}{" "}
              <span className="text-sm text-[#7D8FA9] font-light font-albert">
                /month
              </span>
            </p>
            <div className="xl:p-5 p-2">
              <button
                className="mt-6 w-full py-3 hover:bg-bg_red hover:text-white text-text_red border border-[#ff0000] rounded-md font-albert"
                onClick={() => console.log(`Selected ${plan.name}`)} // Handle plan selection
              >
                Select this plan
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          className="border border-white font-semibold text-white py-3 px-8 flex gap-2 items-center"
          onClick={() => setStep(4)} 
        >
          <img src={arrow} alt="arrow" />
          Back
        </button>
        <button
          type="button"
          className="border border-white font-semibold text-white py-3 px-8"
          onClick={handleSubmit} 
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Step5;
