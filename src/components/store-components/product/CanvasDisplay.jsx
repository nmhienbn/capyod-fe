import React from "react";

const CanvasDisplay = ({ baseCanvasRef, overlayCanvasRef, uploadedImage, onUpload }) => {
  return (
    <div style={{ position: "relative", width: "300px", height: "300px" }}>
      <canvas ref={baseCanvasRef} style={{ position: "absolute", top: 0, left: 0, width: "300px", height: "300px" }}></canvas>
      <canvas ref={overlayCanvasRef} style={{ position: "absolute", top: 0, left: 0, width: "300px", height: "300px" }}></canvas>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100px",
          height: "100px",
          border: "2px dashed black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          background: uploadedImage ? `url(${uploadedImage}) no-repeat center/contain` : "transparent",
        }}
        onClick={() => document.getElementById(`fileUpload${baseCanvasRef.current.id}`).click()}
      >
        {!uploadedImage && <span>Nhấn để tải ảnh lên</span>}
      </div>
      <input
        type="file"
        id={`fileUpload${baseCanvasRef.current.id}`}
        accept="image/*"
        style={{ display: "none" }}
        onChange={onUpload}
      />
    </div>
  );
};

export default CanvasDisplay;
