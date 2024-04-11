import React from "react";
import logo from "../assets/AddLogo.png";
import cover from "../assets/cover.png";
import { useRef, useState } from "react";
const StepFour = ({ nextPage }) => {
  const [imageOne, setImageOne] = useState("");
  const [imageTwo, setImageTwo] = useState("");

  const inputRefOne = useRef(null);
  const inputRefTwo = useRef(null);

  const handleImageOneClick = () => {
    inputRefOne.current.click();
  };
  const handleImageTwoClick = () => {
    inputRefTwo.current.click();
  };
  const handleImageOneChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImageOne(event.target.files[0]);
  };
  const handleImageTwoChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
    setImageTwo(event.target.files[0]);
  };
  return (
    <div className="relative  ">
      <div className="bg-white w-4/12 border rounded-xl min-h-96 absolute right-32 top-5 z-50 shadow-lg my-4">
        <div className="w-[374px] text-zinc-900 text-2xl font-bold font-['Alexandria'] leading-[33.60px] my-1 mx-auto  ">
          Create Bussiness
        </div>
        <div className="w-[374px] h- py-0.5 justify-center items-center inline-flex">
          <div className="w-[374px] h-0.5 relative flex-col justify-start items-start flex">
            <div className="w-[374px] h-0.5 bg-zinc-200 rounded-full" />
            <div className="w-[93.50px] h-0.5 bg-pink-600 rounded-full" />
          </div>
        </div>

        <div className="w-[374px] h-[27px] justify-start items-center gap-1 inline-flex mx-auto my-1">
          <div className="w-5 h-5 p-px justify-center items-center flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.19637 1.54163H13.8042C14.2792 1.54161 14.6825 1.5416 15.0157 1.57606C15.3706 1.61275 15.6985 1.69241 16.0083 1.88389C16.3181 2.07536 16.5361 2.33305 16.7276 2.63402C16.9074 2.91671 17.0878 3.27743 17.3002 3.70229L17.3139 3.72974C17.322 3.74594 17.3294 3.76249 17.3361 3.77934L18.5058 6.73613C18.6449 7.08795 18.7992 7.52687 18.8443 7.97603C18.8904 8.43544 18.8271 8.96174 18.4671 9.41821C18.1726 9.79159 17.7632 10.0718 17.292 10.2052V18.2083H18.3337C18.6788 18.2083 18.9587 18.4881 18.9587 18.8333C18.9587 19.1785 18.6788 19.4583 18.3337 19.4583H1.66699C1.32181 19.4583 1.04199 19.1785 1.04199 18.8333C1.04199 18.4881 1.32181 18.2083 1.66699 18.2083H2.70866V10.2053C2.23738 10.0719 1.82793 9.79163 1.53345 9.4182C1.17349 8.96173 1.11017 8.43543 1.15631 7.97602C1.20141 7.52687 1.35565 7.08795 1.49483 6.73613L2.6645 3.77934C2.67117 3.76249 2.67856 3.74594 2.68666 3.72974L2.70041 3.70225C2.91281 3.27741 3.09315 2.9167 3.27302 2.63402C3.46452 2.33305 3.68244 2.07536 3.99225 1.88389C4.30206 1.69241 4.63 1.61275 4.98484 1.57606C5.31811 1.5416 5.7214 1.54161 6.19637 1.54163ZM15.0003 9.57285C15.2802 9.86941 15.6385 10.0913 16.042 10.2054V18.2083H12.7087L12.7087 15.8898C12.7087 15.5233 12.7087 15.2072 12.6852 14.9478C12.6603 14.6734 12.6053 14.4018 12.4575 14.1458C12.2929 13.8608 12.0562 13.6241 11.7712 13.4595C11.5151 13.3117 11.2435 13.2566 10.9692 13.2318C10.7098 13.2083 10.3937 13.2083 10.0272 13.2083H9.97347C9.60699 13.2083 9.29086 13.2083 9.03145 13.2318C8.75713 13.2566 8.4855 13.3117 8.22949 13.4595C7.94446 13.6241 7.70776 13.8608 7.54319 14.1458C7.39539 14.4018 7.34034 14.6734 7.31548 14.9478C7.29197 15.2072 7.29198 15.5233 7.29199 15.8897L7.29199 18.2083H3.95866V10.2053C4.3621 10.0912 4.72031 9.86938 5.00025 9.57285C5.41808 10.0154 6.01024 10.2916 6.66692 10.2916C7.3236 10.2916 7.91577 10.0154 8.33359 9.57285C8.75141 10.0154 9.34357 10.2916 10.0003 10.2916C10.6569 10.2916 11.2491 10.0154 11.6669 9.57285C12.0847 10.0154 12.6769 10.2916 13.3336 10.2916C13.9903 10.2916 14.5824 10.0154 15.0003 9.57285ZM8.54199 18.2083H11.4587V15.9166C11.4587 15.5157 11.4581 15.2568 11.4403 15.0606C11.4233 14.873 11.3946 14.8048 11.3749 14.7708C11.3201 14.6758 11.2412 14.5969 11.1462 14.542C11.1121 14.5224 11.044 14.4937 10.8564 14.4767C10.6602 14.4589 10.4013 14.4583 10.0003 14.4583C9.5994 14.4583 9.34049 14.4589 9.14428 14.4767C8.95666 14.4937 8.88855 14.5224 8.85449 14.542C8.75948 14.5969 8.68058 14.6758 8.62573 14.7708C8.60607 14.8048 8.57738 14.873 8.56037 15.0606C8.54259 15.2568 8.54199 15.5157 8.54199 15.9166V18.2083ZM5.62525 7.99996C5.62525 8.57526 6.09162 9.04163 6.66692 9.04163C7.24222 9.04163 7.70859 8.57526 7.70859 7.99996C7.70859 7.65478 7.98841 7.37496 8.33359 7.37496C8.67876 7.37496 8.95859 7.65478 8.95859 7.99996C8.95859 8.57526 9.42496 9.04163 10.0003 9.04163C10.5756 9.04163 11.0419 8.57526 11.0419 7.99996C11.0419 7.65478 11.3217 7.37496 11.6669 7.37496C12.0121 7.37496 12.2919 7.65478 12.2919 7.99996C12.2919 8.57526 12.7583 9.04163 13.3336 9.04163C13.9089 9.04163 14.3753 8.57526 14.3753 7.99996C14.3753 7.65478 14.6551 7.37496 15.0003 7.37496C15.3454 7.37496 15.6253 7.65478 15.6253 7.99996C15.6253 8.57526 16.0916 9.04163 16.6669 9.04163C16.9986 9.04163 17.2938 8.88735 17.4856 8.64416C17.5805 8.52378 17.6264 8.35907 17.6005 8.10091C17.5736 7.83248 17.4745 7.52725 17.3434 7.19594L16.1837 4.26445C15.9606 3.81833 15.8115 3.52287 15.6729 3.30506C15.5396 3.09554 15.4441 3.00464 15.3512 2.9472C15.2582 2.88976 15.1342 2.84497 14.8872 2.81943C14.6258 2.7924 14.2875 2.79163 13.7735 2.79163H6.22711C5.7131 2.79163 5.37482 2.7924 5.1134 2.81943C4.86638 2.84497 4.74236 2.88976 4.64941 2.9472C4.55647 3.00464 4.46094 3.09554 4.32763 3.30506C4.18904 3.52287 4.03995 3.81833 3.81685 4.26445L2.65718 7.19594C2.52612 7.52725 2.42701 7.83249 2.40005 8.10092C2.37413 8.35908 2.42004 8.5238 2.51498 8.64419C2.70675 8.88736 3.00196 9.04163 3.33359 9.04163C3.90888 9.04163 4.37525 8.57526 4.37525 7.99996C4.37525 7.65478 4.65508 7.37496 5.00025 7.37496C5.34543 7.37496 5.62525 7.65478 5.62525 7.99996Z"
                fill="#191A1A"
              />
            </svg>
          </div>

          <div className="text-zinc-800 text-lg font-medium font-['Alexandria'] leading-[27px]">
            Add Bussiness Details
          </div>
        </div>
        <div className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex">
          <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-1 flex">
            <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
              Bussiness Name
            </div>
          </div>
        </div>

        <input
          className="w-[374px] h-14 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
          type="text"
          placeholder="Cavas"
        />

        <div className="w-[374px] h-[21px] px-1 justify-between items-start inline-flex mt-3">
          <div className="grow shrink basis-0 h-[21px] justify-start items-center gap-1 flex">
            <div className="text-zinc-900 text-sm font-normal font-['Alexandria'] leading-[21px]">
              Bussiness Slogan
            </div>
          </div>
          <div className="justify-center items-center gap-1 flex">
            <div className="text-center text-neutral-400 text-sm font-light font-['Alexandria'] leading-[21px]">
              Optional
            </div>
          </div>
        </div>
        <input
          className="w-[374px] h-14 p-4 bg-white rounded-2xl border border-zinc-200 justify-center items-start inline-flex"
          type="text"
          placeholder="Best Dishes Ever"
        />
        <div className="flex flex-col ">
        <div
          onClick={handleImageOneClick}
          className="flex flex-col w-32 mt-2 ml-6"
        >
          {imageOne ? (
            <img
              className="w-32 border rounded-xl"
              src={URL.createObjectURL(imageOne)}
              alt=""
            />
          ) : (
            <img className="w-32" src={logo} />
          )}
          <input
            type="file"
            ref={inputRefOne}
            onChange={handleImageOneChange}
            className="hidden"
          />
        </div>

        <div
          onClick={handleImageTwoClick}
          className="flex flex-col w-96 mt-2 ml-6"
        >
          {imageTwo ? (
            <img
              className="w-96 h-36 border rounded-xl"
              src={URL.createObjectURL(imageTwo)}
              alt=""
            />
          ) : (
            <img className="w-11/12 " src={cover} />
          )}
          <input
            type="file"
            ref={inputRefTwo}
            onChange={handleImageTwoChange}
            className="hidden"
          />
        </div>
        </div>
        <button
          onClick={nextPage}
          className="bg-[#E32B87] mb-2 text-white font-bold py-2 px-4 rounded-xl  w-10/12 mx-auto mt-5  text-center "
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default StepFour;
