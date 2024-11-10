// Withdrawals.js
import React from "react";
import "./Withdrawals.css";
import EmptyWithdrawalsImage from "../../../assets/store/payment/empty-withdrawals-rebrand.svg";

const Withdrawals = () => {
  return (
    <div className="withdraw-balance-container">
      <h6>Withdraw Balance</h6>
      <p className="info-text">
        Withdraw money from your balance. Your request will be reviewed within the next 48 business hours and you will receive an email once it has been processed.
      </p>

      <div className="withdraw-section">
        <div className="withdraw-info">
          <label>Current balance</label>
          <div className="balance-amount">USD 0.00</div>
        </div>

        <div className="withdraw-input-section">
          <div>
              <p>Withdraw amount:</p>
              <div className="withdraw-input-container">
                <div className="input-prefix">USD</div>
                <input type="number" className="withdraw-input" placeholder="0.00" />
              </div>
          </div>
          <button className="confirm-button">Confirm withdrawal</button>
        </div>
      </div>

      <h6 className="history-header">Withdraw history</h6>
      <div className="empty-withdraw-history">
        <div className="history-icon">
          <img src={EmptyWithdrawalsImage} alt="coin icon" />
        </div>
        <h6>No withdrawals have been made yet</h6>
      </div>
    </div>
  );
};

export default Withdrawals;
