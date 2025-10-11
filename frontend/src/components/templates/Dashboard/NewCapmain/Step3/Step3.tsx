import React from "react";

type Step3Props = {
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  uploadPercent: number | null;
  loadedData: number | null;
  totalData: number | undefined;
  isUploadError: boolean;
  fileName: string | null;
  fileSize: number | null;
};

function Step3({
  onFileChange,
  uploadPercent,
  loadedData,
  totalData,
  isUploadError,
  fileName,
  fileSize,
}: Step3Props) {
  return (
    <div className="mx-auto w-[88%] ">
      <div className="   rounded-[20px] bg-neutral-tertiary mt-6.5 lg:mt-8   overflow-y-auto pt-12  h-[560px] lg:h-[600px] ">
        <div className="w-[67.4%] h-[484px] rounded-2xl mx-auto shadow-[1px_2px_15px_0_rgba(0,0,0,0.25)] flex flex-col pt-6 px-4.5 bg-[#FFFEFE]/17 pb-9 max-sm:overflow-y-auto">
          <label className="shrink-0 bg-[#f8f7f7] border border-[#CFCFCF] border-dashed rounded-2xl min-h-[339px] flex flex-col items-center justify-center gap-2 md:gap-8 cursor-pointer mb-8 px-12 py-4">
            <input
              type="file"
              className="hidden"
                accept=".xlsx,.xls"
              onChange={(e) => onFileChange(e)}
            />

            <svg
              className="shrink-0 w-15 h-15 md:w-[93px] md:h-[93px]"
              viewBox="0 0 93 93"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M46.2728 30.8483V7.71191L38.5607 15.424"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M46.2728 7.71191L53.9849 15.424"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M26.9925 46.2729C11.5682 46.2729 11.5682 53.1753 11.5682 61.6972V65.5533C11.5682 76.196 11.5682 84.8336 30.8485 84.8336H61.6971C77.1213 84.8336 80.9774 76.196 80.9774 65.5533V61.6972C80.9774 53.1753 80.9774 46.2729 65.5531 46.2729C61.6971 46.2729 60.6174 47.0827 58.6122 48.5866L54.679 52.7511C50.1289 57.6098 42.4167 57.6098 37.828 52.7511L33.9334 48.5866C31.9282 47.0827 30.8485 46.2729 26.9925 46.2729Z"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.2803 46.2727V38.5605C19.2803 30.8099 19.2803 24.4088 30.8485 23.2905"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M73.2652 46.2727V38.5605C73.2652 30.8099 73.2652 24.4088 61.6971 23.2905"
                stroke="#292D32"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex flex-col items-center justify-center gap-2 text-center font-B-Nazanin">
              <span className="text-xl md:text-[32px] lg:text-4xl">
                برای آپلود فایل را بکشید و رها کنید.
              </span>
              <span className="text-xl md:text-2xl lg:text-4xl text-accent underline underline-offset-12 !font-B-Nazanin">
                و یا از اینجا انتخاب کنید
              </span>
            </div>
          </label>

          {uploadPercent === null && (
            <span className="sm:text-2xl md:text-[32px] ">
              در انتظار فایل ...
            </span>
          )}

          {uploadPercent && totalData && loadedData && (
            <div className=" w-full grid grid-cols-[1fr_auto] sm:grid-cols-[36px_auto_46px] gap-2 items-center">
              {uploadPercent < 100 && !isUploadError && (
                
                
                
                
                
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
              )}

              {uploadPercent === 100 && (
                <svg
                  className="size-10 sm:size-[46px]"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.0002 42.1666C33.5418 42.1666 42.1668 33.5416 42.1668 22.9999C42.1668 12.4583 33.5418 3.83325 23.0002 3.83325C12.4585 3.83325 3.8335 12.4583 3.8335 22.9999C3.8335 33.5416 12.4585 42.1666 23.0002 42.1666Z"
                    stroke="#25D366"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.854 23.0001L20.2782 28.4243L31.1457 17.5759"
                    stroke="#25D366"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}

              {isUploadError && (
                <svg
                  width="46"
                  height="46"
                  viewBox="0 0 46 46"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 17.25V26.8333"
                    stroke="#F44336"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M23.0005 6.46899C24.5022 6.46918 26.3394 7.50026 27.8979 10.3108L27.8989 10.3118L33.5337 20.4504L39.5132 31.2219C40.9628 33.8366 40.8901 35.885 40.1216 37.1917C39.3532 38.4979 37.5995 39.5549 34.6147 39.5549H23.228C23.1537 39.5436 23.0779 39.5354 23.0005 39.5354H11.3853C8.38958 39.5354 6.63817 38.4781 5.87256 37.1741C5.10624 35.8686 5.03511 33.8191 6.48584 31.2024L6.48682 31.2034L12.4663 20.4319L12.4653 20.4309L18.1011 10.3127L18.1021 10.3108C19.6607 7.49996 21.4987 6.46899 23.0005 6.46899Z"
                    stroke="#F44336"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M22.9893 32.5833H23.0065"
                    stroke="#F44336"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}

              {uploadPercent < 100 && !isUploadError && (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between font-inter flex-wrap-reverse gap-2">
                    <span className="text-xs 2xl:text-base">{`${
                      (loadedData || 0) / 1000
                    }/${totalData / 1000}Mb`}</span>
                    <span className="text-semantic-success text-xs 2xl:text-base">
                      {fileName}
                    </span>
                  </div>
                  <div className="bg-neutral-tertiary rounded-sm relative h-1">
                    <div
                      style={{ width: `${uploadPercent}%` }}
                      className={`bg-semantic-success  absolute left-0 top-0 bottom-0`}
                    ></div>
                  </div>
                  <div className="text-semantic-accent text-sm">
                    حداکثر 20 مگابایت
                  </div>
                </div>
              )}

              {(uploadPercent === 100 || isUploadError) && (
                <span
                  className={`${
                    isUploadError
                      ? "text-semantic-error"
                      : "text-semantic-success"
                  } text-xs md:text-2xl text-left font-inter`}
                >
                  {fileName} ({fileSize! / 1000}  MB)
                </span>
              )}

              <svg
                className={`max-sm:hidden size-9 md:size-11.5 text-[#292D32] ${
                  isUploadError && "!text-semantic-error"
                } ${uploadPercent === 100 && "!text-semantic-success"}`}
                viewBox="0 0 47 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M43.0832 21.0834V32.5834C43.0832 40.25 41.1248 42.1667 33.2915 42.1667H13.7082C5.87484 42.1667 3.9165 40.25 3.9165 32.5834V13.4167C3.9165 5.75004 5.87484 3.83337 13.7082 3.83337H16.6457C19.5832 3.83337 20.2294 4.67671 21.3457 6.13337L24.2832 9.96671C25.0273 10.925 25.4582 11.5 27.4165 11.5H33.2915C41.1248 11.5 43.0832 13.4167 43.0832 21.0834Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                />
                <path
                  opacity="0.4"
                  d="M15.6665 3.83337H33.2915C37.2082 3.83337 39.1665 5.75004 39.1665 9.58337V12.2284"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Step3;
