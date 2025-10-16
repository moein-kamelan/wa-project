import React from "react";

import { Link } from "react-router-dom";

type ReportsHeaderProps = {
  title: string;
};



function ReportsHeader({ title }: ReportsHeaderProps) {
  return (
    <div className="flex items-center justify-between pr-3 pl-11.5 mb-3">
      <div className="relative">
        <svg
          width="389"
          height="126"
          viewBox="0 0 389 126"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1503_2003)">
            <path
              d="M2 -1.33514e-05C2 -8.83657 9.16344 -16 18 -16H192.5H367C375.837 -16 383 -8.83656 383 -9.53674e-07V75.5085C383 82.2002 378.844 88.2094 372.518 90.3925C267.053 126.792 147.795 127.757 13.4913 89.9593C6.66875 88.0392 2 81.7786 2 74.691V-1.33514e-05Z"
              fill="#075E54"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1503_2003"
              x="0"
              y="-16"
              width="389"
              height="142"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dx="2" dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1503_2003"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1503_2003"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <span className="absolute right-0 left-0 top-6 mx-auto text-4xl text-center text-white text-shadow-[2px_4px_4px_rgb(255,255,255,0.25)]">
          {title}
        </span>
      </div>

      <Link
        to={"/dashboard/new-campaign"}
        className="block custom-btn py-3 px-5 text-[28px] "
        
      >
        + ایجاد کمپین
      </Link>
    </div>
  );
}

export default ReportsHeader;
