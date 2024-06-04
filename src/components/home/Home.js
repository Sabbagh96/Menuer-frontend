import React, { useState, useEffect } from "react";
import MenuBar from "../menuBar/MenuBar";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  let totalPages;

  useEffect(() => {
    axios
      .get(``, {
        params: {
          page: page,
          sort_by: sortBy,
          filter_by: filterBy,
          query: searchTerm, // Adding search term to API request
        },
      })
      .then((response) => {
        console.log(response.data);
        totalPages = response.data.total_pages;
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [page, sortBy, filterBy, searchTerm]);

  const showPrevious = () => {
    console.log("prev clicked");
    let currentPAge = page;
    if (!currentPAge <= 1) {
      currentPAge--;
      setPage(currentPAge);
    }
  };

  const showNext = () => {
    console.log("next clicked");
    let currentPAge = page;
    currentPAge++;
    setPage(currentPAge);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilterBy(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="w-full h-screen">
      <div className="flex ">
        <div className="w-[304px] h-[796px]  ">
          <div className="">
            <MenuBar />
          </div>
        </div>

        <div className="flex-grow  ">
          <div className="w-full h-[100px] rounded-3xl justify-center items-center inline-flex relative mt-[80px]">
            <img className="w-[870px] h-[200px] rounded-3xl absolute" src="" />
            <div className="absolute inline-flex">
              <div className="w-16 h-16 rounded-xl absolute -top-14 -inset-80 -right-20 z-50 bg-red-900 ">
                dsa
              </div>
              <img className=" w-16 h-16 bg-red-800 rounded-2xl " />
              <div className="h-16 pt-5 ml-2">Name</div>
            </div>
          </div>
          <div className=" h-[37px] w-[870px] mx-auto  items-center content-center flex mt-[60px]">
            <div className=" px-3 py-2  bg-opacity-10 rounded-2xl justify-start items-start inline-flex ">
              <button className="w-28 h-[37px] rounded-2xl focus:bg-pink-600 focus:bg-opacity-10 text-pink-600   text-sm font-normal font-['Alexandria'] leading-[21px]">
                Syrian Meals
              </button>
            </div>
            <div className=" px-3 py-2  bg-opacity-10 rounded-2xl justify-start items-start inline-flex ">
              <button className="w-28 h-[37px] rounded-2xl focus:bg-pink-600 focus:bg-opacity-10 text-pink-600   text-sm font-normal font-['Alexandria'] leading-[21px]">
                Syrian Meals
              </button>
            </div>
            <div className=" px-3 py-2  bg-opacity-10 rounded-2xl justify-start items-start inline-flex ">
              <button className="w-28 h-[37px] rounded-2xl focus:bg-pink-600 focus:bg-opacity-10 text-pink-600   text-sm font-normal font-['Alexandria'] leading-[21px]">
                Syrian Meals
              </button>
            </div>
            <div className=" px-3 py-2  bg-opacity-10 rounded-2xl justify-start items-start inline-flex ">
              <button className="w-28 h-[37px] rounded-2xl focus:bg-pink-600 focus:bg-opacity-10 text-pink-600   text-sm font-normal font-['Alexandria'] leading-[21px]">
                Syrian Meals
              </button>
            </div>
          </div>

          <div className="w-[870px] h-[46px] inline-flex justify-start mx-auto mt-[20px] gap-2">
            <input
              className="w-[642px] h-[46px] bg-gray-100 rounded-xl p-3 flex justify-start"
              placeholder="Search for an item"
              onChange={handleSearch}
              value={searchTerm}
            />
            <select
              className="w-[114px] h-[46px]   bg-white rounded-[20px] border border-slate-500 border-opacity-20 text-center text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]"
              onChange={handleSortChange}
              value={sortBy}
            >
              <option value="">Sort by</option>
              <option value="name">Name</option>
              <option value="price">Price</option>
            </select>
            <select
              className="w-[114px] h-[46px] bg-white rounded-[20px] border border-slate-500 border-opacity-20 text-center text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]"
              onChange={handleFilterChange}
              value={filterBy}
            >
              <option value="">Filter</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
            </select>
          </div>
          {/*Do the map here under this on items */}

          <div className="w-[870px] grid grid-cols-2 mx-auto gap-4 mt-[36px]">
            <div className="w-[400] h-44 p-6 bg-white rounded-3xl border border-slate-500 border-opacity-20 inline-flex justify-start items-start">
              {/*Put the image here under this of an item */}
              <div className="w-32 h-32 rounded-2xl bg-red-600"></div>
              <div className="flex flex-col">
                <div className="w-full text-zinc-800 text-base p-3 -mt-3 font-normal font-['Alexandria'] leading-normal">
                  Chicken Shawerma Fattah
                </div>
                <div className="w-[230px] h-[56px] text-gray-500 text-sm font-light font-['Alexandria'] leading-[21px]">
                  {`Chicken Shawerma Fattah `.substring(0, 20)}
                </div>
              </div>
            </div>
          </div>

          <div>
            <nav
              className="flex mx-auto  justify-end gap-1  p-4"
              aria-label="Page navigation example"
            >
              <div className="cursor-pointer">
                <button
                  disabled={page === 1}
                  className=" w-20 h-[37px] rounded-2xl cursor-pointer active:bg-pink-200 focus:bg-opacity-10 text-pink-600   text-sm font-normal font-['Alexandria'] leading-[21px]"
                  onClick={showPrevious}
                >
                  Previous
                </button>
              </div>

              <div>
                <button
                  disabled={page === totalPages}
                  className="w-20 h-[37px] rounded-2xl active:bg-pink-200 focus:bg-opacity-10 text-pink-600   text-sm font-normal font-['Alexandria'] leading-[21px]"
                  onClick={showNext}
                >
                  Next
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
