import React, { useState, useEffect } from "react";
import axios from "axios";

const AllShiftOrders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="mx-auto justify-center place-content-center items-center">
      <div className="w-[960px] mt-[56.5px] mb-[56.5px] flex justify-between mx-auto px-4 ">
        <div className=" text-zinc-800  text-lg font-medium font-['Alexandria'] leading-[27px]">
          Shift Orders ( 14 )
        </div>
        <button className="w-[150px] h-11 border shadow-2xl rounded-[20px] border-slate-500 border-opacity-20 justify-center items-center gap-2 text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]">
          Print Orders
        </button>
      </div>
      <div className="w-[960px] h-[330px] mt-5 bg-white border border-gray-100 shadow-2xl rounded-x flex mx-auto justify-center flex-col">
        <div class="flex flex-col overflow-x-auto">
          <div class="sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-x-auto">
                <div className="flex justify-between p-6">
                  <div>
                    Shift Orders <span> ( 14 ) </span>
                  </div>
                </div>

                <div className="flex gap-1 mx-2">
                  <input
                    className="w-full h-[46px] bg-gray-100 rounded-xl p-3 flex justify-start"
                    placeholder="Search for an item"
                  />
                  <button className="w-[114px] h-[46px] px-5 py-3 bg-white rounded-[20px] border border-slate-500 border-opacity-20 text-center text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]">
                    Sort by
                  </button>
                  <button className="w-[114px] h-[46px] px-5 py-3 bg-white rounded-[20px] border border-slate-500 border-opacity-20 text-center text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]">
                    Filter
                  </button>
                </div>
                <table class="min-w-full text-start text-sm font-light text-surface dark:text-white">
                  <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th scope="col" class="px-6 py-4">
                        Order No.
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Client Name
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Mobile No.
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Items Count
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Dining
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Order Total
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Pay Method
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Details
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-neutral-200 dark:border-white/10 ">
                      <td class="whitespace-nowrap px-6 py-4">Cell</td>
                      <td class="whitespace-nowrap px-6 py-4">Cell</td>
                      <td class="whitespace-nowrap px-6 py-4">Cell</td>
                      <td class="whitespace-nowrap px-6 py-4">Cell</td>
                      <td class="whitespace-nowrap px-6 py-4">Cell</td>
                      <td class="whitespace-nowrap px-6 py-4">Cell</td>
                      <td class="whitespace-nowrap px-6 py-4">Cell</td>
                      <td class="whitespace-nowrap px-6 py-4">View</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllShiftOrders;
