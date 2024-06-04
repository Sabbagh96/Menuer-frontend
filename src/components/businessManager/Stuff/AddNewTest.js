import React from "react";
import axios from "axios";

const AddNew = () => {
  const [email, setEmail] = React.useState("");
  const [jobTitle, setJobTitle] = React.useState("");
  const [selectedPages, setSelectedPages] = React.useState([]);

  const allowedPages = [
    { name: "Menu Manager", value: "menu-manager" },
    { name: "Cash System", value: "cash-system" },
    { name: "Reports", value: "reports" },
    { name: "Statistics", value: "statistics" },
    { name: "Business Manager", value: "business-manager" },
  ];

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleJobTitleChange = (event) => {
    setJobTitle(event.target.value);
  };

  const handlePageChange = (event) => {
    const pageValue = event.target.value;
    const isSelected = event.target.checked;

    if (isSelected) {
      setSelectedPages([...selectedPages, pageValue]);
    } else {
      setSelectedPages(selectedPages.filter((v) => v !== pageValue));
    }
  };

  const handleSubmit = () => {
    axios
      .post("/api/new-member", {
        email,
        jobTitle,
        allowedPages: selectedPages,
      })
      .then((response) => {
        console.log("New member created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating new member:", error);
      });
  };

  return (
    <div className="mx-auto justify-center place-content-center items-center">
      <div className="w-[960px] mt-[56.5px] mb-[56.5px] flex justify-between mx-auto px-4 ">
        <div className=" text-zinc-800  text-lg font-medium font-['Alexandria'] leading-[27px]">
          Qr Code - Customize Design
        </div>
        <button
          className="w-[150px] h-11 border shadow-2xl rounded-[20px] border-slate-500 border-opacity-20 justify-center items-center gap-2 text-zinc-900 text-sm font-medium font-['Alexandria'] leading-[21px]"
          onClick={handleSubmit}
        >
          Save Changes
        </button>
      </div>

      <div className="w-[960px] border shadow-xl rounded-xl h-[230px] mt-[56.5px]  flex justify-between mx-auto px-4 flex-col">
        <div>
          <div className="flex p-4">New Member Details</div>
          <div className="flex justify-between">
            <div className="flex flex-col p-3 ml-1">
              <div className="flex">Email Address</div>
              <input
                className="w-[626px] h-11 mt-1 bg-white rounded-xl border border-zinc-200"
                type="text"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="flex flex-col justify-start p-3">
              <div className="flex">Job Title</div>
              <input
                className="mt-1  w-[262px] h-11 p-3 bg-white rounded-xl border border-zinc-200"
                type="text"
                value={jobTitle}
                onChange={handleJobTitleChange}
              />
            </div>
          </div>
          <div className="w-[912px] h-6 mt-[25.5px] mb-[25.5px] justify-start items-center gap-5 inline-flex">
            <div className="text-neutral-400 text-sm font-normal font-['Alexandria'] leading-[21px]">
              Allowed Pages
            </div>
            <div className="grow shrink basis-0 h-px bg-zinc-200 rounded-[90px]" />
          </div>
          <div className="flex flex-wrap gap-3 p-3">
            {allowedPages.map((page) => (
              <div key={page.value} className="flex items-center">
                <input
                  id={page.value}
                  name={page.value}
                  type="checkbox"
                  value={page.value}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onChange={handlePageChange}
                />
                <label
                  htmlFor={page.value}
                  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  {page.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNew;
