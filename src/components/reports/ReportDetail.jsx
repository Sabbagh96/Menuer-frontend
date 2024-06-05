export default function ReportDetail() {
  return (
    <div className="w-4/12">
      <div className="flex justify-end items-center gap-6 self-stretch">
        <p className="flex-[1_0_0] text-naturals-gray-200 text-style-text-regular-medium">
          Report Details
        </p>
        <button>
          <img src="imgs/Close Mark.svg" alt="close" />
        </button>
      </div>
      <hr className="flex flex-col items-start gap-2.5 self-stretch px-0 py-1" />
      <div className="flex flex-col items-start gap-1 self-stretch">
        <div className="input_txt flex justify-between items-start self-stretch p-1">
          <div className="flex items-center gap-1 flex-[1_0_0]">
            <p className="text-naturals-gray-100 text-style-text-tiny-regular">
              Stuff Member
            </p>
          </div>
        </div>
        <div className="input_contant flex justify-center items-start self-stretch p-3 border border-[color:var(--color-naturals-gray-900,#E4E6E7)] rounded-xl border-solid background-naturals-white">
          <div className="flex justify-center items-center flex-[1_0_0] gap-2">
            <img
              className="w-[34px] h-[34px] shrink-0"
              src="imgs/avatar12.png"
              alt="user img"
            />
            <p className="flex max-h-12 flex-col justify-center flex-[1_0_0] self-stretch overflow-hidden text-naturals-gray-200 text-style-text-tiny-light">
              Yasmine Mohamed
            </p>
          </div>
        </div>
      </div>
      <div className="flex h-6 items-center gap-5 self-stretch">
        <hr className="h-px flex-[1_0_0] rounded-[90px] background-naturals-gray-900" />
        <span className="text-naturals-gray-600 text-style-text-tiny-regular">
          Report Details
        </span>
        <hr className="h-px flex-[1_0_0] rounded-[90px] background-naturals-gray-900" />
      </div>
      <div className="flex flex-col justify-end items-end gap-4 self-stretch">
        <div className="flex justify-between items-center self-stretch">
          <p className="text-naturals-gray-100 text-style-text-tiny-light">
            Started On :
          </p>
          <p className="text-naturals-gray-100 text-style-text-tiny-light">
            22/4/2024, 8:00 AM
          </p>
        </div>
        <div className="flex justify-between items-center self-stretch">
          <p className="text-naturals-gray-100 text-style-text-tiny-light">
            Ended On :
          </p>
          <p className="text-naturals-gray-100 text-style-text-tiny-light">
            22/4/2024, 4:00 PM
          </p>
        </div>
        <div className="flex justify-between items-center self-stretch">
          <p className="text-naturals-gray-100 text-style-text-tiny-light">
            Transactions :
          </p>

          <div className="flex items-center gap-2">
            <p className="text-naturals-gray-100 text-style-text-tiny-light">
              16
            </p>
            <a href="#" className="flex gap-3">
              <p className="text-style-text-tiny-medium text-cerise-500">
                See All
              </p>
              <button>
                <img src="imgs/Square Top Down.svg" alt="link" />
              </button>
            </a>
          </div>
        </div>
        <div className="flex justify-between items-center self-stretch">
          <p className="text-naturals-gray-100 text-style-text-tiny-light">
            Visa
          </p>
          <p className="text-naturals-gray-100 text-style-text-tiny-light">
            12 Transactions | 4,300 L.E.
          </p>
        </div>
        <div className="flex justify-between items-center self-stretch">
          <p className="text-naturals-gray-100 text-style-text-tiny-light">
            Cash Money
          </p>
          <p className="text-naturals-gray-100 text-style-text-tiny-light">
            4 Transactions | 1,200 L.E.
          </p>
        </div>
      </div>
      <hr className="flex flex-col items-start gap-2.5 self-stretch px-0 py-1" />
      <div className="flex flex-col justify-center items-start self-stretch">
        <div className="w-[316px] h-[27px]">
          <span className="text-style-text-regular-medium text-naturals-gray-200">
            Total Cash :
          </span>
          <span className="text-style-text-regular-medium text-cerise-500">
            5500 L.E.
          </span>
        </div>
      </div>
      <div className="flex justify-end items-center gap-2 self-stretch">
        <button className="flex justify-center items-center gap-2 px-5 py-3 border rounded-[20px] border-solid background-naturals-white text-naturals-gray-100 text-center text-[color:var(--Naturals-Gray-100,#191A1A)] text-style-text-tiny-medium">
          Close
        </button>
        <button classNameName="flex justify-center items-center gap-2 px-5 py-3 rounded-[20px] text-center background-cerise-10-a text-style-text-tiny-medium text-cerise-500">
          <img src="imgs/Printer.svg" alt="Printer img" />
          Reprint
        </button>
      </div>
    </div>
  );
}
