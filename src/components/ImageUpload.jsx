import React, { useState } from 'react';

const ImageUpload = ({ onImageUpload }) => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
      onImageUpload(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%' }} />}
    </div>
  );
};

export default ImageUpload;