import React from "react";
import { Link } from "react-router-dom";

const ActiveMembers = () => {
  return (
    <div>
      <div className="flex justify-between p-6 w-[800px] mx-auto">
        <div>Stuff Members - Active Members</div>
        <div>
          <Link to={"/addnew"}>
            <button>Add New</button>
          </Link>
        </div>
      </div>
      <div className="w-[800px] h-auto bg-white border border-gray-100 shadow-lg rounded-xl flex mx-auto justify-center flex-col">
        <div class="flex flex-col overflow-x-auto">
          <div class="sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-x-auto">
                <div className="flex gap-1 mx-2 mt-2">
                  <input
                    className="w-[550px] h-[46px] bg-gray-100 rounded-xl p-3 flex justify-start"
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
                      <th scope="col" class="px-6 py-4 ">
                        Stuff Member
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Added On
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Email Address
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Job Title
                      </th>
                      <th scope="col" class="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-neutral-200 dark:border-white/10 ">
                      <td class="whitespace-nowrap px-6 py-4">Mohamed</td>
                      <td class="whitespace-nowrap px-6 py-4">20/12/24</td>
                      <td class="whitespace-nowrap px-6 py-4">
                        mohameddasdasd@gmail.cim
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">Cashier</td>
                      <td class="whitespace-nowrap px-6 py-4">
                        <button>Manage</button>
                      </td>
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

export default ActiveMembers;
