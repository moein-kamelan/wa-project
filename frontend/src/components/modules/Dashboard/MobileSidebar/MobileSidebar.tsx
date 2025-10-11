import React from "react";
import { Link } from "react-router-dom";

type MobileSidebarPropse = {
  isOpenSidebar: boolean;
  onOpenSidebar: () => void;
};

function MobileSidebar({ isOpenSidebar, onOpenSidebar }: MobileSidebarPropse) {
  return (
    <div
      className={`lg:hidden overflow-y-auto flex-col max-w-[77px]  tablet:max-w-[177px] min-w-[110px]  grow bg-white shrink-0 z-20 transition-all duration-200 ease-in-out ${
        isOpenSidebar
          ? "fixed bottom-0 top-0 max-w-[300px]  sm:max-w-[361px] lg:hidden "
          : "max-w-0"
      }`}
    >
      <button
        className={`py-[52px] w-full flex items-center justify-center ${
          isOpenSidebar && "hidden"
        }`}
        onClick={onOpenSidebar}
      >
        <svg
          className=""
          width="61"
          height="41"
          viewBox="0 0 61 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.534454 1.72208L60.5347 1.72208"
            stroke="black"
            strokeWidth="3"
          />
          <path
            d="M0.534454 20.2475L60.5344 20.2475"
            stroke="black"
            strokeWidth="3"
          />
          <path
            d="M0.534454 38.7724L60.5344 38.7724"
            stroke="black"
            strokeWidth="3"
          />
        </svg>
      </button>

      <div
        className={`flex  flex-col  lg:max-w-[386px] grow max-h-screen  ${
          !isOpenSidebar && "hidden"
        }`}
      >
        <div className="h-[38.8%]   w-full lg:max-w-[384px] relative">
          <img
            src="/public/images/dashboard/new-campaign/sidebar-shape.png"
            alt="sidebar-shape"
            className="h-full w-full"
          />
          <div className="absolute  top-[5.27vh] right-0 left-0 mx-auto text-center">
            <div className="rounded-full bg-[#F3F3F340]/75 size-38  flex items-center justify-center mx-auto relative">
              <div className="bg-white rounded-full size-12 relative  -translate-y-2"></div>
              <svg
                className="absolute bottom-0 right-0 left-0 mx-auto"
                width="122"
                height="50"
                viewBox="0 0 130 54"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M130 24.5707C102 1.11927 48.9997 -16.3544 0 24.5707C23.4998 46.1829 37.9998 54 72.5 54C100.38 51.2518 114.503 43.4238 130 24.5707Z"
                  fill="#F3F3F3"
                />
              </svg>
            </div>

            <span className="mt-px mb-[10px] text-[24px] text-white block">
              User name
            </span>
            <span className="text-neutral-tertiary text-[22px]">
              واتساپ : منقضی شده
            </span>
          </div>
        </div>

        <div className="mt-4 lg:mt-[23px] mx-auto w-full px-7 lg:px-8 **:max-sm:text-2xl **:max-lg:text-3xl **:lg:text-[26px] xl:**:text-3xl">
          <ul
            className=" overflow-y-auto   max-h-[463px] [direction:ltr]  *:flex-row-reverse pr-2  [&::-webkit-scrollbar]:w-3
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:w-9/12
  [&::-webkit-scrollbar-track]:bg-neutral-tertiary
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#1DA45070]"
          >
            <li className="flex  items-center justify-between  h-[66px] lg:h-[71px] border-[1.5px] border-neutral-primary px-4 rounded-[5px] ">
              <Link to={""} className="text-primary">
                ایجاد کمپین جدید
              </Link>
            </li>
            <li className="flex items-center justify-between  h-[66px] lg:h-[71px] border-[1.5px] border-neutral-tertiary px-4 rounded-[5px] ">
              <span>کمپین ها</span>
              <img
                src="/public/images/dashboard/new-campaign/sidebar-arrow.png"
                alt="sidebar-arrow"
              />
            </li>
            <li className="flex items-center justify-between  h-[66px] lg:h-[71px] border-[1.5px] border-neutral-tertiary px-4 rounded-[5px] ">
              <span>گزارش ها</span>
              <img
                src="/public/images/dashboard/new-campaign/sidebar-arrow.png"
                alt="sidebar-arrow"
              />
            </li>
            <li className="flex items-center justify-between  h-[66px] lg:h-[71px] border-[1.5px] border-neutral-tertiary px-4 rounded-[5px] ">
              <span>قالب های پیام</span>
              <img
                src="/public/images/dashboard/new-campaign/sidebar-arrow.png"
                alt="sidebar-arrow"
              />
            </li>
            <li className="flex items-center justify-between  h-[66px] lg:h-[71px] border-[1.5px] border-neutral-tertiary px-4 rounded-[5px] ">
              <span>خرید و پرداخت</span>
              <img
                src="/public/images/dashboard/new-campaign/sidebar-arrow.png"
                alt="sidebar-arrow"
              />
            </li>
            <li className="flex items-center justify-between  h-[66px] lg:h-[71px] border-[1.5px] border-neutral-tertiary px-4 rounded-[5px] ">
              <Link to={""}>راهنما</Link>
            </li>
            <li className="flex items-center justify-between  h-[66px] lg:h-[71px] border-[1.5px] border-neutral-tertiary px-4 rounded-[5px] ">
              <Link to={""}>خروج از حساب کاربری</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileSidebar;
