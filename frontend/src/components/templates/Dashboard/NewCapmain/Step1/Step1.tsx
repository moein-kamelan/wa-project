import React, { useMemo } from "react";
import { VariableRandomValueType } from "../../../../../types/dashboard/types";

type Step1Props = {
  message: string;
  onMessageChange: (value: string) => void;
  checkedVariables: {
    firstName: boolean;
    lastName: boolean;
    link: boolean;
    date: boolean;
    number: boolean;
    company: boolean;
    discount: boolean;
    trackingCode: boolean;
  };
  onChangeCheckedVariables: any;
  variableRandomValue: VariableRandomValueType;
};

function Step1({
  message,
  onMessageChange,
  onChangeCheckedVariables,
  checkedVariables,
  variableRandomValue,
}: Step1Props) {
  const previewMessage = useMemo(() => {
    let previewMessage = message;

    const selectedVariables: Partial<typeof variableRandomValue> = {};
    for (const feild in checkedVariables) {
      const key = feild as keyof typeof checkedVariables;

      if (checkedVariables[key]) {
        selectedVariables[key] = variableRandomValue[key];
      }
    }

    for (const feild in selectedVariables) {
      const key = feild as keyof typeof selectedVariables;
      const variable = selectedVariables[key];
      if (variable && message.includes(variable[1])) {
        previewMessage = previewMessage.replace(variable[1], variable[0]);
      }
    }
    return previewMessage;
  }, [message, checkedVariables, variableRandomValue]);

  return (
    <div className="mx-auto w-[88%]">
      <div>
        <div className=" h-[74.64%]  rounded-[20px] bg-[#EEEEEE] mt-6.5 lg:mt-8 pt-5 pb-9 lg:pb-[42px] lg:pt-6 overflow-y-auto">
          <div className="w-[94%] mx-auto font-B-Nazanin ">
            <textarea
              value={message}
              onChange={(e) => onMessageChange(e.target.value)}
              name=""
              id=""
              className="w-full h-[160px] lg:h-[180px] text-[22px] bg-white rounded-[22px] outline-0 pr-[21px] pt-[21px] resize-none"
              placeholder="ایجاد پیام متنی کمپین..."
            ></textarea>

            <span className="text-semantic-accent text-lg lg:text-2xl  my-3 lg:mt-6 lg:mb-3 mr-4 block">
              پیش نمایش پیام
            </span>
            <textarea
              value={previewMessage}
              name=""
              id=""
              className="w-full h-[160px] lg:h-[180px] text-[22px] bg-neutral-tertiary text-black/60 rounded-[22px] outline-0 pr-[21px] pt-[21px] resize-none"
              placeholder="متن پیام شما اینجا نمایش داده می شود."
              readOnly
            ></textarea>
          </div>
        </div>
      </div>

      <div className="max-md:grid max-md:items-end grid-cols-1 mobile:grid-cols-2 md:flex items-center gap-4 lg:justify-end justify-between lg:gap-x-15  mt-2 lg:mt-4 **:text-nowrap **:max-md:text-sm flex-wrap  gap-y-2 justify-items-center">
        <label className="flex items-center gap-1 w-[106px] justify-end ">
          <span className="[text-shadow:0_4px_4px_rgba(7,94,84,0.55)]">
            {"{{لینک}}"}
          </span>
          {checkedVariables.link ? (
            <img
              src="/public/images/dashboard/new-campaign/checkbox-checked.png"
              alt="checkbox"
              className="size-8 max-lg:size-6"
            />
          ) : (
            <img
              src="/public/images/dashboard/new-campaign/checkbox-not-checked.png"
              alt="checkbox"
              className="size-8 max-lg:size-6"
            />
          )}

          <input
            type="checkbox"
            className="hidden"
            onChange={(e) =>
              onChangeCheckedVariables((prevState: any) => ({
                ...prevState,
                link: e.target.checked,
              }))
            }
          />
        </label>
        <label className="flex items-center gap-1 w-[106px] justify-end ">
          <span className="[text-shadow:0_4px_4px_rgba(7,94,84,0.55)]">
            {"{{تاریخ}}"}
          </span>
          {checkedVariables.date ? (
            <img
              src="/public/images/dashboard/new-campaign/checkbox-checked.png"
              alt="checkbox"
              className="size-8 max-lg:size-6"
            />
          ) : (
            <img
              src="/public/images/dashboard/new-campaign/checkbox-not-checked.png"
              alt="checkbox"
              className="size-8 max-lg:size-6"
            />
          )}
          <input
            type="checkbox"
            className="hidden"
            onChange={(e) =>
              onChangeCheckedVariables((prevState: any) => ({
                ...prevState,
                date: e.target.checked,
              }))
            }
          />
        </label>

        <label className="flex items-center gap-1 w-[106px] justify-end ">
          <span className="[text-shadow:0_4px_4px_rgba(7,94,84,0.55)]">
            {"{{نام خانوادگی}}"}
          </span>
          {checkedVariables.lastName ? (
            <img
              src="/public/images/dashboard/new-campaign/checkbox-checked.png"
              alt="checkbox"
              className="size-8 max-lg:size-6"
            />
          ) : (
            <img
              src="/public/images/dashboard/new-campaign/checkbox-not-checked.png"
              alt="checkbox"
              className="size-8 max-lg:size-6"
            />
          )}
          <input
            type="checkbox"
            className="hidden"
            onChange={(e) =>
              onChangeCheckedVariables((prevState: any) => ({
                ...prevState,
                lastName: e.target.checked,
              }))
            }
          />
        </label>

        <label className="flex items-center gap-1 w-[106px] justify-end ">
          <span className="[text-shadow:0_4px_4px_rgba(7,94,84,0.55)]">
            {"{{نام}}"}
          </span>
          {checkedVariables.firstName ? (
            <img
              src="/public/images/dashboard/new-campaign/checkbox-checked.png"
              alt="checkbox"
              className="size-8 max-lg:size-6"
            />
          ) : (
            <img
              src="/public/images/dashboard/new-campaign/checkbox-not-checked.png"
              alt="checkbox"
              className="size-8 max-lg:size-6"
            />
          )}
          <input
            type="checkbox"
            className="hidden"
            onChange={(e) =>
              onChangeCheckedVariables((prevState: any) => ({
                ...prevState,
                firstName: e.target.checked,
              }))
            }
          />
        </label>
      </div>

      <div className="max-md:grid max-md:items-end grid-cols-1 mobile:grid-cols-2 md:flex items-center gap-4 lg:justify-end justify-between lg:gap-x-15 mt-4 **:text-nowrap **:max-md:text-sm flex-wrap  gap-y-2 justify-items-center">
        <label className="flex items-center gap-1 w-[106px] justify-end ">
          <span className="[text-shadow:0_4px_4px_rgba(7,94,84,0.55)]">
            {"{{کد پیگیری}}"}
          </span>
          {checkedVariables.trackingCode ? (
            <img
              src="/public/images/dashboard/new-campaign/checkbox-checked.png"
              alt="checkbox"
              className="size-8 max-lg:size-6"
            />
          ) : (
            <img
              src="/public/images/dashboard/new-campaign/checkbox-not-checked.png"
              alt="checkbox"
              className="size-8 max-lg:size-6"
            />
          )}
          <input
            type="checkbox"
            className="hidden"
            onChange={(e) =>
              onChangeCheckedVariables((prevState: any) => ({
                ...prevState,
                trackingCode: e.target.checked,
              }))
            }
          />
        </label>
        <label className="flex items-center gap-1 w-[106px] justify-end ">
          <span className="[text-shadow:0_4px_4px_rgba(7,94,84,0.55)]">
            {"{{تخفیف}}"}
          </span>
          {checkedVariables.discount ? (
            <img
              src="/public/images/dashboard/new-campaign/checkbox-checked.png"
              alt="checkbox"
              className="size-8 max-lg:size-6"
            />
          ) : (
            <img
              src="/public/images/dashboard/new-campaign/checkbox-not-checked.png"
              alt="checkbox"
              className="size-8 max-lg:size-6"
            />
          )}
          <input
            type="checkbox"
            className="hidden"
            onChange={(e) =>
              onChangeCheckedVariables((prevState: any) => ({
                ...prevState,
                discount: e.target.checked,
              }))
            }
          />
        </label>

        <label className="flex items-center gap-1 w-[106px] justify-end ">
          <span className="[text-shadow:0_4px_4px_rgba(7,94,84,0.55)]">
            {"{{شرکت}}"}
          </span>
          {checkedVariables.company ? (
            <img
              src="/public/images/dashboard/new-campaign/checkbox-checked.png"
              alt="checkbox"
              className="size-8 max-lg:size-6"
            />
          ) : (
            <img
              src="/public/images/dashboard/new-campaign/checkbox-not-checked.png"
              alt="checkbox"
              className="size-8 max-lg:size-6"
            />
          )}
          <input
            type="checkbox"
            className="hidden"
            onChange={(e) =>
              onChangeCheckedVariables((prevState: any) => ({
                ...prevState,
                company: e.target.checked,
              }))
            }
          />
        </label>

        <label className="flex items-center gap-1 w-[106px] justify-end ">
          <span className="[text-shadow:0_4px_4px_rgba(7,94,84,0.55)]">
            {"{{شماره}}"}
          </span>
          {checkedVariables.number ? (
            <img
              src="/public/images/dashboard/new-campaign/checkbox-checked.png"
              alt="checkbox"
              className="size-8 max-lg:size-6"
            />
          ) : (
            <img
              src="/public/images/dashboard/new-campaign/checkbox-not-checked.png"
              alt="checkbox"
              className="size-8 max-lg:size-6"
            />
          )}
          <input
            type="checkbox"
            className="hidden"
            onChange={(e) =>
              onChangeCheckedVariables((prevState: any) => ({
                ...prevState,
                number: e.target.checked,
              }))
            }
          />
        </label>
      </div>
    </div>
  );
}

export default Step1;
