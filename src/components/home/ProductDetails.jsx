import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  const [data, setData] = useState([]);
  let { id } = useParams();
  console.log(id);
  const keywords = [
    "keyword",
    "keyword",
    "keyword",
    "keyword",
    "keyword",
    "keyword",
    "keyword",
    "keyword",
    "keyword",
    "keyword",
  ];
  const items = [
    {
      id: "20400",
      name: "Aysel Mahmoud",
      comment:
        "I've ordered this dish multiple times, and it never fails to satisfy my cravings! Consistently delicious and oh-so comforting. 😊",
      days: 1,
      stars: "160 L.E",
      image: "https://placehold.co/60x60",
    },
    {
      id: "20401",
      name: "Aysel Mahmoud",
      comment:
        "I've ordered this dish multiple times, and it never fails to satisfy my cravings! Consistently delicious and oh-so comforting. 😊",
      days: 1,
      stars: "160 L.E",
      image: "https://placehold.co/60x60",
    },
    {
      id: "20402",
      name: " Mahmoud",
      comment:
        "I've ordered this dish multiple times, and it never fails to satisfy my cravings! Consistently delicious and oh-so comforting. 😊",
      days: 1,
      stars: "160 L.E",
      image: "https://placehold.co/60x60",
    },
    {
      id: "20405",
      name: "Aysel ",
      comment:
        "I've ordered this dish multiple times, and it never fails to satisfy my cravings! Consistently delicious and oh-so comforting. 😊",
      days: 1,
      stars: "160 L.E",
      image: "https://placehold.co/60x60",
    },
    {
      id: "20405",
      name: "Aysel ",
      comment:
        "I've ordered this dish multiple times, and it never fails to satisfy my cravings! Consistently delicious and oh-so comforting. 😊",
      days: 1,
      stars: "160 L.E",
      image: "https://placehold.co/60x60",
    },
    {
      id: "20405",
      name: "Aysel ",
      comment:
        "I've ordered this dish multiple times, and it never fails to satisfy my cravings! Consistently delicious and oh-so comforting. 😊",
      days: 1,
      stars: "160 L.E",
      image: "https://placehold.co/60x60",
    },
  ];

  useEffect(() => {
    fetch(`URL/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items per page

  // Calculate indexes of the items to display for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className=" mx-auto p-4 bg-white  rounded-lg shadow-md border border-stone-200 ">
      <div className=" flex   mx-auto p-4 bg-white  rounded-lg shadow-md border border-stone-200 ">
        <div className="md:w-1/3 p-4">
          <img
            src="https://placehold.co/300x300"
            alt="Beef Burger"
            className="rounded-lg"
          />
          <div className="mt-4">
            <span className="inline-block bg-pink-200 text-pink-800 text-xs px-2 py-1 rounded-full">
              My Section
            </span>
            <h2 className="mt-4 text-xl font-bold text-zinc-800 ">
              Beef Burger
            </h2>
            <p className="mt-2 text-zinc-600 ">
              Tender marinated chicken shawarma atop fragrant basmati rice,
              crowned with crispy pita bits. Finished with creamy tahini sauce
              and fresh parsley. It's Middle Eastern flavor in every bite.
            </p>
          </div>
        </div>
        <div className="flex flex-col ">
          <div className=" p-4 ">
            <div className="bg-zinc-100   p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-zinc-800 ">
                Item Sales
              </h3>
              <img
                src="https://placehold.co/600x300"
                alt="Item Sales Graph"
                className="mt-4"
              />
            </div>
            <div className="variant flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-zinc-800  ">
                Variants
              </h2>
              <div className="flex justify-between mb-4 gap-3  ">
                <div className="text-center basis-4/12  rounded-lg border border-stone-300 py-3 px-1 shadow-md   ">
                  <h4 className="text-zinc-800 ">Small</h4>
                  <p className="text-pink-600">80 L.E.</p>
                </div>
                <div className="text-center basis-4/12  rounded-lg border border-stone-300 py-3 px-1 shadow-md  ">
                  <h4 className="text-zinc-800 ">Medium</h4>
                  <p className="text-pink-600">120 L.E.</p>
                </div>
                <div className="text-center basis-4/12  rounded-lg border border-stone-300 py-3 px-1 shadow-md  ">
                  <h4 className="text-zinc-800 ">Large</h4>
                  <p className="text-pink-600">180 L.E.</p>
                </div>
              </div>
            </div>
            <div className="variant flex flex-col gap-4">
              <h2 className="text-xl font-semibold text-zinc-800  ">
                Item Rating
              </h2>
              <div className="flex justify-between mb-4 gap-3  ">
                <div className="text-center basis-4/12  rounded-lg border border-stone-300 py-3 px-1 shadow-md   ">
                  <h4 className="text-zinc-800 ">Final Score</h4>
                  <div className="flex items-center gap-2 justify-center">
                    <img
                      src="https://placehold.co/10x10"
                      className="rounded-full"
                      alt=""
                    />
                    <p className="text-cerise-500 text-style-text-medium-regular">
                      4.4
                    </p>
                  </div>
                </div>
                <div className="text-center basis-4/12  rounded-lg border border-stone-300 py-3 px-1 shadow-md  ">
                  <h4 className="text-zinc-800 ">Comments Average</h4>
                  <div className="flex items-center gap-2 justify-center">
                    <img
                      src="https://placehold.co/10x10"
                      className="rounded-full"
                      alt=""
                    />
                    <p className="text-informational-blue-500 text-style-text-medium-regular">
                      4.2
                    </p>
                  </div>
                </div>
                <div className="text-center basis-4/12  rounded-lg border border-stone-300 py-3 px-1 shadow-md  ">
                  <h4 className="text-zinc-800 ">Stars Average</h4>
                  <div className="flex items-center gap-2 justify-center">
                    <img
                      src="https://placehold.co/10x10"
                      className="rounded-full"
                      alt=""
                    />
                    <p className="text-attention-yellow-500 text-style-text-medium-regular">
                      4.8
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-zinc-800 ">
              Users Reviews
            </h3>
            <div className="mt-4">
              {currentItems.map((userReview, index) => (
                <div className="flex items-start mb-4" key={index}>
                  <img
                    src={userReview.image}
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="text-zinc-8000 ">{userReview.name}</h4>
                    <p className="text-zinc-600 ">{userReview.comment}</p>
                    <p className="text-zinc-500 text-sm">
                      {userReview.days} day ago •{" "}
                      <span className="text-pink-600">{userReview.stars}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Pagination controls */}
            <div className="flex justify-between items-center mt-4">
              <button className="text-zinc-500 " onClick={prevPage}>
                Previous
              </button>
              <div className="flex space-x-2">
                {/* Display page numbers */}
                {Array.from(
                  { length: Math.ceil(items.length / itemsPerPage) },
                  (_, i) => (
                    <button
                      key={i}
                      className={`w-8 h-8 bg-zinc-200 text-zinc-800 rounded-full ${
                        i + 1 === currentPage ? "bg-zinc-400" : ""
                      }`}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </button>
                  )
                )}
              </div>
              <button className="text-zinc-500 " onClick={nextPage}>
                Next
              </button>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-zinc-800 ">Item Tags</h3>
            <div className="flex flex-wrap mt-2">
              {keywords.map((keyword, index) => (
                <span
                  key={index}
                  className="background-informational-blue-10-a  text-informational-blue-500 text-xs px-2 py-1 rounded-full m-1"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
