// Transactions.js
import React from "react";
import "./Transactions.css";
import EmptyTransactionsImage from "../../../assets/store/payment/no-rewards.svg"; // Đường dẫn đến ảnh không có giao dịch

const Transactions = () => {
  return (
    <div className="transactions-page">
      <img src={EmptyTransactionsImage} alt="No Transactions" className="empty-image" />
      <p className="empty-message">No transactions have yet been made</p>
    </div>
  );
};

export default Transactions;
