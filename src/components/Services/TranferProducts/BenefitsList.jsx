// BenefitsList.js
import React from 'react';
import './BenefitsList.css';
import WhyUs from '../../../assets/services/Transfer-Products-Why-Capyod.jpg'

const benefits = [
  { icon: "💲", title: "Price", description: "Capyod is proud to have some of the lowest prices in the industry – we check them regularly – allowing you to make a higher margin on every sale." },
  { icon: "📦", title: "Selection", description: "With 850+ products in the Capyod catalog, you’re sure to find bestsellers, whatever your audience." },
  { icon: "🎓", title: "Learning resources", description: "Our Help Center, Blog, and YouTube channel are crammed full of the info you need to succeed." },
  { icon: "✔️", title: "Quality", description: "Our Print Providers have to comply with our extensive quality standards." },
  { icon: "🏆", title: "Capyod premium", description: "Capyod is always free to use, but upgrade to the Capyod Premium plan and you’ll get a 20% discount on all products." },
  { icon: "👍", title: "Easy to use", description: "Capyod’s simple software makes it simple to add your designs to beautiful products in minutes." },
  { icon: "⚡", title: "Speed", description: "With Capyod order routing enabled, your customer orders go to the nearest print provider – shortening both production and delivery times while reducing shipping costs." },
  { icon: "📞", title: "24/7 support", description: "Whatever concerns you may have, our merchant support team is here to help. Providing guidance, assistance, advice, and support via chat and email 24/7." },
  { icon: "🚛", title: "Bulk order discounts", description: "Order in bulk and get up to a 30% discount on shipping. A great option for brick-and-mortar stores, events, and other occasions." }
];

const BenefitsList = () => {
  return (
    <div className="benefits-list-container">
      <div className="benefits-description">
        <h2 className="benefits-title">Why switch to Capyod?</h2>
        <p className="benefits-subtitle">
          Looking for sales margins, a vast selection of products, worldwide fulfillment locations, and the fastest delivery times around? Check out Capyod.
        </p>
        <img src={WhyUs} alt="Why Us" />
      </div>
      <div className="benefits-list">
        {benefits.map((benefit, index) => (
          <div key={index} className="benefit">
            <div className="icon">{benefit.icon}</div>
            <div>
              <h4>{benefit.title}</h4>
              <p>{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitsList;
