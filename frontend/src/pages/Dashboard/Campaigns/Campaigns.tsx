import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import useCampaigns from "../../../hooks/useCampaigns";

function Campaigns() {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [campaigns, setCampaigns] = useState<any[] | null>(null);
  // const [pagination, setPagination] = useState<any>(null);

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 7;

  const {data } = useCampaigns(page , limit)
  const pagination = data?.pagination
  
  // useEffect(() => {
  //   try {
  //     const fetchCampaigns = async () => {
  //       const response = await axiosInstance.get(
  //         `/api/campaigns?page=${page}&limit=${limit}`,
  //         {
  //           headers: {
  //             Authorization:
  //               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDU2MDYxNmFlMjU1MTNlN2MzNDIxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1OTczMzA5MCwiZXhwIjoxNzYyMzI1MDkwfQ.K7UOKvIDtJI3QhN_wdg-rl2BTAWOyeoYv3DXcqIHofw",
  //           },
  //         }
  //       );
  //       console.log("response:", response);

  //       setCampaigns(response.data.campaigns);
  //       setPagination(response.data.pagination);
  //     };

  //     fetchCampaigns();
  //   } catch (error) {
  //     console.log("error in fetching campaigns data", error);
  //   }
  // }, [page, limit]);

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
      case "draft":
      case "ready":
      case "paused": {
        return (
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M22 0C34.1503 0 44 9.84974 44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22C0 9.84974 9.84974 0 22 0ZM16.3838 12.54C16.0612 12.5401 15.7532 12.5985 15.46 12.7158C15.1666 12.8038 14.9172 12.9509 14.7119 13.1562C14.3013 13.5962 14.008 14.0805 13.832 14.6084C13.6562 15.1068 13.627 15.6051 13.7441 16.1035V25.5195C13.7735 26.1942 13.7881 26.8693 13.7881 27.5439C13.7588 28.1891 13.8758 28.8197 14.1396 29.4355C14.3156 29.9342 14.6537 30.3307 15.1523 30.624C15.6214 30.8878 16.1051 31.0194 16.6035 31.0195C17.0142 31.0195 17.3814 30.9319 17.7041 30.7559C17.9974 30.5799 18.3053 30.3304 18.6279 30.0078C18.8626 29.7438 19.0535 29.4652 19.2002 29.1719C19.3175 28.8493 19.4052 28.512 19.4639 28.1602C19.4932 27.8082 19.5078 27.4555 19.5078 27.1035C19.4785 26.7224 19.4492 26.3558 19.4199 26.0039L19.376 16.4561V16.0596C19.376 15.7957 19.3613 15.4876 19.332 15.1357C19.2734 14.7839 19.171 14.4173 19.0244 14.0361C18.8778 13.6549 18.6721 13.3469 18.4082 13.1123C18.2029 12.9363 17.9095 12.8038 17.5283 12.7158C17.1177 12.5985 16.7358 12.54 16.3838 12.54ZM27.8682 12.54C27.5456 12.54 27.2376 12.5986 26.9443 12.7158C26.651 12.8038 26.4016 12.9509 26.1963 13.1562C25.7856 13.5963 25.4924 14.0804 25.3164 14.6084C25.1405 15.1068 25.1104 15.6051 25.2275 16.1035V25.5195C25.2569 26.1942 25.2725 26.8693 25.2725 27.5439C25.2431 28.1891 25.3601 28.8197 25.624 29.4355C25.8 29.9342 26.1372 30.3307 26.6357 30.624C27.105 30.888 27.5893 31.0195 28.0879 31.0195C28.4986 31.0195 28.8658 30.9319 29.1885 30.7559C29.4817 30.5799 29.7898 30.3303 30.1123 30.0078C30.3469 29.7439 30.537 29.4651 30.6836 29.1719C30.8009 28.8492 30.8896 28.5121 30.9482 28.1602C30.9776 27.8082 30.9922 27.4555 30.9922 27.1035C30.9629 26.7223 30.9336 26.3558 30.9043 26.0039L30.8604 16.4561V16.0596C30.8603 15.7957 30.8457 15.4876 30.8164 15.1357C30.7577 14.7838 30.6544 14.4174 30.5078 14.0361C30.3611 13.6548 30.1556 13.347 29.8916 13.1123C29.6863 12.9363 29.393 12.8038 29.0117 12.7158C28.6012 12.5986 28.22 12.5401 27.8682 12.54Z"
              fill="#2196F3"
            />
          </svg>
        );
      }
      case "running":
      case "completed": {
        return (
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 0C16.808 0 12.056 1.804 8.272 4.84C3.212 8.844 0 15.048 0 22C0 26.136 1.144 30.008 3.212 33.308C6.996 39.688 13.948 44 22 44C27.544 44 32.604 41.976 36.476 38.5C38.192 37.048 39.688 35.288 40.832 33.308C42.856 30.008 44 26.136 44 22C44 9.856 34.144 0 22 0ZM33.396 19.624L21.648 30.448C20.856 31.196 19.844 31.548 18.832 31.548C17.776 31.548 16.72 31.152 15.928 30.36L10.516 24.904C8.888 23.276 8.888 20.68 10.516 19.052C12.144 17.424 14.74 17.424 16.368 19.052L18.964 21.648L27.808 13.508C29.48 11.968 32.076 12.056 33.616 13.728C35.156 15.444 35.068 18.084 33.396 19.624Z"
              fill="#4CAF50"
            />
          </svg>
        );
      }

      case "failed": {
        return (
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.3473 16.7064C42.8192 14.5466 41.9391 12.431 40.707 10.4916C39.8709 9.08115 38.7708 7.6707 37.5827 6.43656C33.6222 2.46969 28.4737 0.309941 23.1931 0.045482C17.2084 -0.351206 11.0918 1.85262 6.47125 6.43656C2.11477 10.7561 -0.08547 16.5301 0.00253968 22.3482C0.0465445 27.8577 2.24679 33.3673 6.42725 37.5986C9.33156 40.5076 12.896 42.447 16.7244 43.3285C18.7926 43.8575 20.9928 44.1219 23.1931 43.9456C28.4297 43.7252 33.5342 41.6536 37.5387 37.5986C43.2153 31.9127 45.1515 23.9349 43.3473 16.7064ZM30.8059 30.8108C29.2218 32.3976 26.5815 32.3976 24.9973 30.8108L21.961 27.7696L19.0566 30.6786C17.4725 32.2654 14.8322 32.2654 13.248 30.6786C11.6198 29.0478 11.6198 26.4473 13.204 24.8605L16.1083 21.9515L13.292 19.2187C11.7078 17.5879 11.7078 14.9874 13.292 13.3125C14.9202 11.7257 17.5165 11.7257 19.1886 13.3125L21.9169 16.1334L24.8653 13.1803C26.4494 11.5935 29.0457 11.5935 30.6739 13.1803C32.2581 14.767 32.2581 17.4116 30.6739 18.9983L27.7696 21.9074L30.8059 24.9927C32.3901 26.5795 32.3901 29.2241 30.8059 30.8108Z"
              fill="#F44336"
            />
          </svg>
        );
      }
    }
  };

  return (
    <div className="flex flex-col h-screen ">
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

      <div className="mx-14 mb-10 flex flex-col gap-y-1.5 grow shrink-0 ">
        <div
          className="grow overflow-y-auto max-h-[602px] pl-2 [&::-webkit-scrollbar]:w-3
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:w-9/12
  [&::-webkit-scrollbar-track]:bg-neutral-secondary
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#1DA45070]"
        >
          {data?.campaigns?.map((campaign: any) => (
            <div
              key={campaign._id}
              className="bg-white px-10.5 py-[21px] grid grid-cols-[60px_1fr_1fr_1fr_24px] items-center justify-center rounded-tl-[6px] rounded-tr-[6px] text-2xl shadow-[2px_-4px_4px_0px_rgba(0,0,0,0.25)]"
            >
              <span>{campaign.title}</span>
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
                  {campaign.progress.total}/{campaign.progress.sent}
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
    </div>
  );
}

export default Campaigns;
