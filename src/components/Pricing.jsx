import React, { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const pricingPlans = [
    {
      name: "Free",
      price: "$0/month",
      description: "For merchants starting a business",
      features: [
        <div><strong>5</strong> stores per account</div>,
        <div><strong>Unlimited</strong> product designs</div>,
      ],
      buttonText: "Start for free",
      popular: false,
    },
    {
      name: "Premium",
      price: isYearly ? "$299/year" : "$29/month",
      description: "For merchants with growing sales",
      features: [
        <div>Up to <strong>20% discount</strong> on all products</div>,
        <div><strong>10</strong> stores per account</div>,
        <div><strong>Unlimited</strong> product designs</div>,
        <div>Order management with <strong>Printify Connect</strong></div>,
      ],
      buttonText: "Get Premium",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom pricing",
      description: "For merchants with significant daily sales",
      features: [
        <div><strong>Unlimited</strong> stores per account</div>,
        <div><strong>Unlimited</strong> product designs</div>,
        <div><strong>Additional discounts</strong> on all products</div>,
      ],
      buttonText: "Let's talk!",
      popular: false,
    },
  ];
  
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => setIsLoginModalOpen(true);
  const closeLoginModal = () => setIsLoginModalOpen(false);

  const [isSignUpModalOpen, setIsSignUpModalOpen] = useState(false);

  const openSignUpModal = () => setIsSignUpModalOpen(true);
  const closeSignUpModal = () => setIsSignUpModalOpen(false);

  return (
    <div className="bg-gray-50 main-content">
      {/* Toggle for Monthly/Yearly */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center bg-gray-200 p-2 rounded-full">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-4 py-2 rounded-full ${!isYearly ? "bg-[#39b75d] text-white" : "text-gray-700"}`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-4 py-2 rounded-full ${isYearly ? "bg-[#39b75d] text-white" : "text-gray-700"}`}
          >
            Yearly (save 14%)
          </button>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 px-4">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-white rounded-lg shadow-lg p-6 text-center border-t-4 ${plan.popular ? "border-[#39b75d]" : "border-gray-200"}`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#6EC207] text-white text-xs font-semibold px-2 py-1 rounded-full">
                Most popular
              </div>
            )}
            <h3 className="text-lg font-bold text-gray-800">{plan.name}</h3>
            <p className="text-2xl font-semibold text-[#39b75d] my-4">
              {plan.price}
            </p>
            <p className="text-gray-500 mb-4">{plan.description}</p>
            <button
              className={`w-full py-3 rounded-md font-semibold transition ${
                plan.popular ? "bg-[#39b75d] text-white" : "border border-[#39b75d] text-[#39b75d] hover:bg-[#39b75d] hover:text-white"
              }`}
            >
              {plan.buttonText}
            </button>
            <ul className="text-gray-600 mt-6 space-y-2 text-sm">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center justify-center">
                  <span className="mr-2">&#10003;</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
