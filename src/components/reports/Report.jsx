import React, { useState, useEffect } from "react";
import axios from "axios";

const ITEMS_PER_PAGE = 5;

export default function Report() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://662d8473a7dda1fa378ac37b.mockapi.io/flashcards/questions"
        );
        setData(response.data);
        setTotalPages(Math.ceil(response.data.length / ITEMS_PER_PAGE));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderRows = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const selectedData = data.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    return selectedData.map((item) => (
      <tr
        key={item.id}
        className="rows-contant flex h-16 justify-center items-center self-stretch px-6 py-0.5 border-b-[color:var(--color-naturals-gray-900)] border-b border-solid"
      >
        <td className="flex justify-center items-center gap-3 flex-[1_0_0]">
          <div className="flex items-center gap-2 flex-[1_0_0] self-stretch">
            <img
              src={item.avatar}
              alt="user"
              className="flex w-[34px] h-[34px] justify-center items-center border border-[color:var(--color-naturals-gray-20-a)] rounded-lg border-solid"
            />
            <p className="flex max-h-12 flex-col justify-center flex-[1_0_0] self-stretch overflow-hidden text-ellipsis whitespace-nowrap text-naturals-gray-200 text-style-text-tiny-light">
              {item.name}
            </p>
          </div>
        </td>
        <td className="flex w-36 justify-center items-center self-stretch">
          <p className="flex h-[22px] max-h-[22px] flex-col justify-center flex-[1_0_0] overflow-hidden text-center text-ellipsis whitespace-nowrap text-naturals-gray-200 text-style-text-tiny-light">
            {item.startDate}
          </p>
        </td>
        <td className="flex w-36 justify-center items-center self-stretch">
          <p className="flex h-[22px] max-h-[22px] flex-col justify-center flex-[1_0_0] overflow-hidden text-center text-ellipsis whitespace-nowrap text-naturals-gray-200 text-style-text-tiny-light">
            {item.endDate}
          </p>
        </td>
        <td className="flex w-[110px] justify-center items-center self-stretch">
          <p className="flex h-[22px] max-h-[22px] flex-col justify-center flex-[1_0_0] overflow-hidden text-center text-ellipsis whitespace-nowrap text-naturals-gray-200 text-style-text-tiny-light">
            {item.transactions}
          </p>
        </td>
        <td className="flex w-[110px] justify-center items-center self-stretch">
          <p className="flex h-[22px] max-h-[22px] flex-col justify-center flex-[1_0_0] overflow-hidden text-center text-ellipsis whitespace-nowrap text-naturals-gray-200 text-style-text-tiny-light">
            {item.totalCash}
          </p>
        </td>
        <td className="flex items-start">
          <button className="flex justify-center items-center gap-2 text-center px-5 py-3 rounded-[20px] text-style-text-tiny-medium text-cerise-500">
            View
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <>
      <div>
        <div className="container-header flex h-[68px] justify-center items-center self-stretch px-0 py-4">
          <p className="flex-[1_0_0] text-style-text-medium-medium text-naturals-gray-200">
            Reports
          </p>
        </div>
        <div className="flex flex-col justify-end items-end self-stretch border border-[color:var(--color-naturals-gray-20-a)] rounded-2xl border-solid effect-style-box-shadow-md background-naturals-white">
          <div className="nav flex items-center gap-3 self-stretch p-6">
            <div className="search flex flex-col items-start flex-[1_0_0]">
              <input
                type="search"
                className="flex justify-center items-start self-stretch p-3 rounded-xl background-naturals-gray-950"
                placeholder="Search..."
              />
            </div>
            <div className="flex items-start">
              <button className="flex justify-center items-center gap-2 border border-[color:var(--color-naturals-gray-20-a)] px-5 py-3 rounded-[20px] border-solid background-naturals-white">
                <img src="imgs/Sort Vertical.svg" alt="sort" />
                Sort by
              </button>
            </div>
            <div className="flex items-start">
              <button className="flex justify-center items-center gap-2 border border-[color:var(--color-naturals-gray-20-a)] px-5 py-3 rounded-[20px] border-solid background-naturals-white">
                <img src="imgs/Filter.svg" alt="filter" />
                Filter
              </button>
            </div>
          </div>
          <table className="table-auto w-full">
            <thead className="table-head flex h-16 justify-center items-center self-stretch border-b-[color:var(--color-naturals-gray-900)] px-6 py-0.5 border-b border-solid">
              <tr className="head-row flex justify-center items-center gap-3 flex-[1_0_0]">
                <th className="table-label flex items-center flex-[1_0_0] self-stretch">
                  <p className="flex h-[22px] max-w-[120px] max-h-[22px] flex-col justify-center flex-[1_0_0] overflow-hidden text-ellipsis whitespace-nowrap text-naturals-gray-600 text-style-text-tiny-regular">
                    Stuff Member
                  </p>
                </th>
                <th className="table-label flex w-36 justify-center items-center self-stretch">
                  <p className="flex h-[22px] max-w-[120px] max-h-[22px] flex-col justify-center flex-[1_0_0] overflow-hidden text-center text-ellipsis whitespace-nowrap text-naturals-gray-600 text-style-text-tiny-regular">
                    Started On
                  </p>
                </th>
                <th className="table-label flex w-36 justify-center items-center self-stretch">
                  <p className="flex h-[22px] max-w-[120px] max-h-[22px] flex-col justify-center flex-[1_0_0] overflow-hidden text-center text-ellipsis whitespace-nowrap text-naturals-gray-600 text-style-text-tiny-regular">
                    Ended On
                  </p>
                </th>
                <th className="table-label flex w-[110px] justify-center items-center self-stretch">
                  <p className="flex h-[22px] max-w-[120px] max-h-[22px] flex-col justify-center flex-[1_0_0] overflow-hidden text-center text-ellipsis whitespace-nowrap text-naturals-gray-600 text-style-text-tiny-regular">
                    Transactions
                  </p>
                </th>
                <th className="table-label flex w-[110px] justify-center items-center self-stretch">
                  <p className="flex h-[22px] max-w-[120px] max-h-[22px] flex-col justify-center flex-[1_0_0] overflow-hidden text-center text-ellipsis whitespace-nowrap text-naturals-gray-600 text-style-text-tiny-regular">
                    Total Cash
                  </p>
                </th>
                <th className="table-label flex w-[75px] justify-center items-center self-stretch"></th>
              </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
          </table>
          <div className="flex justify-between items-center self-stretch p-6 rounded-lg">
            <div className="flex justify-center items-center">
              <button
                className="flex h-5 justify-center items-center gap-1 text-naturals-gray-500 text-style-text-tiny-medium"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <img src="imgs/Alt Arrow Left.svg" alt="left arrow" />
                Previous
              </button>
            </div>
            <div className="flex justify-center items-center text-style-text-tiny-regular text-naturals-gray-500">
              Page {currentPage} of {totalPages}
            </div>
            <div className="flex justify-center items-center">
              <button
                className="flex h-5 justify-center items-center gap-1 text-naturals-gray-500 text-style-text-tiny-medium"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
                <img src="imgs/Alt Arrow Right.svg" alt="right arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
