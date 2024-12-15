import React from 'react';

const BrushControls = ({ brushRadius, setBrushRadius }) => {
  return (
    <div>
      <label>Brush Size:</label>
      <input
        type="range"
        min="1"
        max="50"
        value={brushRadius}
        onChange={(e) => setBrushRadius(e.target.value)}
      />
    </div>
  );
};

export default BrushControls;