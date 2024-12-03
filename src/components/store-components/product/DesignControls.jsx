import React from "react";

const DesignControls = ({ currentType, setCurrentType, color, setColor, size, setSize, price, setPrice }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px", marginTop: "20px" }}>
        {["shirt", "sweater", "hoodie"].map((type) => (
          <button
            key={type}
            onClick={() => setCurrentType(type)}
            style={{
              padding: "10px 20px",
              backgroundColor: currentType === type ? "#4CAF50" : "#ccc",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>
      <div style={{ margin: "10px 0" }}>
        <label htmlFor="colorPicker" style={{ marginRight: "10px", fontWeight: "bold" }}>Chọn màu áo:</label>
        <input
          type="color"
          id="colorPicker"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div style={{ margin: "10px 0" }}>
        <label style={{ marginRight: "10px", fontWeight: "bold" }}>Chọn size:</label>
        <select
          value={size}
          onChange={(e) => setSize(e.target.value)}
          style={{ padding: "5px", borderRadius: "5px", border: "1px solid #ccc" }}
        >
          {["S", "M", "L", "XL", "XXL"].map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div style={{ margin: "10px 0" }}>
        <label htmlFor="priceInput" style={{ marginRight: "10px", fontWeight: "bold" }}>Giá (VNĐ):</label>
        <input
          type="number"
          id="priceInput"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          style={{ padding: "5px", width: "100px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>
    </>
  );
};

export default DesignControls;
