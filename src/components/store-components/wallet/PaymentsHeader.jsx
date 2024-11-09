// PaymentsHeader.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./PaymentsDetails.css";
import "./PaymentsHeader.css";

const PaymentsHeader = () => {
  const location = useLocation(); // Lấy URL hiện tại để xác định tab đang hoạt động
  console.log(location.pathname);
  console.log(location.pathname);

  return (
    <div>
      <h3 className="title">Payments</h3>
      <div className="tabs">
        <Link
          to="/store/wallet/details"
          className={`tab ${location.pathname === "/store/wallet/details" ? "active" : ""}`}
        >
          Payment details
        </Link>
        <Link
          to="/store/wallet/transactions"
          className={`tab ${location.pathname === "/store/wallet/transactions" ? "active" : ""}`}
        >
          Transactions
        </Link>
        <Link
          to="/store/wallet/withdrawals"
          className={`tab ${location.pathname === "/store/wallet/withdrawals" ? "active" : ""}`}
        >
          Withdrawals
        </Link>
      </div>
    </div>
  );
};

export default PaymentsHeader;
