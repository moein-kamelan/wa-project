import React from "react";
import { axiosInstance } from "../../../../../utils/axios";
import { useDeleteCampaign } from "../../../../../hooks/useCampaigns";
import { showWarnToast } from "../../../../../utils/tostify";

type PopoverProps = {
  setOpenModal: (value: boolean) => void;
  campaign: any;
  setopenPopoverId: (value: string) => void;
  page: number | string;
};

function Popover({
  setOpenModal,
  campaign,
  setopenPopoverId,
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
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA2MTM3NzUsImV4cCI6MTc2MzIwNTc3NX0.CPnR2tSNUBYlQtl5ht--UU6Pq-6pvw3y8yr0SR7Js2Q
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
          setOpenModal(true);
          setopenPopoverId(campaign.id);
        }}
      >
        مشاهده جزئیات
      </button>
      <button
        className="hover:bg-white/20 h-7.5"
        onClick={() => {
          if (["DRAFT", "READY", "FAILED"].includes(campaign.status)) {
            showWarnToast(
              "شما فقط مجاز به دانلود گزارش کمپین های در حال اجرا ، متوقف شده و تکمیل شده هستید"
            );
          }
          downloadReport(campaign.id);
          setopenPopoverId(campaign.id);
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
          removeCampaign(campaign.id);
          setopenPopoverId(campaign.id);
        }}
      >
        حذف کمپین
      </button>
    </div>
  );
}

export default Popover;
