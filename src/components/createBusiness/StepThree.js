import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { getAuthUser, setAuthUser } from "../../helper/Storage";

const StepThree = () => {
  const [businessCategory, setBusinessCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const auth = getAuthUser();

  useEffect(() => {
    axios
      .get("http://localhost:4000/menus/business/categories", {
        headers: {
          Authorization: `Bearer ${auth.data.token}`,
        },
      })
      .then((response) => {
        const data = response.data.data;
        setBusinessCategory(data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  }, [auth.data.token]);

  const handleCategorySelect = (id) => {
    setSelectedCategory(id);
    setErrorMessage(""); // Clear error message when category is selected

    const updatedAuth = {
      ...auth,
      business: { ...auth.business, categories_id: id },
    };
    setAuthUser(updatedAuth); // Save selected category to local storage
  };

  const handleSubmit = () => {
    if (!selectedCategory) {
      setErrorMessage("Please choose a business category.");
      return;
    }

    navigate("/stepfour");
  };

  return (
    <div className="relative w-full h-screen bg-hero_section overflow-auto">
      <div className="bg-white w-1/3 border rounded-xl h-auto absolute right-32 top-3 z-50 shadow-lg">
        <div className="flex flex-col">
          <h1 className="flex font-bold items-center justify-start ml-6 mt-8">
            Create Business
          </h1>
          <div className="flex font-semibold mt-2 items-center justify-start ml-6 mb-5">
            <h3 className="text-sm">Choose Business Category</h3>
          </div>

          <div className="grid grid-cols-2 gap-2 justify-center items-center mx-auto w-[374px] h-[340px] overflow-y-scroll no-scrollbar">
            {businessCategory.map((item) => (
              <div
                key={item._id}
                className="cursor-pointer"
                onClick={() => handleCategorySelect(item._id)}
              >
                <div
                  className={`bg-white w-[181px] h-[159px] mb-2 border ${
                    selectedCategory === item._id
                      ? "border-pink-400 bg-pink-400"
                      : "border-gray-300"
                  } rounded-lg`}
                >
                  <img
                    className="object-contain h-24 flex mx-auto mt-2"
                    src={item.category_image}
                    alt={item.category_name}
                  />
                  <div className="text-center mt-2">{item.category_name}</div>
                </div>
              </div>
            ))}
          </div>

          {errorMessage && (
            <div className="text-red-500 text-center mt-4">{errorMessage}</div>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className={`bg-[#E32B87] mb-6 text-white font-bold py-2 px-4 rounded-xl w-10/12 mt-5 mx-auto text-center ${
            selectedCategory ? "" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!selectedCategory}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepThree;
