import React, { useState, useEffect } from "react";
import MenuBar from "../menuBar/MenuBar";
import axios from "axios";
import { getAuthUser } from "../../helper/Storage";
import { Link } from "react-router-dom";

const Home = () => {
  const [data, setData] = useState({});
  const [businessName, setBusinessName] = useState("");
  const [businessLogo, setBusinessLogo] = useState("");
  const [businessCover, setBusinessCover] = useState("");
  const [sections, setSections] = useState([]);
  const [items, setItems] = useState([]);
  const [noItemsMessage, setNoItemsMessage] = useState("");

  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [filterBy, setFilterBy] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const auth = getAuthUser();
  let totalPages = 1;

  useEffect(() => {
    axios
      .get("http://localhost:4000/menuer/business/dashboard/home/sections", {
        headers: {
          Authorization: `Bearer ${auth.data.token}`,
        },
      })
      .then((response) => {
        const responseData = response.data;
        setData(response.data);
        setSections(responseData.sections || []);

        if (responseData.sections && responseData.sections.length > 0) {
          fetchSectionItems(responseData.sections[0]._id);
        } else {
          setNoItemsMessage("There are no items.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [page, sortBy, filterBy, searchTerm]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/menuer/business/dashboard/home", {
        headers: {
          Authorization: `Bearer ${auth.data.token}`,
        },
      })
      .then((response) => {
        const responseData = response.data;
      setData(response.data);
        setBusinessName(response.data.business.business_name);
        setBusinessLogo(response.data.business.business_logo);
        setBusinessCover(response.data.business.business_cover);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [page, sortBy, filterBy, searchTerm]);

  const fetchSectionItems = (sectionId) => {
    axios
      .get(
        `http://localhost:4000/menuer/business/dashboard/home/${sectionId}`,
        {
          headers: {
            Authorization: `Bearer ${auth.data.token}`,
          },
        }
      )
      .then((response) => {
        const responseData = response.data;
        if (responseData.items && responseData.items.length > 0) {
          setItems(responseData.items);
          setNoItemsMessage("");
        } else {
          setItems([]);
          setNoItemsMessage("There are no items in this section");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const showPrevious = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const showNext = () => {
    setPage(page + 1);
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
            <img
              className="w-[870px] h-[200px] rounded-3xl absolute"
              src={businessCover}
              alt="Business Cover"
            />
            <div className="absolute inline-flex">
              <div className="w-16 h-16 rounded-xl absolute -top- z-50 -inset-80 -right-20 border border-gray-400"></div>
              <img
                src={businessLogo}
                className="w-16 h-16 bg-red-800 rounded-2xl border border-gray-400 shadow-2xl"
                alt="Business Logo"
              />
              <div className="h-16 pt-5 ml-2 -mt-7 text-black font-bold ">
                {businessName}
              </div>
            </div>
          </div>

          <div className="w-[870px] mx-auto flex flex-wrap gap-2 mt-14">
            {sections.map((section) => (
              <button
                key={section._id}
                className="bg-gray-200 p-2 rounded"
                onClick={() => fetchSectionItems(section._id)}
              >
                {section.section_name}
              </button>
            ))}
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

          {noItemsMessage ? (
            <div className="w-[870px] mx-auto mt-10 text-center text-pink-400">
              {noItemsMessage}
            </div>
          ) : (
            <div className="w-[870px] grid grid-cols-3 mx-auto gap-4 mt-10 ">
              {items.map((item) => (
                <Link to={`/productdetails/${item._id}`} key={item._id}>
                  <div className="border p-4 rounded bg-white border-pink-400">
                    {item.item_id && item.item_id.item_image && (
                      <img
                        src={item.item_id.item_image}
                        alt={item.item_display_name}
                        className="w-full h-32 object-cover rounded mb-2 border border-pink-400"
                      />
                    )}
                    <h3 className="text-xl font-bold mb-2">
                      {item.item_display_name}
                    </h3>
                    <p className="text-gray-500 mb-2">{item.description}</p>
                    <p className="text-lg font-semibold mb-2">
                      {item.price} EGP
                    </p>
                    <p className="text-sm text-gray-500">
                      Variants: {Object.keys(item.item_variants || {}).length}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}

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
