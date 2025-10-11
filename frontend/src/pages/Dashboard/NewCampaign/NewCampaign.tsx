import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Stepper from "../../../components/templates/Dashboard/NewCapmain/Stepper/Stepper";
import Step1 from "../../../components/templates/Dashboard/NewCapmain/Step1/Step1";
import StepMessage from "../../../components/modules/Dashboard/StepMessage/StepMessage";
import Step2 from "../../../components/templates/Dashboard/NewCapmain/Step2/Step2";
import Step3 from "../../../components/templates/Dashboard/NewCapmain/Step3/Step3";
import StepButtons from "../../../components/modules/Dashboard/StepButtons/StepButtons";
import { VariableRandomValueType } from "../../../types/dashboard/types";
import SmallStepper from "../../../components/modules/Dashboard/SmallStepper/SmallStepper";
import Step4 from "../../../components/templates/Dashboard/NewCapmain/Step4/Step4";
import { validateStep1, validateStep2 } from "../../../validators/validators";
import Step5, {
  Step5Ref,
} from "../../../components/templates/Dashboard/NewCapmain/Step5/Step5";
import Step6 from "../../../components/templates/Dashboard/NewCapmain/Step6/Step6";
import Step7 from "../../../components/templates/Dashboard/NewCapmain/Step7/Step7";
import { axiosInstance } from "../../../utils/axios";
import { getSessionStorage, setSessionStorage } from "../../../utils/helpers";
import JSZip from "jszip";
import { useMutation } from "@tanstack/react-query";
import { usePostCampaign } from "../../../hooks/useCampaigns";

function NewCampaign() {
  const [direction, setDirection] = useState<"next" | "back">("next");

  const [message, setMessage] = useState(
    getSessionStorage("campaignMessageText") || ""
  );
  const [step, setStep] = useState(1);
  const { mutate: createCampaign } = usePostCampaign();
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [successMessage, setSuccessMessage] = useState<null | string>(null);
  const [uploadMessage, setUploadMessage] = useState<null | string>(null);
  const isLastStep = step === 7;
  const isFirstStep = step === 1;
  const existMessage =
    (errorMessage || successMessage || uploadMessage) !== null;
  const [uploadPercent, setUploadPercent] = useState<null | number>(null);
  const [loadedData, setLoadedData] = useState<null | number>(null);
  const [totalData, setTotalData] = useState<undefined | number>(undefined);
  const [isUploadError, setIsUploadError] = useState<boolean>(false);
  const [file, setFile] = useState<null | File>(null);
  const fileName = file && file.name;
  const fileSize = file && file.size;
  const [attachmentFiles, setAttachmentFiles] = useState<null | File[]>(null);
  const [attachmentFilesSpec, setAttachmentFilesSpec] = useState<
    { name: string; size: number }[] | null
  >(null);
  let isDuplicateAttachmentFiles: boolean = false;

  const [uploadAttachmentFilePercent, setUploadAttachmentFilePercent] =
    useState<number>(0);
  const [isUploadAttachmentReady, setIsUploadAttachmentReady] =
    useState<boolean>(false);
  const step5Ref = useRef<Step5Ref | null>(null);

  const [checkedVariables, setCheckedVaribale] = useState({
    firstName:
      getSessionStorage("campaignMessageVariables")?.firstName || false,
    lastName: getSessionStorage("campaignMessageVariables")?.lastName || false,
    link: getSessionStorage("campaignMessageVariables")?.link || false,
    date: getSessionStorage("campaignMessageVariables")?.date || false,
    number: getSessionStorage("campaignMessageVariables")?.number || false,
    company: getSessionStorage("campaignMessageVariables")?.company || false,
    discount: getSessionStorage("campaignMessageVariables")?.discount || false,
    trackingCode:
      getSessionStorage("campaignMessageVariables")?.trackingCode || false,
  });

  const variableRandomValue: VariableRandomValueType = {
    firstName: ["علی", "{{نام}}"],
    lastName: ["رحمانی", "{{نام خانوادگی}}"],
    link: ["www.shop.com/ali", "{{لینک}}"],
    date: ["۱۴۰۴/۳/۸", "{{تاریخ}}"],
    number: ["۲۰", "{{عدد}}"],
    company: ["اسنوا", "{{شرکت}}"],
    discount: ["۸۰٪", "{{تخفیف}}"],
    trackingCode: ["dfsf2", "{{کد رهگیری}}"],
  };

  const handleChangeFileInput = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    try {
      const files = e.target.files;
      if (!files || files.length === 0) return;
      setFile(files[0]);
      const file = files[0];
      console.log("file:", file);
      const formData = new FormData();
      formData.append("recipientsFile", file);

      const isValid = validateStep2(file, setErrorMessage);

      if (!isValid) {
        setIsUploadError(true);

        return;
      } else {
        setIsUploadError(false);
      }
      setUploadMessage("در حال آپلود فایل ...");

      await axiosInstance.post(
        "/api/campaigns/68e61f5b9c887771c55f86ff/recipients",
        formData,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDU2MDYxNmFlMjU1MTNlN2MzNDIxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1OTczMzA5MCwiZXhwIjoxNzYyMzI1MDkwfQ.K7UOKvIDtJI3QhN_wdg-rl2BTAWOyeoYv3DXcqIHofw",
            "Content-Type": "multipart/form-data",
          },
          onUploadProgress: (event) => {
            setTotalData(event.total);

            if (event.total) {
              const percent = Math.round((event.loaded * 100) / event.total);
              setUploadPercent(percent);
              setLoadedData(event.loaded);
            }
          },
        }
      );
      setUploadMessage(null);
      setSuccessMessage("فایل با موفقیت آپلود شد.");
      setTimeout(() => {
        setSuccessMessage(null);
      }, 3000);
    } catch (error) {
      console.log("error:", error);
      setIsUploadError(true);
      setErrorMessage("خطا در آپلود فایل. لطفا مجدد تلاش کنید.");
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  };

  const handleNextClick = async () => {
    setDirection("next");
    if (step === 1) {
      try {
        const validationResult = validateStep1(
          message,
          setErrorMessage,
          variableRandomValue,
          checkedVariables
        );

        if (!validationResult) {
          return false;
        }

        setSessionStorage("campaignMessageText", message);
        setSessionStorage("campaignMessageVariables", checkedVariables);
        createCampaign(message);

        setStep((s) => s + 1);
      } catch (error) {
        console.error("Error creating campaign:", error);
        return;
      }
    } else if (step === 2) {
      setStep((s) => s + 1);
    } else if (step === 3) {
      if (isUploadError || !file) {
        setErrorMessage("ابتدا فایل اکسل را آپلود کنید ");
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
        return;
      }
      setStep((s) => s + 1);
    } else if (step === 4) {
      try {
        if (!attachmentFiles || attachmentFiles.length === 0) {
          setStep((s) => s + 1);
          return;
        }
        setIsUploadAttachmentReady(true);

        if (attachmentFiles!.length > 15) {
          setErrorMessage("نهایتا تا ۱۵ فایل میتوانید آپلود کنید");
          setTimeout(() => {
            setErrorMessage(null);
          }, 3000);
          return;
        }

        attachmentFilesSpec?.forEach((file) => {
          isDuplicateAttachmentFiles =
            attachmentFilesSpec.length === attachmentFiles.length &&
            attachmentFiles?.every(
              (f) => f.name === file.name && f.size === file.size
            );
        });
        console.log("isDuplicateAttachmentFiles:", isDuplicateAttachmentFiles);
        if (isDuplicateAttachmentFiles) {
          setStep((s) => s + 1);
          return;
        }

        const formData = new FormData();

        if (attachmentFiles!.length > 1) {
          const zip = new JSZip();
          attachmentFiles!.forEach((file) => {
            zip.file(file.name, file);
          });

          const zipBlob = await zip.generateAsync({ type: "blob" });

          formData.append("attachment", zipBlob, "attachment.zip");
          console.log("formData:", formData);
        } else {
          formData.append("attachment", attachmentFiles![0]);
        }

        const response = await axiosInstance.post(
          "/api/campaigns/68e61f5b9c887771c55f86ff/attachment/temp",
          formData,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDU2MDYxNmFlMjU1MTNlN2MzNDIxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1OTczMzA5MCwiZXhwIjoxNzYyMzI1MDkwfQ.K7UOKvIDtJI3QhN_wdg-rl2BTAWOyeoYv3DXcqIHofw",
              "Content-Type": "multipart/form-data",
            },
            onUploadProgress: (event) => {
              if (event.total) {
                const percent = Math.round((event.loaded * 100) / event.total);
                setUploadAttachmentFilePercent(percent);
                setLoadedData(event.loaded);
              }
            },
          }
        );
        setAttachmentFilesSpec(
          attachmentFiles?.map((attachmentFile) => {
            return { name: attachmentFile.name, size: attachmentFile.size };
          })
        );
        console.log("attachmentFilesSpec:", attachmentFilesSpec);
        console.log("response => ", response);
        setStep((s) => s + 1);
      } catch (error) {
        console.log("error:", error);
        setErrorMessage("اپلود فایل با مشکل مواجه شده");
        return;
      }
    } else if (step === 5) {
      if (step5Ref.current) {
        await step5Ref.current.submitForm(); // ← فرم از بیرون سابمیت میشه
      }
    } else if (step === 6) {
      setStep((s) => s + 1);
    }
  };

  const handleSubmitClick = () => {};

  const handleRemoveCampaignClick = async () => {
    try {
      const response = await axiosInstance.delete(
        "/api/campaigns/68e61f5b9c887771c55f86ff",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDU2MDYxNmFlMjU1MTNlN2MzNDIxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1OTczMzA5MCwiZXhwIjoxNzYyMzI1MDkwfQ.K7UOKvIDtJI3QhN_wdg-rl2BTAWOyeoYv3DXcqIHofw",
          },
        }
      );

      console.log("deltedCampaign => ", response);
    } catch (error) {
      console.error("error", error);
    }
  };

  return (
    <div className="pb-5  ">
      <Stepper step={step} />
      <SmallStepper step={step} />

      <div className="pr-3 lg:pr-[22px]  w-full max-w-[93%]   ">
        <div className="flex flex-col rounded-2xl bg-white md:h-[79.5vh] overflow-y-auto pb-9  md:pb-10  relative overflow-x-hidden">
          {errorMessage && (
            <StepMessage status="error">{errorMessage}</StepMessage>
          )}
          {uploadMessage && (
            <StepMessage status="uploading">{uploadMessage}</StepMessage>
          )}
          {successMessage && (
            <StepMessage status="success">{successMessage}</StepMessage>
          )}

          <button
            className={`  mt-2 mr-4 lg:mr-4.5 lg:mt-[11px] text-2xl/6 lg:text-[25px] w-[122px] h-[33px] lg:w-[136px] lg:h-10 text-white rounded-[55px] btn-shadow bg-semantic-error ${
              existMessage && "invisible"
            } ${
              isFirstStep
                ? "disabled:bg-transparent !text-gray-black !bg-neutral-tertiary border !border-gray-black   cursor-not-allowed"
                : ""
            }`}
            onClick={handleRemoveCampaignClick}
          >
            حذف کمپین
          </button>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={step}
              initial={{ x: direction === "next" ? -100 : 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction === "back" ? 100 : -100, opacity: 0 }}
              transition={{
                duration: 0.15,
                ease: [0.25, 0.8, 0.25, 1],
              }}
              className="flex flex-col grow"
            >
              {step === 1 && (
                <Step1
                  message={message}
                  onMessageChange={setMessage}
                  checkedVariables={checkedVariables}
                  onChangeCheckedVariables={setCheckedVaribale}
                  variableRandomValue={variableRandomValue}
                />
              )}
              {step === 2 && <Step2 />}
              {step === 3 && (
                <Step3
                  onFileChange={handleChangeFileInput}
                  uploadPercent={uploadPercent}
                  loadedData={loadedData}
                  totalData={totalData}
                  isUploadError={isUploadError}
                  fileName={fileName}
                  fileSize={fileSize}
                />
              )}
              {step === 4 && (
                <Step4
                  setErrorMessage={setErrorMessage}
                  attachmentFiles={attachmentFiles}
                  setAttachmentFiles={setAttachmentFiles}
                  uploadAttachmentFilePercent={uploadAttachmentFilePercent}
                  setUploadAttachmentFilePercent={
                    setUploadAttachmentFilePercent
                  }
                  isUploadAttachmentReady={isUploadAttachmentReady}
                />
              )}
              {step === 5 && (
                <Step5
                  ref={step5Ref}
                  onSubmit={(values) => {
                    console.log("Step5 values:", values);
                    setStep((s) => s + 1);
                  }}
                />
              )}
              {step === 6 && <Step6 />}
              {step === 7 && <Step7 />}
            </motion.div>
          </AnimatePresence>
        </div>

        <StepButtons
          isFirstStep={isFirstStep}
          isLastStep={isLastStep}
          onNextClick={handleNextClick}
          onSubmitClick={handleSubmitClick}
          setStep={setStep}
          setDirection={setDirection}
        />
      </div>
    </div>
  );
}

export default NewCampaign;
