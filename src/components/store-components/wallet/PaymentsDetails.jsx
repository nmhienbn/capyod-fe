import React, {useState} from "react";
import "./PaymentsDetails.css";
import GooglePay from "../../../assets/store/payment/google_pay.png";
import Paypal from "../../../assets/store/payment/paypal.png";
import Payoneer from "../../../assets/store/payment/payoneer.png";
import PaymentsHeader from "./PaymentsHeader";

const PaymentsDetails = () => {
  const [activeTab, setActiveTab] = useState("details");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    switch (tab) {
      case "details":
        window.location.href = "/store/payment/details";
        break;
      case "transactions":
        window.location.href = "/store/payment/transactions";
        break;
      case "withdrawals":
        window.location.href = "/store/payment/withdrawals";
        break;
      default:
        window.location.href = "/store/payment/details";
        break;
    }
  }
  return (
    <div className="payments-page">
      
      {/* <PaymentsHeader /> */}

      <div className="payment-details-page">
        <section className="balance-section">
          <h6 className="section-title">Capyod Balance</h6>
          <ul className="balance-benefits">
            <li>✓ No-hassle way to easily cover order and production costs</li>
            <li>
              ✓ Faster order processing without the need for card payments
            </li>
            <li>✓ Avoid extra transaction and conversion fees</li>
          </ul>
          <div className="balance-detail">
            <div className="balance-info">
              <div className="balance-amount">
                <label>Current balance</label>
                <p>USD 0.00</p>
              </div>
              <div><strong>Pay with:</strong></div>
              <div className="balance-payment-methods">
                <button className="payment-method">
                  <div>
                    <img src={GooglePay} alt="Google Pay" ></img>
                  </div>
                </button>
                <button className="payment-method">
                  <div>
                    <img src={Paypal} alt="Paypal"></img>
                  </div>
                </button>
                <button className="payment-method">
                  <div>
                    <img src={Payoneer} alt="Payoneer" ></img>
                  </div>
                </button>
              </div>
            </div>
            <div className="balance-promo">
              <div className="promo-logo">C</div>
              <h2>Capyod Balance</h2>
              <small>Trusted by 25K+ merchants</small>
            </div>
          </div>
        </section>

        <section className="payment-card-section">
          <h5 className="section-title">Payment card</h5>
          <p>
            Add a credit/debit card for use when there are not enough funds in
            your Printify balance.
          </p>
          <button className="add-card-btn">+ Add credit / debit card</button>
        </section>

        <section className="billing-currency-section">
          <h5 className="section-title">Billing currency</h5>
          <p>The currency you wish to use for billing and invoicing.</p>
          <div className="currency-info">
            <span>USD</span>
            <button className="change-btn">Change</button>
          </div>
        </section>

        <section className="premium-section">
          <h5 className="section-title">Printify Premium</h5>
          <p>
            Earn more with Printify Premium. Subsrcibe today to get up to 20%
            discount on all products.
          </p>
          <button className="subsrcibe-btn">Subsrcibe</button>
        </section>

        <section className="coupons-section">
          <h5 className="section-title">Coupons</h5>
          <p>Add and store your coupon codes here.</p>
          <div className="coupon-form">
            <input type="text" placeholder="Enter coupon code" />
            <button className="add-coupon-btn">Add coupon</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PaymentsDetails;
