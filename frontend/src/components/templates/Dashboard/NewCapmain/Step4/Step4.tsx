import React from "react";
type Step4Props = {
  setErrorMessage: (value: string | null) => void;
  attachmentFiles: null | File[];
  setAttachmentFiles: (value: File[]) => void;
  uploadAttachmentFilePercent: number;
  setUploadAttachmentFilePercent: (value: number) => void;
  isUploadAttachmentReady: boolean;
};
let isDuplicateAttachmentFiles: boolean | undefined = false;
function Step4({
  setErrorMessage,
  attachmentFiles,
  setAttachmentFiles,
  uploadAttachmentFilePercent,
  setUploadAttachmentFilePercent,
  isUploadAttachmentReady,
}: Step4Props) {
  const handeFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setUploadAttachmentFilePercent(0);
    try {
      if (!e.target.files) return;
      const files = Array.from(e.target.files);

      if (files.length > 15) {
        setErrorMessage("نهایتا تا ۱۵ فایل میتوانید آپلود کنید");
        setTimeout(() => {
          setErrorMessage(null);
        }, 3000);
        return;
      }

      files.forEach((file) => {
        isDuplicateAttachmentFiles =
          files.length === attachmentFiles?.length &&
          attachmentFiles?.every(
            (f) => f.name === file.name && f.size === file.size
          );
      });
      if (isDuplicateAttachmentFiles) return;
      setAttachmentFiles(files);
      console.log("files:", files);
    } catch (error) {
      console.log("error:", error);
      setErrorMessage("اپلود فایل با مشکل مواجه شده");
    }
  };

  const handleRemoveFile = (fileToRemove: File) => {
    const newUploadedFiles = attachmentFiles!.filter(
      (file) => file !== fileToRemove
    );
    setAttachmentFiles(newUploadedFiles);
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith("image/")) {
      return (
        <img
          src={URL.createObjectURL(file)}
          alt="image"
          className="rounded-full border border-semantic-accent aspect-square p-2 max-sm:hidden"
        />
      );
    }
    if (file.type.includes("pdf")) {
      return (
        <img
          src="/images/dashboard/new-campaign/pdf.png"
          alt="pdf"
          className="max-sm:hidden size-12"
        />
      );
    }
    if (
      file.type.includes("word") ||
      file.name.endsWith(".doc") ||
      file.name.endsWith(".docx")
    ) {
      return (
        <img
          src="/images/dashboard/new-campaign/doc.png"
          alt="word"
          className="max-sm:hidden size-12"
        />
      );
    }
    if (
      file.type.includes("excel") ||
      file.name.endsWith(".xls") ||
      file.name.endsWith(".xlsx")
    ) {
      return (
        <img
          src="/images/dashboard/new-campaign/excel.png"
          alt="excel"
          className="max-sm:hidden size-12"
        />
      );
    }
    if (file.type.startsWith("audio/")) {
      return (
        <img
          src="/images/dashboard/new-campaign/voice.png"
          alt="voice"
          className="max-sm:hidden size-12"
        />
      );
    }

    return (
      <svg
        width="47"
        height="46"
        viewBox="0 0 47 46"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M43.0832 21.0834V32.5834C43.0832 40.25 41.1248 42.1667 33.2915 42.1667H13.7082C5.87484 42.1667 3.9165 40.25 3.9165 32.5834V13.4167C3.9165 5.75004 5.87484 3.83337 13.7082 3.83337H16.6457C19.5832 3.83337 20.2294 4.67671 21.3457 6.13337L24.2832 9.96671C25.0273 10.925 25.4582 11.5 27.4165 11.5H33.2915C41.1248 11.5 43.0832 13.4167 43.0832 21.0834Z"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.4"
          d="M15.6665 3.83337H33.2915C37.2082 3.83337 39.1665 5.75004 39.1665 9.58337V12.2284"
          stroke="#292D32"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <div className="mx-auto w-[88%] ">
      <div className="  flex flex-col px-10 md:px-20 lg:px-30 xl:px-35 rounded-[20px] bg-neutral-tertiary mt-6.5 lg:mt-8   overflow-y-auto py-4 md:py-9  min-h-[520px]  ">
        <div className="bg-[#FFFEFE]/17 shadow-[1px_2px_15px_0_rgba(0,0,0,0.25)] rounded-2xl p-8">
          <label className="shrink-0 bg-[#f8f7f7] border border-[#CFCFCF] border-dashed rounded-2xl   flex flex-col items-center justify-center  cursor-pointer mb-1 md:mb-5 px-6 md:px-12 py-4">
            <input
              type="file"
              className="hidden"
              multiple
              onChange={handeFileChange}
            />

            <svg
              className=" size-28 md:size-34 shrink-0"
              viewBox="0 0 193 192"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M67.6556 129.901L67.6556 137.031C67.6556 150.82 78.8515 162.015 92.6695 162.045"
                stroke="#404040"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M96.8535 120.385L96.8535 134.939C96.8535 143.012 103.365 149.523 111.438 149.523C119.51 149.523 126.022 143.012 126.022 134.939L126.022 112.017C126.022 95.9307 112.94 82.8492 96.8535 82.8492C80.7668 82.8492 67.6853 95.9307 67.6853 112.017"
                stroke="#404040"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M125.344 61.7245L125.344 54.5945C125.344 40.8059 114.149 29.6101 100.33 29.5806"
                stroke="#404040"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M96.1465 71.2407L96.1465 56.6861C96.1465 48.6133 89.6352 42.102 81.5624 42.102C73.4896 42.102 66.9784 48.6133 66.9784 56.6861L66.9784 79.6081C66.9784 95.6948 80.0598 108.776 96.1465 108.776C112.233 108.776 125.315 95.6948 125.315 79.6081"
                stroke="#404040"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className=" text-xl md:text-[32px] lg:text-4xl mt-4 leading-12 font-B-Nazanin text-center">
              برای آپلود فایل را بکشید و رها کنید.
            </span>
            <span className="  text-xl md:text-2xl lg:text-4xl text-accent underline underline-offset-10  leading-12 font-B-Nazanin text-center">
              یا از اینجا انتخاب کنید.
            </span>
            <span className="font-B-Nazanin text-[20px] mt-1">(اختیاری)</span>
          </label>

          <div className="divide-y-4 ">
            {isUploadAttachmentReady && attachmentFiles?.length && (
              <div
                className={`grid ${
                  uploadAttachmentFilePercent === 100
                    ? "grid-cols-[auto_50px]"
                    : "grid-cols-[60px_auto_50px]"
                } items-center gap-3 mb-4 p-2`}
              >
                {uploadAttachmentFilePercent < 100 && (
                  <img
                    src="../../../../../../public/images/dashboard/new-campaign/Loading.gif"
                    alt="loading"
                  />
                )}
                <div className="bg-[#c2a6a6] rounded-sm relative h-1">
                  <div
                    style={{
                      width: `${
                        isDuplicateAttachmentFiles
                          ? "100"
                          : uploadAttachmentFilePercent
                      }%`,
                    }}
                    className={`bg-semantic-success  absolute left-0 top-0 bottom-0`}
                  ></div>
                </div>
                <span className="text-3xl text-semantic-success ">
                  {uploadAttachmentFilePercent}%
                </span>
              </div>
            )}
            <div className="flex flex-col gap-3 divide-y divide-accent">
              {attachmentFiles?.map((file) => (
                <div
                  key={`${file.name}-${file.lastModified}`}
                  className=" w-full grid grid-cols-[1fr_auto] sm:grid-cols-[36px_auto_75px] gap-2 items-center pb-2"
                >
                  <button onClick={() => handleRemoveFile(file)}>
                    <svg
                      className="size-7 md:size-9"
                      viewBox="0 0 36 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M31.5 8.96997C26.505 8.47497 21.48 8.21997 16.47 8.21997C13.5 8.21997 10.53 8.36997 7.56 8.66997L4.5 8.96997"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.75 7.455L13.08 5.49C13.32 4.065 13.5 3 16.035 3H19.965C22.5 3 22.695 4.125 22.92 5.505L23.25 7.455"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M28.2751 13.71L27.3001 28.815C27.1351 31.17 27.0001 33 22.8151 33H13.1851C9.0001 33 8.8651 31.17 8.7001 28.815L7.7251 13.71"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.4951 24.75H20.4901"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.25 18.75H21.75"
                        stroke="#292D32"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between font-inter  flex-wrap gap-2">
                      <span className="text-xs 2xl:text-base">{`${
                        file.size / 1000000
                      }Mb`}</span>

                      <span className="text-semantic-success text-sm 2xl:text-base">
                        {file.name}
                      </span>
                    </div>

                    <div className="text-semantic-accent text-sm">
                      حداکثر 20 مگابایت
                    </div>
                  </div>

                  <div className="justify-self-center">{getFileIcon(file)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-2.5">
          <span className=" font-B-Nazanin text-xl md:text-[32px]">
            آپلود شده :{" "}
          </span>
          <span className="  text-accent text-xl md:text-2xl font-inter">
            {attachmentFiles?.length || 0} / 15
          </span>
        </div>
      </div>
      <div className="flex item-center  gap-1  my-2 font-B-Nazanin text-[20px]">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M12.5002 22.9168C18.2531 22.9168 22.9168 18.2531 22.9168 12.5002C22.9168 6.7472 18.2531 2.0835 12.5002 2.0835C6.7472 2.0835 2.0835 6.7472 2.0835 12.5002C2.0835 18.2531 6.7472 22.9168 12.5002 22.9168Z"
            fill="#2196F3"
          />
          <path
            d="M12.5 14.3231C12.9271 14.3231 13.2812 13.9689 13.2812 13.5418V8.3335C13.2812 7.90641 12.9271 7.55225 12.5 7.55225C12.0729 7.55225 11.7188 7.90641 11.7188 8.3335V13.5418C11.7188 13.9689 12.0729 14.3231 12.5 14.3231Z"
            fill="#2196F3"
          />
          <path
            d="M13.4585 16.271C13.4064 16.146 13.3335 16.0314 13.2397 15.9272C13.1356 15.8335 13.021 15.7606 12.896 15.7085C12.646 15.6043 12.3543 15.6043 12.1043 15.7085C11.9793 15.7606 11.8647 15.8335 11.7606 15.9272C11.6668 16.0314 11.5939 16.146 11.5418 16.271C11.4897 16.396 11.4585 16.5314 11.4585 16.6668C11.4585 16.8022 11.4897 16.9377 11.5418 17.0627C11.5939 17.1981 11.6668 17.3022 11.7606 17.4064C11.8647 17.5002 11.9793 17.5731 12.1043 17.6252C12.2293 17.6772 12.3647 17.7085 12.5002 17.7085C12.6356 17.7085 12.771 17.6772 12.896 17.6252C13.021 17.5731 13.1356 17.5002 13.2397 17.4064C13.3335 17.3022 13.4064 17.1981 13.4585 17.0627C13.5106 16.9377 13.5418 16.8022 13.5418 16.6668C13.5418 16.5314 13.5106 16.396 13.4585 16.271Z"
            fill="#2196F3"
          />
        </svg>
        <span className={"text-accent max-sm:text-sm"}>
          این فایل/فایل ها برای تمامی کمپین ارسال خواهد شد.
        </span>
      </div>
      <div className="flex item-center  gap-1  font-B-Nazanin text-[20px]">
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.4"
            d="M12.5002 22.9168C18.2531 22.9168 22.9168 18.2531 22.9168 12.5002C22.9168 6.7472 18.2531 2.0835 12.5002 2.0835C6.7472 2.0835 2.0835 6.7472 2.0835 12.5002C2.0835 18.2531 6.7472 22.9168 12.5002 22.9168Z"
            fill="#2196F3"
          />
          <path
            d="M12.5 14.3231C12.9271 14.3231 13.2812 13.9689 13.2812 13.5418V8.3335C13.2812 7.90641 12.9271 7.55225 12.5 7.55225C12.0729 7.55225 11.7188 7.90641 11.7188 8.3335V13.5418C11.7188 13.9689 12.0729 14.3231 12.5 14.3231Z"
            fill="#2196F3"
          />
          <path
            d="M13.4585 16.271C13.4064 16.146 13.3335 16.0314 13.2397 15.9272C13.1356 15.8335 13.021 15.7606 12.896 15.7085C12.646 15.6043 12.3543 15.6043 12.1043 15.7085C11.9793 15.7606 11.8647 15.8335 11.7606 15.9272C11.6668 16.0314 11.5939 16.146 11.5418 16.271C11.4897 16.396 11.4585 16.5314 11.4585 16.6668C11.4585 16.8022 11.4897 16.9377 11.5418 17.0627C11.5939 17.1981 11.6668 17.3022 11.7606 17.4064C11.8647 17.5002 11.9793 17.5731 12.1043 17.6252C12.2293 17.6772 12.3647 17.7085 12.5002 17.7085C12.6356 17.7085 12.771 17.6772 12.896 17.6252C13.021 17.5731 13.1356 17.5002 13.2397 17.4064C13.3335 17.3022 13.4064 17.1981 13.4585 17.0627C13.5106 16.9377 13.5418 16.8022 13.5418 16.6668C13.5418 16.5314 13.5106 16.396 13.4585 16.271Z"
            fill="#2196F3"
          />
        </svg>
        <span className={"text-accent max-sm:text-sm"}>
          آپلود فایل در این بخش اختیاری است.
        </span>
      </div>
    </div>
  );
}

export default Step4;
