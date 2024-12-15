import React, { useState } from 'react';
import './ImageUpload.css'; // Import the CSS file

const ImageUpload = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(reader.result);
      onImageUpload(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="image-upload">
      <label className="upload-label" htmlFor="file-input">Upload Image:</label>
      <input id="file-input" type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" className="uploaded-image" />}
    </div>
  );
};

export default ImageUpload;