import React, { useState, useEffect } from "react";
import axios from "axios";

const AddItem = () => {
  const [displayName, setDisplayName] = useState("");
  const [menuSection, setMenuSection] = useState("");
  const [defaultVariant, setDefaultVariant] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [variantInputs, setVariantInputs] = useState([""]);
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("image", imageFile);
      formData.append("displayName", displayName);
      formData.append("menuSection", menuSection);
      formData.append("defaultVariant", defaultVariant);
      formData.append("price", price);
      formData.append("description", description);
      variantInputs.forEach((variant, index) => {
        formData.append(`variant_${index + 1}`, variant);
      });

      const response = await axios.post("/your-endpoint", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Item added successfully:", response.data);
      // Optionally reset form fields or perform any other actions after successful submission
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  useEffect(() => {
    if (
      imageFile &&
      displayName &&
      menuSection &&
      defaultVariant &&
      price &&
      description &&
      variantInputs.length > 0
    ) {
      handleSubmit();
    }
  }, [
    imageFile,
    displayName,
    menuSection,
    defaultVariant,
    price,
    description,
    variantInputs,
  ]);

  const handleAddVariant = () => {
    setVariantInputs([...variantInputs, ""]);
  };

  const handleVariantInputChange = (index, event) => {
    const newInputs = [...variantInputs];
    newInputs[index] = event.target.value;
    setVariantInputs(newInputs);
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="border border-gray-500 rounded-xl"
      onClick={handleSubmit}
    >
      <div className="flex">
        <div>
          <label htmlFor="imageInput">
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
            <div className="w-20 h-20 border bg-red-700 cursor-pointer">
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
          <div className=" ">Name</div>
        </div>
        <div className="flex-grow">
          <div className="flex flex-col mx-4">
            <div>Display Name</div>
            <input
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
            <div>Menu Section </div>
            <input
              value={menuSection}
              onChange={(e) => setMenuSection(e.target.value)}
            />
          </div>
          <div className="flex justify-between mx-4">
            <div className="flex flex-col">
              <div>Default Variant</div>
              <input
                className="mt-1"
                type="text"
                value={defaultVariant}
                onChange={(e) => setDefaultVariant(e.target.value)}
              />
            </div>
            <div className="flex flex-col justify-start">
              <div>Price</div>
              <input
                className="mt-1"
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col mx-4">
            <div>Description</div>
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          {/* Render variant inputs */}
          <div className="mx-4">
            {variantInputs.map((variant, index) => (
              <div key={index} className="flex flex-col">
                <div>Variant {index + 1}</div>
                <input
                  value={variant}
                  onChange={(event) => handleVariantInputChange(index, event)}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-2 rounded-xl bg-pink-400 w-20 mx-auto">
            <button className="flex" onClick={handleAddVariant}>
              Add
            </button>
          </div>

          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddItem;
