import React from "react";
import Select, { components } from "react-select";
import CheckboxInput from "../../../../modules/CheckboxInput/CheckboxInput";
import Pagination from "../../../../modules/Pagination/Pagination";

type CampaignModalProps = {
  setOpenModal: (value: boolean) => void;
};

const options = [
  { value: "متعادل", label: "توقف کمپین" },
  { value: "strawberry", label: "شروع مجدد کمپین" },
  { value: "vanilla", label: "لغو کمپین" },
];

function CampaignModal({ setOpenModal }: CampaignModalProps) {
  const [isOpenFilter, setIsOpenFilter] = React.useState(false);
  
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (80 / 100) * circumference;

  const handleBackPageClick = () => {
    if (page > 1)
      setSearchParams({ page: String(page - 1), limit: String(limit) });
  };
  const handleNextPageClick = () => {
    if (pagination && page < pagination.pages)
      setSearchParams({ page: String(page + 1), limit: String(limit) });
  };

  return (
    <div className="bg-white mx-15 pt-6 pb-4 px-8  shrink-0 grow rounded-2xl shadow-[1px_4px_4px_0px_rgba(0,0,0,0.25)] -translate-y-10 relative flex flex-col">
      <button
        className="absolute left-1 top-1 z-20"
        onClick={() => setOpenModal(false)}
      >
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M32.38 4H15.62C8.34 4 4 8.34 4 15.62V32.36C4 39.66 8.34 44 15.62 44H32.36C39.64 44 43.98 39.66 43.98 32.38V15.62C44 8.34 39.66 4 32.38 4Z"
            fill="#075E54"
          />
          <path
            d="M33.5459 31.4247L26.1213 24.0001L33.5459 16.5755C34.1258 15.9956 34.1258 15.034 33.5459 14.4541C32.9661 13.8743 32.0044 13.8743 31.4246 14.4541L24 21.8788L16.5754 14.4541C15.9956 13.8743 15.0339 13.8743 14.4541 14.4541C13.8742 15.034 13.8742 15.9956 14.4541 16.5755L21.8787 24.0001L14.4541 31.4247C13.8742 32.0045 13.8742 32.9662 14.4541 33.546C15.0339 34.1259 15.9956 34.1259 16.5754 33.546L24 26.1214L31.4246 33.546C32.0044 34.1259 32.9661 34.1259 33.5459 33.546C34.1258 32.9662 34.1258 32.0045 33.5459 31.4247Z"
            fill="#075E54"
          />
        </svg>
      </button>
      <div className="grid grid-cols-2 mb-10">
        <div className="flex flex-col gap-y-4 ">
          <div className="bg-gradient-to-l from-neutral-tertiary to-secondary px-4.5 py-3 flex items-center w-fit rounded-tl-2xl translate-x-8 shadow-normal">
            <span className="text-white  text-4xl [text-shadow:_2px_2px_0_black,_-2px_-2px_0_#075E54] ml-3">
              نام کمپین
            </span>
            <span className="text-white  text-2xl [text-shadow:_2px_2px_0_black,_-2px_-2px_0_#075E54] -translate-y-2">
              (شناسه کمپین)
            </span>
          </div>
          <div className="bg-gradient-to-l from-neutral-tertiary to-secondary px-4.5 py-3 flex items-center w-fit rounded-tl-2xl translate-x-8 shadow-normal">
            <span className="  text-3xl  ml-3 text-secondary">
              وضعیت پیام ها :{" "}
            </span>
            <span className="text-white  text-3xl ">۱۰۰/۵۳</span>
          </div>

          <Select
            options={options}
            placeholder="تغییر وضعیت"
            components={{ DropdownIndicator }}
            classNames={{
              control: () =>
                "!border !border-[1.5px] !border-secondary rounded-[5px]  !cursor-pointer     shadow-sm   !outline !outline-secondary focus:shadow-0 md:w-[263px] text-xl   ",
              option: ({ isFocused, isSelected }) =>
                `px-3 py-2 cursor-pointer !text-2xl border-r-6 border-neutral-tertiary ${
                  isSelected
                    ? "bg-green-600 text-white !cursor-pointer "
                    : isFocused
                    ? "!bg-neutral-primary !text-secondary border-secondary/70 !cursor-pointer"
                    : "bg-white !text-gray-black !cursor-pointer"
                }`,
              menu: () =>
                "!mt-0 border border-gray-200 font-B-Homa rounded-lg shadow-lg bg-white overflow-hidden  max-w-[263px]",
              placeholder: () => "   !text-neutral-tertiary  text-2xl  ",
              singleValue: () => "!text-primary ",
            }}
          />
        </div>

        <div className="relative flex items-center justify-center  ">
          <svg
            viewBox="0 0 100 100"
            className="transition-all duration-300 transform rotate-[-90deg] size-[220px] "
          >
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#d9d9d9"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r={radius}
              stroke="currentColor"
              strokeWidth="8"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              strokeLinecap="round"
              className="text-semantic-success transition-all duration-500 shadow-normal"
            />
          </svg>
          <div className="absolute flex flex-col items-center text-4xl">
            <span>50%</span>
            <span className=" ">پیشرفت</span>
          </div>
        </div>
      </div>

      <div className=" flex flex-col grow  bg-neutral-tertiary/47 rounded-[20px] p-3.5 pb-0.5">
        <div className="flex items-center gap-4">

          <div className="flex flex-col relative">
            <button onClick={() => setIsOpenFilter(!isOpenFilter)} className={`border-[1.5px] border-neutral-tertiary rounded-[5px] *:h-9 !cursor-pointer     shadow-sm    focus:shadow-0 md:w-[263px] text-xl max-w-[222px]  flex items-center justify-between bg-white pr-3 pl-1.5 ${isOpenFilter ? "!border-neutral-primary" : ""}`}>
              <div className="flex items-center gap-1">
            <svg className="shrink-0 size-6.5"  viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.77148 3.6665H34.2281C36.2631 3.6665 37.9315 5.33482 37.9315 7.36982V11.4398C37.9315 12.9248 36.9964 14.7765 36.0798 15.6932" stroke="#25D366" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.2534 34.9614C26.2534 36.0797 25.52 37.5464 24.585 38.1147L22 39.783C19.5984 41.268 16.2617 39.5997 16.2617 36.6297V26.8214C16.2617 25.5197 15.5284 23.8514 14.7767 22.9347L7.73664 15.528C6.80164 14.593 6.06836 12.943 6.06836 11.8247" stroke="#25D366" stroke-width="2.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M29.4619 30.2865C32.702 30.2865 35.3286 27.66 35.3286 24.4199C35.3286 21.1798 32.702 18.5532 29.4619 18.5532C26.2218 18.5532 23.5952 21.1798 23.5952 24.4199C23.5952 27.66 26.2218 30.2865 29.4619 30.2865Z" stroke="#25D366" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M36.4286 31.3866L34.5952 29.5532" stroke="#25D366" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<span className="text-neutral-tertiary">فیلتر</span>
              </div>
              

               <svg

        className={`size-6 text-neutral-tertiary transition duration-200 ${isOpenFilter ? "rotate-180 !text-neutral-primary "  : ""}`}
        viewBox="0 0 31 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5002 27.0885L0.478805 0.761593L30.7893 0.916123L15.5002 27.0885Z"
          fill="currentColor"
        />
      </svg>
            </button>


            <div className={`absolute grid grid-cols-[auto_1fr] top-full left-0 w-full h-80 bg-black z-20 rounded-br-[6px] rounded-bl-[6px] border-[1.5px] border-neutral-tertiary overflow-hidden transition-all duration-200 max-h-0 ${isOpenFilter ? "!max-h-45" : ""}`} >
            <div className="bg-secondary flex flex-col px-2 pb-2 pt-0.5">
              <button className="text-white">وضعیت پیام</button>
              <button className="text-white">شماره مخاطب</button>
            </div>
            <div className="bg-white flex flex-col">
              
            </div>
            </div>
          </div>

           <img
            src="../../../../../public/images/excel.png"
            alt="excel"
            className="size-10"
          /> 
          
          
          {/* <Select
            options={options}
            placeholder="فیلتر"
            components={{ DropdownIndicator }}
            classNames={{
              control: () =>
                "!border !border-[1.5px] !border-secondary rounded-[5px] *:h-9 !cursor-pointer     shadow-sm   !outline !outline-secondary focus:shadow-0 md:w-[263px] text-xl max-w-[222px]   ",
              option: ({ isFocused, isSelected }) =>
                `px-3 py-2 cursor-pointer !text-2xl border-r-6 border-neutral-tertiary ${
                  isSelected
                    ? "bg-green-600 text-white !cursor-pointer "
                    : isFocused
                    ? "!bg-neutral-primary !text-secondary border-secondary/70 !cursor-pointer"
                    : "bg-white !text-gray-black !cursor-pointer"
                }`,
              menu: () =>
                "!mt-0 border border-gray-200 font-B-Homa rounded-lg shadow-lg bg-white overflow-hidden  max-w-[263px]",
              placeholder: () => "   !text-neutral-tertiary text-lg text-xl  ",
              singleValue: () => "!text-primary ",
            }}
          />

          <img
            src="../../../../../public/images/excel.png"
            alt="excel"
            className="size-10"
          /> */}
        </div>

        <div className="grow">
          <div
            className=" relative    rounded-2xl border-[3px] border-secondary   mt-3  w-full overflow-auto     [&::-webkit-scrollbar]:w-3
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:w-9/12
  [&::-webkit-scrollbar-track]:bg-neutral-secondary
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#1DA45070]"
          >
            <table className=" w-full border-collapse text-center table-auto overflow-hidden ">
              <thead className="bg-neutral-primary/80 text-gray-black *:font-B-Nazanin xl:text-2xl  text-nowrap border-b-[3px] border-secondary">
                <tr>
                  <th scope="col" className=" border border-secondary"></th>
                  <th scope="col" className=" border border-secondary">
                    <button className="flex items-center  justify-evenly  w-full p-2  ">
                      <span>شماره مخاطب</span>

                 
                    </button>
                  </th>
                  <th scope="col" className="border border-secondary ">
                    <button className="flex items-center justify-evenly w-full p-2  ">
                      <span>تاریخ ارسال</span>

                 
                    </button>
                  </th>
                  <th scope="col" className="border border-secondary ">
                    <button className="flex items-center justify-evenly w-full p-2  ">
                      <span>وضعیت</span>

                 
                    </button>
                  </th>
                  <th scope="col" className=" border border-secondary">
                    <button className="flex items-center justify-evenly w-full p-2  ">
                      <span>عملیات</span>

                   
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody className="*:hover:bg-neutral-secondary">
                <tr className="p-2 ">
                  <td className="border border-secondary p-2 ">
                    <CheckboxInput />
                  </td>
                  <td className="border border-secondary p-2  lg:text-2xl">
                    admin
                  </td>

                  <td className="border border-secondary p-2  lg:text-2xl">
                    12/6
                  </td>
                  <td className="border border-secondary p-2 ">
                    <span className="text-primary text-2xl">ارسال شد</span>
                  </td>
                  <td className="border border-secondary p-2 text-center ">
                    <button className="custom-btn    flex items-center mx-auto gap-2 py-1.5 px-2.5">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.8897 3.48991C19.6997 2.21991 21.7697 4.29991 20.5097 8.10991L17.6797 16.5999C15.7797 22.3099 12.6597 22.3099 10.7597 16.5999L9.91969 14.0799L7.39969 13.2399C1.68969 11.3399 1.68969 8.22991 7.39969 6.31991L11.9997 4.78991"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.1104 13.6501L13.6904 10.0601"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="text-white">ارسال مجدد</span>
                    </button>
                  </td>
                </tr>
                <tr className="p-2 ">
                  <td className="border border-secondary p-2 ">
                    <label className="flex items-center justify-center w-full h-full ">
                      <div className="size-8 border border-secondary rounded-xl cursor-pointer"></div>
                      <input type="checkbox" className="hidden" />
                    </label>
                  </td>
                  <td className="border border-secondary p-2  lg:text-2xl">
                    admin
                  </td>

                  <td className="border border-secondary p-2  lg:text-2xl">
                    12/6
                  </td>
                  <td className="border border-secondary p-2 ">
                    <span className="text-primary text-2xl">ارسال شد</span>
                  </td>
                  <td className="border border-secondary p-2 px-3">
                     <button className="custom-btn    flex items-center mx-auto gap-2 py-1.5 px-2.5">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.8897 3.48991C19.6997 2.21991 21.7697 4.29991 20.5097 8.10991L17.6797 16.5999C15.7797 22.3099 12.6597 22.3099 10.7597 16.5999L9.91969 14.0799L7.39969 13.2399C1.68969 11.3399 1.68969 8.22991 7.39969 6.31991L11.9997 4.78991"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.1104 13.6501L13.6904 10.0601"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="text-white">ارسال مجدد</span>
                    </button>
                  </td>
                </tr>
                <tr className="p-2 ">
                  <td className="border border-secondary p-2 px-3">
                    <label className="flex items-center justify-center w-full h-full ">
                      <div className="size-8 border border-secondary rounded-xl cursor-pointer"></div>
                      <input type="checkbox" className="hidden" />
                    </label>
                  </td>
                  <td className="border border-secondary p-2 px-3 lg:text-2xl">
                    admin
                  </td>

                  <td className="border border-secondary p-2 px-3 lg:text-2xl">
                    12/6
                  </td>
                  <td className="border border-secondary p-2 px-3">
                    <span className="text-primary text-2xl">ارسال شد</span>
                  </td>
                  <td className="border border-secondary p-2 px-3">
                     <button className="custom-btn    flex items-center mx-auto gap-2 py-1.5 px-2.5">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15.8897 3.48991C19.6997 2.21991 21.7697 4.29991 20.5097 8.10991L17.6797 16.5999C15.7797 22.3099 12.6597 22.3099 10.7597 16.5999L9.91969 14.0799L7.39969 13.2399C1.68969 11.3399 1.68969 8.22991 7.39969 6.31991L11.9997 4.78991"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.1104 13.6501L13.6904 10.0601"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>

                      <span className="text-white">ارسال مجدد</span>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <Pagination
          pagination={2}
          onClickBackPage={handleBackPageClick}
          onClickNextPage={handleNextPageClick}
        />
      </div>
    </div>
  );
}

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        className="size-7.5"
        viewBox="0 0 31 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5002 27.0885L0.478805 0.761593L30.7893 0.916123L15.5002 27.0885Z"
          fill="#D9D9D9"
        />
      </svg>
    </components.DropdownIndicator>
  );
};

export default CampaignModal;
