import check from "../assets/check.png";

const plans = [
  {
    name: "REGULAR AD",
    price: "$19.00",
    features: [
      "8 Photos",
      "Custom domain",
      "Available",
      "1GB storage",
      "1 domain email",
      "Support 24/7",
    ],
    recommended: false,
  },
  {
    name: "VIP ADS",
    price: "$19.00",
    features: [
      "1 domain",
      "Custom domain",
      "Unlimited subdomains",
      "20GB storage",
      "20 domain emails",
      "Support 24/7",
    ],
    recommended: true,
  },
  {
    name: "FEATURE ADS",
    price: "$19.00",
    features: [
      "Unlimited domains",
      "Custom domains",
      "Unlimited subdomains",
      "> 20GB storage",
      "Unlimited domain emails",
      "Support 24/7",
    ],
    recommended: false,
  },
];

const Pricing = () => {
  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 grid-wrap justify-center 2xl:gap-24 xl:gap-16 gap-5 py-10">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={` text-white relative bg-black rounded-lg ${
            plan.recommended ? "" : ""
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
            <ul>
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex xl:gap-5 gap-2 line-clamp-1 items-center mb-8"
                >
                  <img src={check} alt="check" /> {feature}
                </li>
              ))}
            </ul>
            <button className="mt-6 w-full py-3 hover:bg-bg_red hover:text-white text-text_red border border-[#ff0000] rounded-md font-albert">
              Select this plan
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Pricing;
