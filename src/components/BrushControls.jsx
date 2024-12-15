import React from 'react';

const BrushControls = ({ brushRadius, setBrushRadius }) => {
  return (
    <div>
      <label>Brush Size: </label>
      <input
        type="range"
        min="1"
        max="50"
        value={brushRadius}
        onChange={(e) => setBrushRadius(parseInt(e.target.value, 10))}
      />
      <span>{brushRadius}</span>
    </div>
  );
};

export default BrushControls;