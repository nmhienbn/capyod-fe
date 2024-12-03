import React, { useEffect, useRef } from "react";

const CanvasRenderer = ({ baseImageSrc, colorOverlay, uploadedImage }) => {
  const baseCanvasRef = useRef(null);
  const overlayCanvasRef = useRef(null);
  const uploadCanvasRef = useRef(null);

  const renderCanvas = async (baseCanvasRef, overlayCanvasRef, uploadCanvasRef, imageSrc, overlayColor, overlayImage) => {
    const baseCanvas = baseCanvasRef.current;
    const overlayCanvas = overlayCanvasRef.current;
    const uploadCanvas = uploadCanvasRef.current;
  
    if (!baseCanvas || !overlayCanvas || !uploadCanvas) {
      console.error("Canvas references are invalid.");
      return;
    }
  
    const baseCtx = baseCanvas.getContext("2d");
    const overlayCtx = overlayCanvas.getContext("2d");
    const uploadCtx = uploadCanvas.getContext("2d");
  
    const loadImage = (src) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
      });
    };
  
    try {
      // Tải ảnh cơ bản
      const baseImg = await loadImage(imageSrc);
  
      // Thiết lập kích thước canvas dựa trên ảnh cơ bản
      baseCanvas.width = baseImg.width;
      baseCanvas.height = baseImg.height;
      overlayCanvas.width = baseImg.width;
      overlayCanvas.height = baseImg.height;
      uploadCanvas.width = baseImg.width;
      uploadCanvas.height = baseImg.height;
  
      // Vẽ ảnh cơ bản
      baseCtx.clearRect(0, 0, baseCanvas.width, baseCanvas.height);
      baseCtx.drawImage(baseImg, 0, 0, baseImg.width, baseImg.height);
  
      // Vẽ lớp phủ màu
      overlayCtx.clearRect(0, 0, overlayCanvas.width, overlayCanvas.height);
      overlayCtx.globalAlpha = 0.9;
      overlayCtx.fillStyle = overlayColor;
      overlayCtx.fillRect(0, 0, overlayCanvas.width, overlayCanvas.height);
  
      overlayCtx.globalCompositeOperation = "destination-in";
      overlayCtx.drawImage(baseImg, 0, 0, baseImg.width, baseImg.height);
      overlayCtx.globalCompositeOperation = "source-over";
  
      // Nếu có ảnh tải lên, vẽ ảnh này
      if (overlayImage) {
        const uploadedImg = await loadImage(overlayImage);
  
        uploadCtx.clearRect(0, 0, uploadCanvas.width, uploadCanvas.height);
  
        // Tính toán vị trí và kích thước ảnh tải lên
        const designWidth = 300;
        const designHeight = 300;
        const scaleX = baseCanvas.width / designWidth;
        const scaleY = baseCanvas.height / designHeight;
  
        const designImgX = designWidth * 0.3;
        const designImgY = designHeight * 0.3;
        const designImgWidth = designWidth * 0.4;
        const designImgHeight = designHeight * 0.4;
  
        const imgX = designImgX * scaleX;
        const imgWidth = designImgWidth * scaleX;
        const imgY = designImgY * scaleY + (designImgHeight * scaleY - imgWidth * (uploadedImg.height / uploadedImg.width)) / 2;
        const imgHeight = imgWidth * (uploadedImg.height / uploadedImg.width);
  
        uploadCtx.globalAlpha = 1;
        uploadCtx.drawImage(uploadedImg, imgX, imgY, imgWidth, imgHeight);
      }
    } catch (error) {
      console.error("Error rendering canvas:", error);
    }
  };
  

  useEffect(() => {
    renderCanvas(baseCanvasRef, overlayCanvasRef, uploadCanvasRef, baseImageSrc, colorOverlay, uploadedImage);
  }, [baseImageSrc, colorOverlay, uploadedImage]);

  return (
    <div className="relative w-40 h-40 overflow-hidden">
      <canvas ref={baseCanvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
      <canvas ref={overlayCanvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
      <canvas ref={uploadCanvasRef} className="absolute top-0 left-0 w-full h-full"></canvas>
    </div>
  );
};

export default CanvasRenderer;
