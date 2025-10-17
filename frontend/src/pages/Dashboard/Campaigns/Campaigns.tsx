import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
// import useCampaigns from "../../../hooks/useCampaigns";
import { axiosInstance } from "../../../utils/axios";
import { useCampaigns } from "../../../hooks/useCampaigns";
import Tooltip from "../../../components/modules/Dashboard/Tooltip/Tooltip";
import Popover from "../../../components/templates/Dashboard/Campaigns/Popover/Popover.js";
import CampaignModal from "../../../components/templates/Dashboard/Campaigns/CampaignModal/CampaignModal.js";
import CampaignItem from "../../../components/templates/Dashboard/CampaignItem/CampaignItem.js";

function Campaigns() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [campaigns, setCampaigns] = useState<any[] | null>(null);
  // const [pagination, setPagination] = useState<any>(null);
  
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 7;

  const { data } = useCampaigns(page, limit);
  const pagination = data?.pagination;
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openPopoverId, setopenPopoverId] = useState<string | null>(null);
  

//   const [title, setTitle] = useState<any>(data?.campaigns?.title || "");

//   useEffect(() => {
//   if (data?.campaigns?.title) {
//     setTitle(data.campaigns.title);
//   }
// }, [data]);

  const handleBackPageClick = () => {
    if (page > 1)
      setSearchParams({ page: String(page - 1), limit: String(limit) });
  };
  const handleNextPageClick = () => {
    if (pagination && page < pagination.pages)
      setSearchParams({ page: String(page + 1), limit: String(limit) });
  };



  return (
    <div className="flex flex-col h-screen overflow-auto relative">
      <div
        className={`inset-0 absolute bg-secondary/35 transition-all duration-500 ${
          openModal !== false ? "visible opacity-100" : "invisible opacity-0"
        }`}
      ></div>
      <div className="flex items-center justify-between pr-3 pl-11.5 mb-[92px] shrink-0">
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
          <span className="absolute right-0 left-0 top-6 mx-auto text-5xl text-center text-white text-shadow-[2px_4px_4px_rgb(255,255,255,0.25)]">
            همه ی کمپین ها
          </span>
        </div>

        <Link
          to={"/dashboard/new-campaign"}
          className="block custom-btn py-3 px-5 text-[28px] "
        >
          + ایجاد کمپین
        </Link>
      </div>

      {data?.campaigns?.length === 0 && (
        <div className="flex items-center gap-4 bg-[#FFFCFC]/88 py-5 px-4">
          <svg
            width="42"
            height="42"
            viewBox="0 0 42 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M21 38.5C30.665 38.5 38.5 30.665 38.5 21C38.5 11.335 30.665 3.5 21 3.5C11.335 3.5 3.5 11.335 3.5 21C3.5 30.665 11.335 38.5 21 38.5Z"
              fill="#292D32"
            />
            <path
              d="M21 22.75C20.02 22.75 19.25 21.9625 19.25 21C19.25 20.0375 20.0375 19.25 21 19.25C21.9625 19.25 22.75 20.0375 22.75 21C22.75 21.9625 21.98 22.75 21 22.75Z"
              fill="#292D32"
            />
            <path
              d="M28 22.75C27.02 22.75 26.25 21.9625 26.25 21C26.25 20.0375 27.0375 19.25 28 19.25C28.9625 19.25 29.75 20.0375 29.75 21C29.75 21.9625 28.98 22.75 28 22.75Z"
              fill="#292D32"
            />
            <path
              d="M14 22.75C13.02 22.75 12.25 21.9625 12.25 21C12.25 20.0375 13.0375 19.25 14 19.25C14.9625 19.25 15.75 20.0375 15.75 21C15.75 21.9625 14.98 22.75 14 22.75Z"
              fill="#292D32"
            />
          </svg>

          <span className="text-[#A3A5A7] text-[32px]">
            هنوز هیچ کمپینی تشکیل نشده است.
          </span>
        </div>
      )}

      {openModal ? (
        <CampaignModal setOpenModal={setOpenModal} />
      ) : (
        <div className="mx-14 mb-10 flex flex-col gap-y-1.5 grow shrink-0 ">
          <div
            className="grow  max-h-[602px] pl-16  [&::-webkit-scrollbar]:w-3
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:w-9/12
  [&::-webkit-scrollbar-track]:bg-neutral-secondary
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#1DA45070] "
          >
            {data?.campaigns?.map((campaign: any) => (
              <CampaignItem key={campaign.id} campaign={campaign}  page={page} 
setOpenModal={setOpenModal} openPopoverId={openPopoverId}
setopenPopoverId={setopenPopoverId}/>
            ))}
          </div>
          <div className="flex items-center bg-white/55 blur-[150] rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] mx-auto">
            <button onClick={handleBackPageClick}>
              <svg
                className="rotate-y-180"
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1493_1722)">
                  <path
                    opacity="0.4"
                    d="M24.6815 19.5249L36.2544 28.2103V41.0666C36.2544 43.2666 33.5961 44.3666 32.0377 42.8082L20.1669 30.9374C18.2648 29.0353 18.2648 25.9416 20.1669 24.0395L24.6815 19.5249Z"
                    fill="#25D366"
                  />
                  <path
                    d="M36.2544 13.9334V28.2105L24.6815 19.5251L32.0377 12.1688C33.5961 10.6334 36.2544 11.7334 36.2544 13.9334Z"
                    fill="#25D366"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1493_1722"
                    x="-4"
                    y="0"
                    width="63"
                    height="63"
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
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1493_1722"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1493_1722"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>

            <span className="text-secondary text-xl">
              صفحه {pagination?.page} از {pagination?.pages}
            </span>
            <button onClick={handleNextPageClick}>
              <svg
                width="55"
                height="55"
                viewBox="0 0 55 55"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1493_1722)">
                  <path
                    opacity="0.4"
                    d="M24.6815 19.5249L36.2544 28.2103V41.0666C36.2544 43.2666 33.5961 44.3666 32.0377 42.8082L20.1669 30.9374C18.2648 29.0353 18.2648 25.9416 20.1669 24.0395L24.6815 19.5249Z"
                    fill="#25D366"
                  />
                  <path
                    d="M36.2544 13.9334V28.2105L24.6815 19.5251L32.0377 12.1688C33.5961 10.6334 36.2544 11.7334 36.2544 13.9334Z"
                    fill="#25D366"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1493_1722"
                    x="-4"
                    y="0"
                    width="63"
                    height="63"
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
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1493_1722"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1493_1722"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Campaigns;
