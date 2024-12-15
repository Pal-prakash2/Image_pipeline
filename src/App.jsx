import React, { useState } from 'react';
import ImageUpload from './components/ImageUpload.jsx';
import MaskDrawing from './components/MaskDrawing.jsx';
import BrushControls from './components/BrushControls.jsx';
import DisplayImages from './components/DisplayImages.jsx';
import './App.css'; // Import the global CSS file

function App() {
  const [originalImage, setOriginalImage] = useState(null);
  const [maskImage, setMaskImage] = useState(null);
  const [brushRadius, setBrushRadius] = useState(10);

  console.log('Original Image:', originalImage);
  console.log('Mask Image:', maskImage);

  return (
    <div className="container">
      <h1>Image Pipeline</h1>
      <ImageUpload onImageUpload={setOriginalImage} />
      <BrushControls brushRadius={brushRadius} setBrushRadius={setBrushRadius} />
      <MaskDrawing brushRadius={brushRadius} onSave={setMaskImage} image={originalImage} />
      <DisplayImages originalImage={originalImage} maskImage={maskImage} />
    </div>
  );
}

export default App;