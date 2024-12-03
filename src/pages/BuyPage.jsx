import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DesignPage from "./DesignPage";

const BuyPage = ({ isPreview = false }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(0);
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const orderData = {
      quantity,
      address,
      orderItemId: id,
    };

    try {
      const response = await fetch("http://localhost:5000/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${sessionStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        console.error("Error creating order:", response.statusText);
        return;
      }

      const data = await response.json();
      console.log("Order created successfully:", data);
      navigate("/store/orders");
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Buy Product</h1>
      <DesignPage isPreview={true} />

      <form className="mt-6 space-y-4">
        <div>
          <label htmlFor="quantity" className="block font-medium mb-2">
            Quantity
          </label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            className="border border-gray-300 p-2 rounded w-full"
            disabled={isPreview}
          />
        </div>

        <div>
          <label htmlFor="address" className="block font-medium mb-2">
            Address
          </label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            rows="4"
            className="border border-gray-300 p-2 rounded w-full"
            disabled={isPreview}
          />
        </div>

        {!isPreview && (
          <button
            type="submit"
            className={`px-4 py-2 rounded text-white ${
              address === "" || quantity < 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 cursor-pointer"
            }`}
            onClick={handleSubmit}
            disabled={address === "" || quantity < 1}
          >
            Place Order
          </button>
        )}
      </form>
    </div>
  );
};

const styles = {
  displaySection: {
    margin: "auto",
    position: "relative",
    width: "300px",
    height: "300px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  canvas: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "300px",
    height: "300px",
    zIndex: 1,
  },
};

export default BuyPage;
