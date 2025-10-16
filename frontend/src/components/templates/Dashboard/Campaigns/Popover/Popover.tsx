import React from "react";
import { axiosInstance } from "../../../../../utils/axios";
import { useDeleteCampaign } from "../../../../../hooks/useCampaigns";
import {
  errorToast,
  showErrorToast,
  showWarnToast,
} from "../../../../../utils/tostify";

type PopoverProps = {
  setOpenModalId: (value: string | null) => void;
  campaign: any;
  setOpenPopoverId: (value: null) => void;
  page: number | string;
};

function Popover({
  setOpenModalId,
  campaign,
  setOpenPopoverId,
  page,
}: PopoverProps) {
  const { mutate: removeCampaign } = useDeleteCampaign(page);

  const downloadReport = async (campainId: string) => {
    try {
      const response = await axiosInstance.get(
        `api/campaigns/${campainId}/report/download`,
        {
          responseType: "blob",
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Miwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA1NDc1MjcsImV4cCI6MTc2MzEzOTUyN30.XBahbtVYe1p_Uclm1IMdyu3nqNQRqCgvSaRc7h-jZeM
`,
          },
        }
      );
      console.log("response:", response);

      const blob = new Blob([response.data], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "report.xlsx";
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.log("error in download campaign report", error);
    }
  };

  return (
    <div className="absolute bg-secondary py-1.5 rounded-[6px] text-white text-xs flex flex-col w-[80px] right-full top-0 z-50 ">
      <button
        className="hover:bg-white/20 h-7.5"
        onClick={() => {
          setOpenModalId(campaign._id);
          setOpenPopoverId(null);
        }}
      >
        مشاهده جزئیات
      </button>
      <button
        className="hover:bg-white/20 h-7.5"
        onClick={() => {
          if (campaign.status === ("draft" || "ready" || "failed")) {
            showWarnToast(
              "شما فقط مجاز به دانلود گزارش کمپین های در حال اجرا ، متوقف شده و تکمیل شده هستید"
            );
          }
          downloadReport(campaign._id);
          setOpenPopoverId(null);
        }}
      >
        دانلود گزارش
      </button>
      <button
        className="hover:bg-white/20 h-7.5"
        onClick={() => {
          if (campaign.status === "running") {
            showWarnToast("شما مجاز به حذف کمپین در حال اجرا نیستید ");
            return;
          }
          removeCampaign(campaign._id);
          setOpenPopoverId(null);
        }}
      >
        حذف کمپین
      </button>
    </div>
  );
}

export default Popover;
