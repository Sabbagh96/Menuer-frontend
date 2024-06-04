import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import img1 from "../../assets/restaurant.png";
import img2 from "../../assets/coffee.png";
import img3 from "../../assets/juice.png";
import img4 from "../../assets/iceCream.png";
import { useNavigate } from "react-router-dom";

const StepThree = ({ nextPage }) => {
  const [businessCategory, setBusinessCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const BussinessCategory = [
    {
      title: "Restaurant",
      img: img1,
      id: "1",
    },
    {
      title: "Coffee Shop",
      img: img2,
      id: "2",
    },
    {
      title: "Juice Shop",
      img: img3,
      id: "3",
    },
    {
      title: "Ice Cream Shop",
      img: img4,
      id: "4",
    },
  ];
  console.log(selectedCategory);

  useEffect(() => {
    axios.get("").then((response) => {
      const data = response.data;
      setBusinessCategory(data);
    });
  }, []);

  const handleCategorySelect = (id) => {
    setSelectedCategory(id);
    setErrorMessage(""); // Clear error message when category is selected
  };

  const handleSubmit = () => {
    if (!selectedCategory) {
      setErrorMessage("Please choose a business category.");
      return;
    }

    axios
      .post("", { category_id: selectedCategory })
      .then(() => {
        navigate("/stepfour");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div className="relative w-full h-screen bg-hero_section ">
      <div className=" bg-white w-1/3 border rounded-xl h-auto absolute right-32 top-3 z-50 shadow-lg  ">
        <div className="flex flex-col  ">
          <h1 className="flex font-bold items-center justify-start ml-6 mt-8">
            Create Business
          </h1>
          <div className="flex font-semibold mt-2 items-center justify-start ml-6 mb-5">
            <h3 className="text-sm">Choose Bussiness Category</h3>
          </div>

          <div className="grid grid-cols-2 gap-2 justify-center items-center mx-auto  w-[374px] h-[340px] overflow-y-scroll no-scrollbar">
            {BussinessCategory.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer"
                onClick={() => handleCategorySelect(item.id)}
              >
                <div
                  className={`bg-white w-[181px] h-[159px] mb-2 border ${
                    selectedCategory === item.id
                      ? "border-pink-400 bg-pink-400"
                      : "border-gray-300"
                  } rounded-lg`}
                >
                  <img
                    className="object-contain h-24 flex mx-auto mt-2  "
                    src={item.img}
                    alt=""
                  />

                  <div>{item.title}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Display Error Message */}
         
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
