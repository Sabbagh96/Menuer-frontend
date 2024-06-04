import React from "react";

const SectionItemsById = () => {
  return (
    <div>
      <div className="w-full h-auto bg-white border border-gray-100 shadow-lg rounded-xl flex mx-auto justify-center flex-col">
        <div class="flex flex-col overflow-x-auto">
          <div class="sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div class="overflow-x-auto">
                <div className="flex gap-1 mx-2 mt-2">
                  <input
                    className="w-[550px] h-[46px] bg-gray-100 rounded-xl p-3 flex justify-start"
                    placeholder="Search for an item"
                  />
                  <button className="w-[80px] h-[46px]   bg-white rounded-[20px] border border-slate-500 border-opacity-20 text-center text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]">
                    Sort by
                  </button>
                  <button className="w-[80px] h-[46px]   bg-white rounded-[20px] border border-slate-500 border-opacity-20 text-center text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]">
                    Filter
                  </button>
                </div>
                <table class="min-w-full text-start text-sm font-light text-surface dark:text-white">
                  <thead class="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th scope="col" class="px-6 py-4 ">
                        Code
                      </th>
                      <th scope="col" class="px-6 py-4">
                        Item Name
                      </th>
                      <th scope="col" class="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="border-b border-neutral-200 dark:border-white/10 ">
                      <td class="whitespace-nowrap px-6 py-4">Mohamed</td>
                      <td class="whitespace-nowrap px-6 py-4">20/12/24</td>

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

export default SectionItemsById;
