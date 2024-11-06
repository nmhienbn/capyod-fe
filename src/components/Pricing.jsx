import React from "react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Free",
      price: "$0/month",
      features: [
        "5 stores per account",
        "Unlimited product designs",
      ],
      buttonText: "Start for free",
    },
    {
      name: "Premium",
      price: "$29/month",
      features: [
        "Up to 20% discount on all products",
        "10 stores per account",
        "Unlimited product designs",
        "Order management with Printify Connect",
      ],
      buttonText: "Get Premium",
    },
    {
      name: "Enterprise",
      price: "Custom Pricing",
      features: [
        "Unlimited stores per account",
        "Unlimited product designs",
        "Additional discounts on all products",
      ],
      buttonText: "Contact Us",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Pricing Plans</h2>
        <p className="mt-4 text-gray-600">
          Choose a plan that suits your needs and enjoy our premium features.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 max-w-7xl mx-auto px-4">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg border-t-4 border-[#39b75d] p-6 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800">{plan.name}</h3>
            <p className="text-4xl font-semibold text-[#39b75d] my-4">
              {plan.price}
            </p>
            <ul className="text-gray-600 mb-6 space-y-2">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center justify-center">
                  <span className="mr-2">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>
            <button className="bg-[#39b75d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#6EC207] transition duration-300">
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
