import React, { useState } from "react";

const CreateNewItem = () => {
  const [imageFile, setImageFile] = useState(null);
  const [displayName, setDisplayName] = useState("");
  const [keywords, setKeywords] = useState("");
  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };
  return (
    <div className="flex flex-row gap-6 ">
      <div>
        <label htmlFor="imageInput">
          <input
            id="imageInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <div className="w-28 h-28 border  bg-red-700 cursor-pointer">
            {imageFile ? (
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Item"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full text-white">
                Select Image
              </div>
            )}
          </div>
        </label>
      </div>
      <div>
        <div>Display Name</div>
        <input
          type="text"
          placeholder="Display Name"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
        <div>Add Keywords</div>
        <input
          type="text"
          placeholder="Keywords"
          onChange={(e) => setKeywords(e.target.value)}
          value={keywords}
        />
      </div>
      <button>Confirm</button>
    </div>
  );
};

export default CreateNewItem;
