import React, { forwardRef } from "react";
import InputContainer from "../../../../modules/InputContainer/InputContainer";
import Select, { components } from "react-select";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Formik } from "formik";
import * as Yup from "yup";
import { axiosInstance } from "../../../../../utils/axios";
const options = [
  { value: "20s", label: "کند: 20 ثانیه" },
  { value: "10s", label: "متعادل: 10 ثانیه" },
  { value: "5s", label: "سریع: 5 ثانیه" },
];

const today = new DateObject({ calendar: persian, locale: persian_fa });
interface Step5Values {
  hour: string;
  minute: string;
  date: any;
  interval: string;
}

interface Step5Props {
  onSubmit?: (values: Step5Values, isSuccess?: boolean) => void;
}

export interface Step5Ref {
  submitForm: () => Promise<void>;
  values: Step5Values;
}

const Step5 = forwardRef<Step5Ref, Step5Props>(({ onSubmit }, ref) => {
  const validationSchema = Yup.object<Step5Values>().shape({
    hour: Yup.string()
      .min(0, "ساعت حداقل باید صفر یا بیشتر باشد")
      .max(23, "ساعت باید کمتر یا برابر ۲۳ باشد")
      .required("انتخاب ساعت الزامی است"),
    minute: Yup.string()
      .min(0, "دقیقه حداقل باید صفر یا بیشتر باشد")
      .max(59, "دقیقه باید کمتر یا برابر ۵۹ باشد")
      .required("انتخاب دقیقه الزامی است"),
    date: Yup.mixed()
      .required("انتخاب تاریخ الزامی است")
      .test(
        "not-past",
        "زمان انتخاب شده نمی‌تواند قبل از الان باشد",
        function (value: any) {
          const { hour, minute } = this.parent as Step5Values;
          if (!value || hour === "" || minute === "") return true;

          const h = Number(hour);
          const m = Number(minute);
          if (isNaN(h) || isNaN(m)) return true;

          const selectedDate = value.toDate();
          selectedDate.setHours(h, m, 0, 0);

          return selectedDate >= new Date();
        }
      ),
    interval: Yup.string().required("انتخاب وقفه الزامی است"),
  });

  return (
    <div className="mx-auto w-[88%] space-y-8 ">
      <Formik<Step5Values>
        initialValues={{
          hour: "",
          minute: "",
          date: null,
          interval: "",
        }}
        validationSchema={validationSchema}
        onSubmit={async (values, helpers) => {
          try {
            const gregorianDate = values.date?.toDate?.() || new Date();
            gregorianDate.setHours(Number(values.hour));
            gregorianDate.setMinutes(Number(values.minute));

            const payload = {
              interval: values.interval,
              sendType: "scheduled",
              scheduledAt: gregorianDate.toISOString(),
              timezone: "Asia/Tehran",
            };

            const response = await axiosInstance.put(
              "/api/campaigns/68e61f5b9c887771c55f86ff/interval",
              payload,
              {
                headers: {
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDU2MDYxNmFlMjU1MTNlN2MzNDIxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc2MDYwMjU3MiwiZXhwIjoxNzYzMTk0NTcyfQ.cUOYmwNszystjjRaAek5Ef9024y99EbsFAxt72gyEww",
                },
              }
            );
            console.log("response", response);
            onSubmit?.(values, true);

            helpers.setSubmitting(false);
          } catch (error) {
            console.error(error);
          } finally {
            helpers.setSubmitting(false);
          }
        }}
        innerRef={(formik) => {
          if (formik && ref) {
            (ref as React.MutableRefObject<Step5Ref>).current = {
              submitForm: formik.submitForm,
              values: formik.values,
            };
          }
        }}
      >
        {(formik) => {
          return (
            <form
              className="flex flex-col gap-y-2 mt-[58px]"
              onSubmit={formik.handleSubmit}
            >
              <InputContainer
                text="زمان ارسال"
                textSize="text-xl sm:text-3xl md:text-[40px]"
                customClasses={
                  formik.errors.hour || formik.errors.minute
                    ? "bg-semantic-error/44"
                    : ""
                }
                errorMessage1={
                  formik.touched.minute && formik.errors.minute
                    ? formik.errors.minute
                    : null
                }
                errorMessage2={
                  formik.touched.hour && formik.errors.hour
                    ? formik.errors.hour
                    : null
                }
              >
                <div className="flex items-center gap-1">
                  <input
                    className={`bg-neutral-primary/30 border-2 border-secondary text-secondary rounded-2xl px-5 py-2 text-center    text-lg sm:text-xl md:text-3xl placeholder:text-4xl placeholder:text-neutral-tertiary ${
                      (formik.touched.hour || formik.touched.minute) &&
                      (formik.errors.minute || formik.errors.hour)
                        ? "bg-semantic-error/30  border-semantic-error"
                        : ""
                    }`}
                    type="number"
                    max={59}
                    min={0}
                    placeholder="30"
                    {...formik.getFieldProps("minute")}
                  />

                  <span className="text-[32px] "> : </span>
                  <input
                    className={`bg-neutral-primary/30 border-2 border-secondary text-secondary rounded-2xl px-5 py-2 text-center    text-lg sm:text-xl md:text-3xl placeholder:text-4xl placeholder:text-neutral-tertiary ${
                      (formik.touched.hour || formik.touched.minute) &&
                      (formik.errors.hour || formik.errors.minute)
                        ? "bg-semantic-error/30  border-semantic-error"
                        : ""
                    }`}
                    type="number"
                    max={23}
                    min={0}
                    placeholder="16"
                    {...formik.getFieldProps("hour")}
                  />
                </div>
              </InputContainer>

              <InputContainer
                text="تاریخ ارسال"
                textSize="text-xl sm:text-3xl md:text-[40px]"
                customClasses={
                  formik.touched.date && formik.errors.date
                    ? "bg-semantic-error/44"
                    : ""
                }
                errorMessage1={
                  formik.touched.date && formik.errors.date
                    ? String(formik.errors.date)
                    : null
                }
              >
                <DatePicker
                  calendar={persian}
                  locale={persian_fa}
                  format="YYYY/MM/DD"
                  className=""
                  mapDays={({ date }) => {
                    if (date.weekDay.index === 6) {
                      // جمعه
                      return { className: "weekend-day !text-semantic-error" };
                    }
                  }}
                  containerClassName="w-[263px] max-md:w-full "
                  arrow={false}
                  value={formik.values.date}
                  onChange={(date) => {
                    formik.setFieldValue("date", date);
                  }}
                  render={(valueString, openCalendar) => (
                    <div
                      onClick={openCalendar}
                      className={`flex  items-center justify-between   cursor-pointer border-2 border-secondary  px-5 py-2 bg-neutral-primary/30  rounded-[5px] ${
                        formik.touched.date && formik.errors.date
                          ? "bg-semantic-error/30  border-semantic-error "
                          : ""
                      }`}
                    >
                      <svg
                        className={`shrink-0 size-8 md:size-11 !text-primary ${
                          formik.touched.date && formik.errors.date
                            ? "!text-semantic-error"
                            : ""
                        }`}
                        viewBox="0 0 45 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 3.75V9.375"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M30 3.75V9.375"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M6.5625 17.0439H38.4375"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M5.625 24.3938V15.9375C5.625 10.3125 8.4375 6.5625 15 6.5625H30C36.5625 6.5625 39.375 10.3125 39.375 15.9375V31.875C39.375 37.5 36.5625 41.25 30 41.25H15C8.4375 41.25 5.625 37.5 5.625 31.875"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M29.4277 25.6875H29.4445"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M29.4277 31.3125H29.4445"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22.4917 25.6875H22.5085"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M22.4917 31.3125H22.5085"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.5517 25.6875H15.5686"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15.5517 31.3125H15.5686"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>

                      <div
                        className={`text-center  text- text-lg sm:text-xl md:text-3xl ${
                          valueString
                            ? "text-secondary"
                            : "text-neutral-tertiary"
                        } `}
                      >
                        {valueString || today.format("YYYY/MM/DD")}
                      </div>
                    </div>
                  )}
                />
              </InputContainer>
              <InputContainer
                text="وقفه "
                textSize="text-xl sm:text-3xl md:text-[40px]"
                customClasses={
                  formik.touched.interval && formik.errors.interval
                    ? "bg-semantic-error/44"
                    : ""
                }
                errorMessage1={
                  formik.touched.interval && formik.errors.interval
                    ? formik.errors.interval
                    : null
                }
              >
                <Select
                  options={options}
                  value={options.find(
                    (opt) => opt.value === formik.values.interval
                  )}
                  onChange={(option) =>
                    formik.setFieldValue("interval", option?.value)
                  }
                  placeholder="لطفا یک مورد را انتخاب کنید"
                  components={{ DropdownIndicator }}
                  classNames={{
                    control: () =>
                      `!border !border-[1.5px] !border-secondary rounded-[5px]  !cursor-pointer     shadow-sm   !outline !outline-secondary focus:shadow-0 md:w-[263px] text-[32px] !text-secondary !bg-neutral-primary/30  ${
                        formik.errors.interval && formik.touched.interval
                          ? "!bg-semantic-error/30  !border-semantic-error "
                          : ""
                      }`,
                    option: ({ isFocused, isSelected }) =>
                      `px-3 py-2 cursor-pointer !text-2xl border-r-6 border-neutral-tertiary ${
                        isSelected
                          ? "bg-green-600 text-white !cursor-pointer "
                          : isFocused
                          ? "!bg-neutral-primary !text-secondary border-secondary/70 !cursor-pointer"
                          : "bg-white !text-gray-black !cursor-pointer"
                      }`,
                    menu: () =>
                      "!mt-0 border border-gray-200 font-B-Homa rounded-lg shadow-lg bg-white overflow-hidden",
                    placeholder: () =>
                      `font-B-Nazanin text-neutral-primary text-lg sm:text-xl ${
                        formik.errors.interval ? "!text-neutral-tertiary" : ""
                      }`,
                  }}
                />
              </InputContainer>
            </form>
          );
        }}
      </Formik>
    </div>
  );
});

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        width="31"
        height="28"
        viewBox="0 0 31 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5002 27.0885L0.478805 0.761593L30.7893 0.916123L15.5002 27.0885Z"
          fill="#ABABAB"
        />
      </svg>
    </components.DropdownIndicator>
  );
};

export default Step5;
