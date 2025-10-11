import React from "react";
import InputContainer from "../../../../modules/InputContainer/InputContainer";

function Step7() {
  return (
    <div className="mx-auto w-[88%]  ">
  <div className="flex flex-col  lg:gap-y-10 mt-5 h-full">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <InputContainer
          text="تعداد مخاطبین"
          textSize="text-lg xl:text-2xl 2xl:text-3xl"
        >
          {" "}
          <input
            type="number"
            className="bg-neutral-primary/30 border-2 border-secondary text-secondary rounded-2xl px-5 py-4 text-center text-3xl placeholder:text-lg max-w-[95px] xl:max-w-[135px] h-[66px]"
          />{" "}
        </InputContainer>
        <InputContainer
          text="اعتبار باقی مانده"
          textSize="text-lg xl:text-2xl 2xl:text-3xl"
        >
          {" "}
          <input
            type="number"
            className="bg-neutral-primary/30 border-2 border-secondary text-secondary rounded-2xl px-5 py-4 text-center text-3xl placeholder:text-lg max-w-[95px] xl:max-w-[135px] h-[66px]"
          />
        </InputContainer>
      </div>
      <InputContainer
        text="لیست فایل های ضمیمه"
        extraText="(اختیاری)"
        textSize=" text-lg xl:text-2xl 2xl:text-3xl"
      >
        <label className="bg-neutral-tertiary border-2 border-secondary text-secondary rounded-2xl px-5 py-4 text-center text-3xl placeholder:text-lg placeholder:font-B-Nazanin block shrink-0  h-[66px] cursor-pointer ">
          <span className="font-B-Nazanin max-md:text-sm text-[20px]  block basis-2xl">
            در صورت نیاز می توانید تا 15 فایل آپلود کنید.
          </span>
          <input type="file" multiple className="hidden " />
        </label>
      </InputContainer>
      <InputContainer
        text=" فایل اکسل"
        textSize=" text-lg xl:text-2xl 2xl:text-3xl"
      >
        <label className="bg-neutral-tertiary border-2 border-secondary text-secondary rounded-2xl px-5 py-4 text-center text-3xl placeholder:text-lg placeholder:font-B-Nazanin block shrink-0  h-[66px] cursor-pointer ">
          <span className="font-B-Nazanin max-md:text-sm text-[20px]  block basis-2xl">
            در صورت نیاز می توانید تا 15 فایل آپلود کنید.
          </span>
          <input type="file" multiple className="hidden " />
        </label>
      </InputContainer>


        <button className="text-center  custom-btn  text-2xl/6 lg:text-[32px]/8 btn-shadow border-[1.5px] border-primary grow mt-4 md::mt-auto mx-auto block w-[262px] h-[56px] text-[40px]">
        ارسال پیام
      </button>
    
    
  </div>

    
    </div>
  );
}

export default Step7;
