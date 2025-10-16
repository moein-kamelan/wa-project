import React from 'react'
import Select, { components } from "react-select";
import CheckboxInput from '../../../../modules/CheckboxInput/CheckboxInput';



type CampaignModalProps = {
    setOpenModalId : (value : null) => void
}

const options = [
  { value: "متعادل", label: "فعال" },
  { value: "strawberry", label: "غیر فعال" },
  { value: "vanilla", label: "مسدود" },
];

function CampaignModal({setOpenModalId} : CampaignModalProps) {


        const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (80 / 100) * circumference;
    
  return (
     <div className="bg-white mx-15 pt-6 pb-4 px-8  shrink-0 grow rounded-2xl shadow-[1px_4px_4px_0px_rgba(0,0,0,0.25)] -translate-y-10 relative">
          <button className="absolute left-1 top-1 z-20" onClick={() => setOpenModalId(null)}>
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M32.38 4H15.62C8.34 4 4 8.34 4 15.62V32.36C4 39.66 8.34 44 15.62 44H32.36C39.64 44 43.98 39.66 43.98 32.38V15.62C44 8.34 39.66 4 32.38 4Z" fill="#075E54"/>
<path d="M33.5459 31.4247L26.1213 24.0001L33.5459 16.5755C34.1258 15.9956 34.1258 15.034 33.5459 14.4541C32.9661 13.8743 32.0044 13.8743 31.4246 14.4541L24 21.8788L16.5754 14.4541C15.9956 13.8743 15.0339 13.8743 14.4541 14.4541C13.8742 15.034 13.8742 15.9956 14.4541 16.5755L21.8787 24.0001L14.4541 31.4247C13.8742 32.0045 13.8742 32.9662 14.4541 33.546C15.0339 34.1259 15.9956 34.1259 16.5754 33.546L24 26.1214L31.4246 33.546C32.0044 34.1259 32.9661 34.1259 33.5459 33.546C34.1258 32.9662 34.1258 32.0045 33.5459 31.4247Z" fill="#075E54"/>
</svg>

          </button>
 <div className="grid grid-cols-2 mb-20">
        <div className="flex flex-col gap-y-4 ">
          <div className="bg-gradient-to-l from-neutral-tertiary to-secondary px-4.5 py-3 flex items-center w-fit rounded-tl-2xl translate-x-8 shadow-normal">
            <span className="text-white  text-5xl [text-shadow:_2px_2px_0_black,_-2px_-2px_0_#075E54] ml-3"  >نام کمپین</span>
            <span
              className="text-white  text-2xl [text-shadow:_2px_2px_0_black,_-2px_-2px_0_#075E54] -translate-y-2"
            
            >
              (شناسه کمپین)
            </span>
          </div>
          <div className="bg-gradient-to-l from-neutral-tertiary to-secondary px-4.5 py-3 flex items-center w-fit rounded-tl-2xl translate-x-8 shadow-normal">
            <span className="  text-4xl  ml-3 text-secondary"  >وضعیت پیام ها : </span>
            <span
              className="text-white  text-4xl "
            
            >
              ۱۰۰/۵۳
            </span>
          </div>

             <Select
              options={options}
              placeholder="تغییر وضعیت"
              components={{ DropdownIndicator }}
              classNames={{
                control: () =>
                  "!border !border-[1.5px] !border-secondary rounded-[5px]  !cursor-pointer     shadow-sm   !outline !outline-secondary focus:shadow-0 md:w-[263px] text-[32px]   ",
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
                placeholder: () =>
                  "   !text-neutral-tertiary text-lg sm:text-[32px]  ",
                 singleValue: () => "!text-primary ",
              }}
            />
          
          
        </div>

<div className="relative flex items-center justify-center ">
  <svg  viewBox="0 0 100 100" className="transition-all duration-300 transform rotate-[-90deg] size-[220px] ">
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

<div className=" min-h-[350px] bg-neutral-tertiary/47 rounded-[20px] p-3.5">
<div className="flex items-center gap-4">

   <Select
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
                placeholder: () =>
                  "   !text-neutral-tertiary text-lg text-xl  ",
                 singleValue: () => "!text-primary ",
              }}
            />
          
  
  
  <img src="../../../../../public/images/excel.png" alt="excel"  className='size-10'/>

</div>

 <div className="relative    rounded-2xl border-[3px] border-secondary   mt-3  w-full overflow-auto max-h-[254px]    [&::-webkit-scrollbar]:w-3
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:w-9/12
  [&::-webkit-scrollbar-track]:bg-neutral-secondary
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#1DA45070]">
        <table className=" w-full border-collapse text-center table-auto overflow-hidden ">
          <thead className="bg-neutral-primary/80 text-gray-black *:font-B-Nazanin xl:text-2xl  text-nowrap border-b-[3px] border-secondary">
            <tr>
              <th scope="col" className=" border border-secondary"></th>
              <th scope="col" className=" border border-secondary">
                <button className="flex items-center  justify-evenly  w-full p-2  ">
                  <span>شماره مخاطب</span>

                  <svg
                    className="shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                      fill="#075E54"
                    />
                    <path
                      opacity="0.4"
                      d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                      fill="#075E54"
                    />
                  </svg>
                </button>
              </th>
              <th scope="col" className="border border-secondary ">
                <button className="flex items-center justify-evenly w-full p-2  ">
                  <span>تاریخ ارسال</span>

                  <svg
                    className="shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                      fill="#075E54"
                    />
                    <path
                      opacity="0.4"
                      d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                      fill="#075E54"
                    />
                  </svg>
                </button>
              </th>
              <th scope="col" className="border border-secondary ">
                <button className="flex items-center justify-evenly w-full p-2  ">
                  <span>وضعیت</span>

                  <svg
                    className="shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                      fill="#075E54"
                    />
                    <path
                      opacity="0.4"
                      d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                      fill="#075E54"
                    />
                  </svg>
                </button>
              </th>
              <th scope="col" className=" border border-secondary">
                <button className="flex items-center justify-evenly w-full p-2  ">
                  <span>عملیات</span>

                  <svg
                    className="shrink-0"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                      fill="#075E54"
                    />
                    <path
                      opacity="0.4"
                      d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                      fill="#075E54"
                    />
                  </svg>
                </button>
              </th>
              
            </tr>
          </thead>
          <tbody className="*:hover:bg-neutral-secondary">
            <tr className="p-2 ">
              <td className="border border-secondary p-2 ">
               <CheckboxInput/>
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
              <td className="border border-secondary p-2 ">
                <button
                  className="custom-btn  text-lg md:text-[20px] text-gray-black bg-neutral-tertiary w-[93px] h-7  "
                  onClick={() => setIsModalOpen(true)}
                >
                  جزئیات
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
                <button
                  className="custom-btn  text-lg md:text-[20px] text-gray-black bg-neutral-tertiary w-[93px] h-7  "
                  onClick={() => setIsModalOpen(true)}
                >
                  جزئیات
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
                <button
                  className="custom-btn  text-lg md:text-[20px] text-gray-black bg-neutral-tertiary w-[93px] h-7  "
                  onClick={() => setIsModalOpen(true)}
                >
                  جزئیات
                </button>
              </td>
            </tr>
       
          </tbody>
        </table>
      </div>



 


</div>
      </div> 
  
  )
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





export default CampaignModal