// PaymentsPage.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./PaymentsPage.css";
import PaymentsHeader from "./PaymentsHeader";
import Transactions from "./Transactions";
import Withdrawals from "./Withdrawals";
import PaymentsDetails from "./PaymentsDetails";

const PaymentsPage = () => {
  return (
    <div className="payments-page">
      <PaymentsHeader />
      <div className="payment-details-page">
        <Routes>
          <Route path="details" element={<PaymentsDetails />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="withdrawals" element={<Withdrawals />} />
          <Route path="*" element={<Navigate to="details" replace />} />
        </Routes>
      </div>
    </div>
  );
};

export default PaymentsPage;
