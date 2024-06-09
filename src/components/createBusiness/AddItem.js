import React, { useState, useEffect } from "react";
import axios from "axios";
import { getAuthUser } from "../../helper/Storage";

const AddItem = ({ itemId }) => {
  const auth = getAuthUser();
  const [displayName, setDisplayName] = useState("");
  const [menuSection, setMenuSection] = useState("");
  const [defaultVariant, setDefaultVariant] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [variantInputs, setVariantInputs] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const [sections, setSections] = useState([]);

  // Fetch sections
  const fetchSections = () => {
    axios
      .get("http://localhost:4000/menus/business/sections/create-section", {
        headers: {
          Authorization: `Bearer ${auth.data.token}`,
        },
      })
      .then((res) => {
        setSections(res.data.sections);
      })
      .catch((err) => {
        console.error("Error fetching sections:", err);
      });
  };

  useEffect(() => {
    fetchSections();

    if (itemId) {
      axios
        .get(`http://localhost:4000/items/${itemId}`, {
          headers: {
            Authorization: `Bearer ${auth.data.token}`,
          },
        })
        .then((response) => {
          const data = response.data.data;
          setDisplayName(data.item_name);
          setMenuSection(data.category_id);
          setDefaultVariant(data.defaultVariant || "");
          setPrice(data.price);
          setDescription(data.item_keywords.join(", "));
          setVariantInputs(
            Object.entries(data.item_variants || {}).map(([key, value]) => ({
              key,
              price: value,
            }))
          );
          setImageFile(data.item_image);
        })
        .catch((error) => {
          console.error("Error fetching item data:", error);
        });
    }
  }, [itemId]);

  const handleSubmit = async () => {
    try {
      const variants = {};
      variantInputs.forEach(({ key, price }) => {
        variants[key] = price;
      });

      const payload = {
        item_display_name: displayName,
        section_id: menuSection,
        description: description,
        item_id: itemId,
        price: price,
        item_variants: variants,
      };
      console.log(payload);

      const response = await axios.post(
        "http://localhost:4000/menuer/business/dashboard/menuManger/add-item",
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth.data.token}`,
          },
        }
      );
      console.log("Item added successfully:", response.data);
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  const handleAddVariant = () => {
    setVariantInputs([...variantInputs, { key: "", price: "" }]);
  };

  const handleVariantInputChange = (index, field, value) => {
    const newInputs = [...variantInputs];
    newInputs[index][field] = value;
    setVariantInputs(newInputs);
  };

  const handleImageChange = (event) => {
    setImageFile(event.target.files[0]);
  };

  const handleMenuSectionChange = (e) => {
    setMenuSection(e.target.value);
    console.log("Selected menu section ID:", e.target.value);
  };

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="border border-gray-500 rounded-xl"
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
                  src={
                    typeof imageFile === "string"
                      ? imageFile
                      : URL.createObjectURL(imageFile)
                  }
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
            <select value={menuSection} onChange={handleMenuSectionChange}>
              <option value="" disabled>
                Select a section
              </option>
              {sections.map((section) => (
                <option key={section._id} value={section._id}>
                  {section.section_name}
                </option>
              ))}
            </select>
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
              <div
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <div className="flex flex-col mr-2">
                  <div>Variant {index + 1}</div>
                  <input
                    className="mt-1"
                    type="text"
                    value={variant.key}
                    onChange={(event) =>
                      handleVariantInputChange(index, "key", event.target.value)
                    }
                    placeholder="Variant name"
                  />
                </div>
                <div className="flex flex-col">
                  <div>Price</div>
                  <input
                    className="mt-1"
                    type="text"
                    value={variant.price}
                    onChange={(event) =>
                      handleVariantInputChange(
                        index,
                        "price",
                        event.target.value
                      )
                    }
                    placeholder="Price"
                  />
                </div>
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
              onClick={handleSubmit}
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
