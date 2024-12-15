import React from 'react';

const DisplayImages = ({ originalImage, maskImage }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <div>
        <h3>Original Image</h3>
        {originalImage && <img src={originalImage} alt="Original" style={{ maxWidth: '100%' }} />}
      </div>
      <div>
        <h3>Mask Image</h3>
        {maskImage && <img src={maskImage} alt="Mask" style={{ maxWidth: '100%' }} />}
      </div>
    </div>
  );
};

export default DisplayImages;