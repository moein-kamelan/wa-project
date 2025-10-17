import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
// import useCampaigns from "../../../hooks/useCampaigns";
import { axiosInstance } from "../../../utils/axios";
import { useCampaigns } from "../../../hooks/useCampaigns";
import Tooltip from "../../../components/modules/Dashboard/Tooltip/Tooltip";
import Popover from "../../../components/templates/Dashboard/Campaigns/Popover/Popover.js";
import CampaignModal from "../../../components/templates/Dashboard/Campaigns/CampaignModal/CampaignModal.js";

function Campaigns() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [campaigns, setCampaigns] = useState<any[] | null>(null);
  // const [pagination, setPagination] = useState<any>(null);
  const [openPopoverId, setOpenPopoverId] = useState<string | null>(null);
  const [openModalId, setOpenModalId] = useState<string | null>(null);
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 7;

  const { data } = useCampaigns(page, limit);
  const pagination = data?.pagination;

  const handleBackPageClick = () => {
    if (page > 1)
      setSearchParams({ page: String(page - 1), limit: String(limit) });
  };
  const handleNextPageClick = () => {
    if (pagination && page < pagination.pages)
      setSearchParams({ page: String(page + 1), limit: String(limit) });
  };

  const generateIcon = (status: string) => {
    switch (status) {
      case "DRAFT":
      case "READY": {
        return (
          <div className="flex items-center justify-center btn-shadow py-1 bg-neutral-tertiary rounded-[55px] w-[136px] h-10.5 text-gray-black text-xl text-center">
            در انتظار ارسال
          </div>
        );
      }

      case "COMPLETED": {
        return (
          <div className="text-white bg-primary btn-shadow py-1 rounded-[55px] text-2xl w-[136px] h-10.5 text-center">
            ارسال شد
          </div>
        );
      }
      case "RUNNING": {
        return (
          <div
            className="flex items-center justify-center btn-shadow  border border-primary rounded-[55px] text-2xl text-white [-webkit-text-stroke:0.8px_#25d366]
               w-[136px] h-10.5 relative z-20 overflow-hidden text-nowrap text-center"
          >
            در حال ارسال
            <div className="absolute bg-primary  right-[80%] rounded-[55px] top-0 bottom-0 w-full -z-10"></div>
          </div>
        );
      }
      case "PAUSED":
      case "FAILED": {
        return (
          <div className="flex items-center justify-center btn-shadow py-1 bg-semantic-error rounded-[55px] w-[136px] h-10.5 text-white text-xl text-center ">
            ارسال ناموفق
          </div>
        );
      }
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-auto relative">
      <div
        className={`inset-0 absolute bg-secondary/35 transition-all duration-500 ${
          openModalId !== null ? "visible opacity-100" : "invisible opacity-0"
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

      {openModalId ? (
        <CampaignModal setOpenModalId={setOpenModalId} />
      ) : (
        <div className="mx-14 mb-10 flex flex-col gap-y-1.5 grow shrink-0 ">
          <div
            className="grow overflow-y-auto max-h-[602px] pl-16  [&::-webkit-scrollbar]:w-3
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:w-9/12
  [&::-webkit-scrollbar-track]:bg-neutral-secondary
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#1DA45070] "
          >
            {data?.campaigns?.map((campaign: any) => (
              <div
                key={campaign.id}
                className="bg-white px-10.5 py-[21px] grid grid-cols-[1fr_1fr_1fr_1fr_42px] items-center justify-center rounded-tl-[6px] rounded-tr-[6px] text-2xl shadow-[2px_-4px_4px_0px_rgba(0,0,0,0.25)] hover:!shadow-[8px_0px_20px_0px_rgba(7,94,84,1)] hover:scale-101 transition duration-300"
              >
                <div className="flex items-center gap-2">
                  <svg
                    className="shrink-0"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3332 10.8333V12.4999C18.3332 16.6666 16.6665 18.3333 12.4998 18.3333H7.49984C3.33317 18.3333 1.6665 16.6666 1.6665 12.4999V11.2333"
                      stroke="#25D366"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.1665 1.66675H7.49984C3.33317 1.66675 1.6665 3.33341 1.6665 7.50008"
                      stroke="#25D366"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.6082 7.5083L17.4832 6.6333C18.6166 5.49997 19.1499 4.1833 17.4832 2.51663C15.8166 0.849966 14.4999 1.3833 13.3666 2.51663L6.7999 9.0833C6.5499 9.3333 6.2999 9.82497 6.2499 10.1833L5.89157 12.6916C5.75823 13.6 6.3999 14.2333 7.30823 14.1083L9.81657 13.75C10.1666 13.7 10.6582 13.45 10.9166 13.2L13.5666 10.55L14.1749 9.94163"
                      stroke="#25D366"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.4248 3.45825C12.9831 5.44992 14.5415 7.00825 16.5415 7.57492"
                      stroke="#25D366"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>{campaign.title}</span>
                </div>
                <div className="flex items-center justify-center gap-x-1.5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22 12.98V15.5C22 19 20 20.5 17 20.5H7"
                      stroke="#25D366"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5"
                      stroke="#25D366"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                      stroke="#25D366"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 16.5H8"
                      stroke="#25D366"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12.5H5"
                      stroke="#25D366"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>
                    {campaign.deliveredCount}/{campaign.totalRecipients}
                  </span>
                </div>

                <div className="flex items-center justify-center gap-x-1.5">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 13.01V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5V16.36C20.27 15.53 19.2 15 18 15C15.79 15 14 16.79 14 19C14 19.75 14.21 20.46 14.58 21.06C14.79 21.42 15.06 21.74 15.37 22H8C4.5 22 3 20 3 17"
                      stroke="#25D366"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 2V5"
                      stroke="#25D366"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16 2V5"
                      stroke="#25D366"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.5 9.08984H20.5"
                      stroke="#25D366"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 23C20.2091 23 22 21.2091 22 19C22 16.7909 20.2091 15 18 15C15.7909 15 14 16.7909 14 19C14 21.2091 15.7909 23 18 23Z"
                      stroke="#25D366"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M19.4898 19.0498H16.5098"
                      stroke="#25D366"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 17.5898V20.5798"
                      stroke="#25D366"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.9955 13.7002H12.0045"
                      stroke="#25D366"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.29431 13.7002H8.30329"
                      stroke="#25D366"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.29431 16.7002H8.30329"
                      stroke="#25D366"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span>
                    {new Date(campaign.createdAt).toLocaleString("fa-IR", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <div className="justify-self-center">
                  {generateIcon(campaign.status)}
                </div>

                <div className="h-9 relative  size-10.5 flex items-center justify-center z-[100]">
                  {openPopoverId === campaign.id && (
                    <Popover
                      setOpenPopoverId={setOpenPopoverId}
                      campaign={campaign}
                      setOpenModalId={setOpenModalId}
                      page={page}
                    />
                  )}

                  <button
                    className={`flex items-center justify-center relative group size-7 hover:bg-secondary rounded-full z-20 transition-all duration-200 ${
                      openPopoverId === campaign.id
                        ? "bg-secondary rounded-full"
                        : ""
                    }`}
                    onClick={() =>
                      setOpenPopoverId((prev) =>
                        prev === campaign.id ? null : campaign.id
                      )
                    }
                  >
                    <Tooltip>جزئیات</Tooltip>

                    <svg
                      className=""
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17C10.9 17 10 17.9 10 19Z"
                        stroke="#25D366"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3C10.9 3 10 3.9 10 5Z"
                        stroke="#25D366"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10C10.9 10 10 10.9 10 12"
                        stroke="#25D366"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
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
