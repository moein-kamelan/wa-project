import React from "react";
import { axiosInstance } from "../../../../utils/axios";

type StepButtonsProps = {
  isFirstStep: boolean;
  isLastStep: boolean;
  onSubmitClick: () => void;
  onNextClick: () => void;
  setStep: (s: any) => void;
  setDirection: (value: "next" | "back") => void;
};

function StepButtons({
  isFirstStep,
  isLastStep,
  onSubmitClick,
  onNextClick,
  setStep,
  setDirection,
}: StepButtonsProps) {
  const handlePrevStepClick = async () => {
    try {
      await axiosInstance.post("/api/campaigns/2/go-back", undefined, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA2MTM3NzUsImV4cCI6MTc2MzIwNTc3NX0.CPnR2tSNUBYlQtl5ht--UU6Pq-6pvw3y8yr0SR7Js2Q",
        },
      });
      setDirection("back");
      setStep((s: any) => s - 1);
    } catch (error) {
      console.error("error for navigate to back step =>", error);
    }
  };

  return (
    <div className="flex items-center justify-between  flex-wrap gap-4   mt-3.5 lg:mt-4">
      <button
        disabled={isFirstStep}
        className={`max-sm:w-full custom-btn  lg:w-[130px] lg:h-10 w-[122px] h-[33px]  text-2xl/6 lg:text-[32px]/8 btn-shadow border-[1.5px] border-primary  ${
          isFirstStep
            ? "disabled:bg-transparent !text-gray-black !border-gray-black   cursor-not-allowed"
            : ""
        }`}
        onClick={handlePrevStepClick}
      >
        قبلی
      </button>
      <button
        className="max-sm:w-full  lg:w-[130px] lg:h-10 w-[122px] h-[33px] custom-btn text-2xl/6 lg:text-[32px]/8 btn-shadow "
        onClick={isLastStep ? onSubmitClick : onNextClick}
      >
        {isLastStep ? "ذخیره" : "بعدی"}
      </button>
    </div>
  );
}

export default StepButtons;
