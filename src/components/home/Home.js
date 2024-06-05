import React, { useState, useEffect } from "react";
import MenuBar from "../menuBar/MenuBar";
import axios from "axios";
import { getAuthUser } from "../../helper/Storage";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedButtonId, setSelectedButtonId] = useState("");

  let totalPages;

  const auth = getAuthUser();
  console.log(auth.token);

  // Fetch the main data based on page, sortBy, filterBy, and searchTerm
  useEffect(() => {
    axios
      .get("http://localhost:4000/menuer/business/dashboard/home", {
        headers: {
          Authorization: `Bearer ${auth.data.token}`,
        },
      })
      .then((response) => {
        console.log(response, "data");
        setData(response.data);
        console.log(response.data , 'dataaaaaa')
        console.log(response.data.business.business_name, "Tdasddsad");
      
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [page, sortBy, filterBy, searchTerm]);

  // Fetch button data and data for the selected button ID
  /* const fetchButtonData = (buttonId) => {
    axios
      .get("", {
        params: {
          button_id: buttonId,
        },
      })
      .then((response) => {
        console.log("Button Data:", response.data);
        setButtons(response.data.buttons); // Assuming response includes buttons data
        if (buttonId) {
          setData(response.data.data); // Assuming response includes data for the selected button
        }
      })
      .catch((error) => {
        console.error("Error fetching buttons and data for button:", error);
      });
  };

  useEffect(() => {
    fetchButtonData(selectedButtonId);
  }, [selectedButtonId]);

  useEffect(() => {
    fetchButtonData("");
  }, []);

  const handleButtonClick = (id) => {
    setSelectedButtonId(id);
  }; */

  const showPrevious = () => {
    console.log("prev clicked");
    let currentPage = page;
    if (currentPage > 1) {
      currentPage--;
      setPage(currentPage);
    }
  };

  const showNext = () => {
    console.log("next clicked");
    let currentPage = page;
    currentPage++;
    setPage(currentPage);
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
      <div className="flex">
        <div className="w-[304px] h-[796px]">
          <MenuBar />
        </div>
        <div className="flex-grow">
          <div className="w-full h-[100px] rounded-3xl justify-center items-center inline-flex relative mt-[80px]">
            <img className="w-[870px] h-[200px] rounded-3xl absolute" src="" />
            <div className="absolute inline-flex">
              <div className="w-16 h-16 rounded-xl absolute -top-14 -inset-80 -right-20 z-50 bg-red-900">
                dsa
              </div>
              <img className="w-16 h-16 bg-red-800 rounded-2xl" />
              <div className="h-16 pt-5 ml-2">
                
              </div>
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
              className="w-[114px] h-[46px] bg-white rounded-[20px] border border-slate-500 border-opacity-20 text-center text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]"
              onChange={handleSortChange}
              value={sortBy}
            >
              <option>Sort by</option>

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
          {/* Map items here */}
          <div className="w-[870px] grid grid-cols-2 mx-auto gap-4 mt-[36px]">
            {/* {data.map((item) => (
              <Link to={`/productdetails/${item.id}`} key={item.id}>
                <div className="w-[400] h-44 p-6 bg-white rounded-3xl border border-slate-500 border-opacity-20 inline-flex justify-start items-start">
                  <div className="w-32 h-32 rounded-2xl bg-red-600"></div>
                  <div className="flex flex-col">
                    <div className="w-full text-zinc-800 text-base p-3 -mt-3 font-normal font-['Alexandria'] leading-normal">
                      {item.name}
                    </div>
                    <div className="w-[230px] h-[56px] text-gray-500 text-sm font-light font-['Alexandria'] leading-[21px]">
                      {item.description.substring(0, 20)}
                    </div>
                  </div>
                </div>
              </Link>
            ))}  */}
          </div>
          <div>
            <nav
              className="flex mx-auto justify-end gap-1 p-4"
              aria-label="Page navigation example"
            >
              <div className="cursor-pointer">
                <button
                  disabled={page === 1}
                  className="w-20 h-[37px] rounded-2xl cursor-pointer active:bg-pink-200 focus:bg-opacity-10 text-pink-600 text-sm font-normal font-['Alexandria'] leading-[21px]"
                  onClick={showPrevious}
                >
                  Previous
                </button>
              </div>
              <div>
                <button
                  disabled={page === totalPages}
                  className="w-20 h-[37px] rounded-2xl active:bg-pink-200 focus:bg-opacity-10 text-pink-600 text-sm font-normal font-['Alexandria'] leading-[21px]"
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
