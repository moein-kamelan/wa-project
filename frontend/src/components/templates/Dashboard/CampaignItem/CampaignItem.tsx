import React, { useState } from "react";
import Tooltip from "../../../modules/Dashboard/Tooltip/Tooltip";
import Popover from "../Campaigns/Popover/Popover";

type campaignItemProps = {
  campaign: any;
  page: number | string;
  setOpenModal: (value: boolean) => void;
  openPopoverId : string | null;
setopenPopoverId : (value: string | null) => void;

};

function CampaignItem({ campaign, page, setOpenModal , openPopoverId
,setopenPopoverId }: campaignItemProps) {
  const [title, setTitle] = useState<any>(campaign.title || "");

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

        <input
          type="text"
          value={title || campaign.title}
          onChange={(e) => setTitle(e.target.value)}
          className=""
        />
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

      <div className="justify-self-center">{generateIcon(campaign.status)}</div>

      <div className="h-9 relative  size-10.5 flex items-center justify-center z-[100]">
        {openPopoverId === campaign.id && (
          <Popover
            setopenPopoverId={setopenPopoverId}
            campaign={campaign}
            setOpenModal={setOpenModal}
            page={page}
          />
        )}

        <button
          className={`flex items-center justify-center relative group size-7 hover:bg-secondary rounded-full z-20 transition-all duration-200 ${
            openPopoverId === campaign.id ? "bg-secondary rounded-full" : ""
          }`}
       onClick={() =>
  setopenPopoverId(openPopoverId === campaign.id ? null : campaign.id)
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
  );
}

export default CampaignItem;
