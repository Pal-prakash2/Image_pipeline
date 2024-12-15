import React, { useRef, useEffect, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import './MaskDrawing.css'; // Import the CSS file

const MaskDrawing = ({ brushRadius, onSave, image }) => {
  const canvasRef = useRef(null);
  const [canvasDimensions, setCanvasDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    if (image) {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        setCanvasDimensions({ width: img.width, height: img.height });
      };
    }
  }, [image]);

  const handleSave = () => {
    const canvas = canvasRef.current.canvasContainer.children[1];
    const maskCanvas = document.createElement('canvas');
    maskCanvas.width = canvas.width;
    maskCanvas.height = canvas.height;
    const maskCtx = maskCanvas.getContext('2d');

    // Fill the mask canvas with black
    maskCtx.fillStyle = 'black';
    maskCtx.fillRect(0, 0, maskCanvas.width, maskCanvas.height);

    // Draw the white mask on top
    maskCtx.drawImage(canvas, 0, 0);

    const dataUrl = maskCanvas.toDataURL('image/png');
    onSave(dataUrl);
  };

  const handleClear = () => {
    canvasRef.current.clear();
  };

  return (
    <div>
      <div className="canvas-container">
        {image && (
          <div className="background-image" style={{ backgroundImage: `url(${image})` }}></div>
        )}
        <CanvasDraw
          ref={canvasRef}
          brushRadius={brushRadius}
          lazyRadius={0}
          canvasWidth={canvasDimensions.width}
          canvasHeight={canvasDimensions.height}
          brushColor="white"
          backgroundColor="transparent"
        />
      </div>
      <button onClick={handleSave}>Save Mask</button>
      <button onClick={handleClear}>Clear Canvas</button>
    </div>
  );
};

export default MaskDrawing;