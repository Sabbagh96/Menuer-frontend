import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAuthUser } from "../../../helper/Storage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ActiveMembers = () => {
  const [staffs, setStaffs] = useState([]);
  const navigate = useNavigate();
  const auth = getAuthUser();

  useEffect(() => {
    axios
      .get(
        "http://localhost:4000/menuer/business/dashboard/businessManger/staff-member/active-members",
        {
          headers: {
            Authorization: `Bearer ${auth.data.token}`,
          },
        }
      )
      .then((response) => {
        setStaffs(response.data.staffs);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [auth.data.token]);

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
        <div className="flex flex-col overflow-x-auto">
          <div className="sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
              <div className="overflow-x-auto">
                <div className="flex gap-1 mx-2 mt-2">
                  <input
                    className="w-[550px] h-[46px] bg-gray-100 rounded-xl p-3 flex justify-start"
                    placeholder="Search for an item"
                  />
                  <button className="w-[114px] h-[46px]   bg-white rounded-[20px] border border-slate-500 border-opacity-20 text-center text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]">
                    Sort by
                  </button>
                  <button className="w-[114px] h-[46px]   bg-white rounded-[20px] border border-slate-500 border-opacity-20 text-center text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]">
                    Filter
                  </button>
                </div>
                <table className="min-w-full text-start text-sm font-light text-surface dark:text-white">
                  <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
                    <tr>
                      <th scope="col" className="px-6 py-4">
                        Staff Member
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Added On
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Email Address
                      </th>
                      <th scope="col" className="px-6 py-4">
                        Job Title
                      </th>
                      <th scope="col" className="px-6 py-4"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {staffs.map((staff) => (
                      <tr
                        key={staff._id}
                        className="border-b border-neutral-200 dark:border-white/10"
                      >
                        <td className="whitespace-nowrap px-6 py-4">
                          {staff.user_id.first_name} {staff.user_id.last_name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {new Date(staff.createdAt).toLocaleDateString()}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {staff.staff_email}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {staff.job_title}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <button>Manage</button>
                        </td>
                      </tr>
                    ))}
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
