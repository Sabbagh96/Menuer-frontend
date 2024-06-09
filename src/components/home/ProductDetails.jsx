import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAuthUser } from "../../helper/Storage";
import axios from "axios";

export default function ProductDetails() {
  const auth = getAuthUser();
  const [data, setData] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [comments, setComments] = useState([]);
  const [itemImage, setItemImage] = useState("");
  const [ratingAverage, setRatingAverage] = useState(null);
  const [sectionName, setSectionName] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/menuer/business/dashboard/menu-item/${id}`,
          {
            headers: {
              Authorization: `Bearer ${auth.data.token}`,
            },
          }
        );
        const { item, reviews } = response.data;

        setData(item);
        setReviews(reviews);
        setComments(reviews.map((review) => review.comment)); // Set comments from reviews
        setItemImage(item?.item_id?.item_image || ""); // Use optional chaining for safe access
        setRatingAverage(calculateRatingAverage(reviews)); // Calculate rating average
        setSectionName(item?.section_id?.section_name);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };

    fetchData();
  }, [id, auth.data.token, comments]);

  // Function to calculate rating average
  const calculateRatingAverage = (reviews) => {
    if (reviews.length === 0) return null;
    const totalRatings = reviews.reduce(
      (sum, review) => sum + review.ratings,
      0
    );
    return (totalRatings / reviews.length).toFixed(1);
  };

  return (
    <div className="mx-auto p-4 bg-white rounded-lg shadow-md border border-stone-200">
      {data && ( // Conditional rendering when data is available
        <div className="flex mx-auto p-4 bg-white rounded-lg shadow-md border border-stone-200">
          <div className="md:w-1/3 p-4">
            <img src={itemImage} alt={itemImage} className="rounded-lg" />
            <div className="mt-4">
              <span className="inline-block bg-pink-200 text-pink-800 text-xs px-2 py-1 rounded-full">
                {sectionName}
              </span>
              <h2 className="mt-4 text-xl font-bold text-zinc-800">
                {data.item_display_name}
              </h2>
              <p className="mt-2 text-zinc-600">{data.description}</p>
              <p className="text-lg font-semibold mb-2">{data.price} L.E</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="p-4">
              <div className="bg-zinc-100 p-4 rounded-lg mb-4">
                <h3 className="text-lg font-semibold text-zinc-800">
                  Item Sales
                </h3>
                <img
                  src="https://placehold.co/600x300"
                  alt="Item Sales Graph"
                  className="mt-4"
                />
              </div>
              <div className="variant flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-zinc-800">
                  Variants
                </h2>
                <div className="flex justify-between mb-4 gap-3">
                  {Object.entries(data.item_variants).map(
                    ([variantName, variantValue]) => (
                      <div
                        key={variantName}
                        className="text-center basis-4/12 rounded-lg border border-stone-300 py-3 px-1 shadow-md"
                      >
                        <h4 className="text-zinc-800">{variantName}</h4>
                        <p className="text-pink-600">{variantValue} L.E</p>
                      </div>
                    )
                  )}
                </div>
              </div>
              <div className="variant flex flex-col gap-4">
                <h2 className="text-xl font-semibold text-zinc-800">
                  Item Rating
                </h2>
                <div className="flex justify-between mb-4 gap-3">
                  <div className="text-center basis-4/12 rounded-lg border border-stone-300 py-3 px-1 shadow-md">
                    <h4 className="text-zinc-800">Final Score</h4>
                    <div className="flex items-center gap-2 justify-center">
                      <img
                        src="https://placehold.co/10x10"
                        className="rounded-full"
                        alt=""
                      />
                      <p className="text-cerise-500 text-style-text-medium-regular">
                        {ratingAverage || "N/A"}
                      </p>
                    </div>
                  </div>
                  <div className="text-center basis-4/12 rounded-lg border border-stone-300 py-3 px-1 shadow-md">
                    <h4 className="text-zinc-800">Comments Average</h4>
                    <div className="flex items-center gap-2 justify-center">
                      <img
                        src="https://placehold.co/10x10"
                        className="rounded-full"
                        alt=""
                      />
                      <p className="text-informational-blue-500 text-style-text-medium-regular">
                        {ratingAverage || "N/A"}
                      </p>
                    </div>
                  </div>
                  <div className="text-center basis-4/12 rounded-lg border border-stone-300 py-3 px-1 shadow-md">
                    <h4 className="text-zinc-800">Stars Average</h4>
                    <div className="flex items-center gap-2 justify-center">
                      <img
                        src="https://placehold.co/10x10"
                        className="rounded-full"
                        alt=""
                      />
                      <p className="text-attention-yellow-500 text-style-text-medium-regular">
                        {ratingAverage || "N/A"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-zinc-800">
                Users Reviews
              </h3>
              <div className="mt-4">
                {comments.map((comment, index) => (
                  <div className="flex items-start mb-4" key={index}>
                    <img
                      src="https://placehold.co/60x60"
                      alt="User Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div className="ml-4">
                      <h4 className="text-pink-800">{comment}</h4>
                      <p className="text-zinc-600">{comment}</p>
                      <p className="text-zinc-500 text-sm">
                        <span className="text-pink-600">
                          {reviews[index].ratings} stars
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-zinc-800">Item Tags</h3>
              <div className="flex flex-wrap mt-2">
                {data.description.split(",").map((keyword, index) => (
                  <span
                    key={index}
                    className="background-informational-blue-10-a text-informational-blue-500 text-xs px-2 py-1 rounded-full m-1"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
