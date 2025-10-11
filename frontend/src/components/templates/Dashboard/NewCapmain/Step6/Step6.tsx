import React, { useState } from "react";
import { axiosInstance } from "../../../../../utils/axios";

function Step6() {
  const [isShowQrCode, setIsShowQrCode] = useState(false);
  const handleClickConnect = async () => {
    try {
      const response = await axiosInstance.post(
        "/api/campaigns/68e61f5b9c887771c55f86ff/qr-code",
        undefined,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDU2MDYxNmFlMjU1MTNlN2MzNDIxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc1OTczMzA5MCwiZXhwIjoxNzYyMzI1MDkwfQ.K7UOKvIDtJI3QhN_wdg-rl2BTAWOyeoYv3DXcqIHofw",
          },
        }
      );

      console.log("response:", response);

      setIsShowQrCode(true);
    } catch (error) {
      console.log("error in connect to whatsup", error);
    }
  };
  return (
    <>
      {!isShowQrCode ? (
        <div className="grow w-full flex flex-col items-center text-center justify-center h-9/10 px-10 pt-4 sm:px-30 md:px-50 ">
          <span className="text-[40px] font-B-Nazanin text-[#A3A3A3]">
            شما هنوز اکانت واتساپ خود را متصل نکرده اید از طریق دکمه زیر اقدام
            کنید
          </span>
          <button
            className="bg-primary text-white text-5xl rounded-[55px] px-7 pt-2 pb-3 active:bg-btn-primary-tapped hover:bg-btn-primary-hover mt-31"
            onClick={handleClickConnect}
          >
            اتصال واتساپ
          </button>
        </div>
      ) : (
        <div className=" w-full flex flex-col items-center text-center justify-center h-9/10 px-10 pt-4 sm:px-30 md:px-50 ">
          <span className="text-[40px]  text-gray-black">
            کیو آر کد زیر را اسکن کنید.
          </span>
          <img
            src="../../../../../../public/images/dashboard/new-campaign/qr-code.jpg"
            alt="QR Code"
            className="mt-10 mb-7.5"
          />
          <span className=" text-semantic-success text-5xl rounded-[55px] px-7 pt-2 pb-3  ">
            متصل شد
          </span>
        </div>
      )}
    </>
  );
}

export default Step6;
