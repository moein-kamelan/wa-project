import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import ReportsHeader from "../../../components/modules/Dashboard/Reports/ReporstsHeader/ReportsHeader";
import Select, { components } from "react-select";
import qs from "qs";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { axiosInstance } from "../../../utils/axios";
import CheckboxInput from "../../../components/modules/CheckboxInput/CheckboxInput";

const options = [
  { value: "متعادل", label: "فعال" },
  { value: "strawberry", label: "غیر فعال" },
  { value: "vanilla", label: "مسدود" },
];

function Reports() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [campaigns, setCampaigns] = useState<any[] | null>(null);
  const [pagination, setPagination] = useState<any>();
  const [date, setDate] = useState<any>(null);
  const [title, setTitle] = useState<string>("");
  const headerTitle = calculateTitle(searchParams.get("status"));

  const page = Number(searchParams.get("page")) || 1;
  const startDate = searchParams.get("startDate");

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const mainStatus = calculateStatus(searchParams.get("status"));
        const response = await axiosInstance.get(`/api/campaigns`, {
          params: {
            page,
            limit: 6,
            status: mainStatus,
            title,
            startDate,
          },
          paramsSerializer: function (params) {
            return qs.stringify(params, { arrayFormat: "repeat" });
          },
          headers: {
            Authorization:
<<<<<<< HEAD
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA2MTM3NzUsImV4cCI6MTc2MzIwNTc3NX0.CPnR2tSNUBYlQtl5ht--UU6Pq-6pvw3y8yr0SR7Js2Q",
=======
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDU2MDYxNmFlMjU1MTNlN2MzNDIxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc2MDYwMjU3MiwiZXhwIjoxNzYzMTk0NTcyfQ.cUOYmwNszystjjRaAek5Ef9024y99EbsFAxt72gyEww",
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346
          },
        });
        console.log("response:", response);

        setCampaigns(response.data.campaigns);
        setPagination(response.data.pagination);
      } catch (error) {
        console.log("error in fetching campaigns", error);
      }
    };
    fetchCampaigns();
  }, [page, searchParams, title, startDate]);

  function calculateTitle(status: string | null) {
    switch (status) {
      case "all": {
        return "همه ی کمپین ها";
      }
      case "active": {
        return "کمپین های موفق";
      }
      case "blocked": {
        return "کمپین های ناموفق";
      }
      case "inactive": {
        return "کمپین های در انتظار ارسال";
      }
      default: {
        return "همه ی کمپین ها";
      }
    }
  }

  function calculateStatus(status: string | null) {
    switch (status) {
      case "all": {
        return ["DRAFT", "READY", "RUNNING", "COMPLETED", "PAUSED", "FAILED"];
      }
      case "active": {
        return ["RUNNING", "COMPLETED"];
      }
      case "inactive": {
<<<<<<< HEAD
        return ["DRAFT", "READY"];
      }
      case "blocked": {
        return ["FAILED", "PAUSED"];
=======
        return ["draft", "ready"];
      }
      case "blocked": {
        return ["failed" , "paused"];
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346
      }
      default: {
        return ["DRAFT", "READY", "RUNNING", "COMPLETED", "PAUSED", "FAILED"];
      }
    }
  }

  const handleBackPageClick = () => {
    if (page > 1) setSearchParams({ page: String(page - 1) });
  };
  const handleNextPageClick = () => {
    if (pagination && page < pagination.pages)
      setSearchParams({ page: String(page + 1) });
  };

  const generateStatus = (status: string) => {
    switch (status) {
      case "DRAFT":
      case "READY": {
        return (
          <span className="text-4xl  bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            در انتظار ارسال
          </span>
        );
      }

      case "COMPLETED": {
        return <span className="text-primary">ارسال شد</span>;
      }
      case "RUNNING": {
        return <span className="text-neutral-tertiary">در حال ارسال</span>;
      }
<<<<<<< HEAD
      case "PAUSED":
      case "FAILED": {
=======
      case "paused":
      case "failed": {
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346
        return <span className="text-semantic-error ">ارسال ناموفق</span>;
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative ">
      <div className="inset-0 w-full h-screen bg-secondary/35 absolute z-10 hidden"></div>
      <ReportsHeader title={headerTitle} />
      <div className="flex flex-col  bg-white mx-16 grow mb-12.5 rounded-2xl shadow-[1px_2px_5px_0px_rgba(0,0,0,0.25)] pt-4.5 px-8 gap-y-3.5">
        <div className="grow pb-4 rounded-[20px] flex flex-col">
          <div className="flex items-center  mb-5 gap-3 flex-wrap">
            <div className="flex max-md:grow rounded-[5px] border-[1.5px] border-neutral-tertiary py-1.75 pr-2 gap-3 ">
              <svg
                className="shrink-0 size-8 md:size-11"
                width="44"
                height="44"
                viewBox="0 0 44 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.77148 3.6665H34.2281C36.2631 3.6665 37.9315 5.33482 37.9315 7.36982V11.4398C37.9315 12.9248 36.9964 14.7765 36.0798 15.6932"
                  stroke="#25D366"
                  strokeWidth="2.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.2534 34.9614C26.2534 36.0797 25.52 37.5464 24.585 38.1147L22 39.783C19.5984 41.268 16.2617 39.5997 16.2617 36.6297V26.8214C16.2617 25.5197 15.5284 23.8514 14.7767 22.9347L7.73664 15.528C6.80164 14.593 6.06836 12.943 6.06836 11.8247"
                  stroke="#25D366"
                  strokeWidth="2.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M29.4619 30.2865C32.702 30.2865 35.3286 27.66 35.3286 24.4199C35.3286 21.1798 32.702 18.5532 29.4619 18.5532C26.2218 18.5532 23.5952 21.1798 23.5952 24.4199C23.5952 27.66 26.2218 30.2865 29.4619 30.2865Z"
                  stroke="#25D366"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M36.4286 31.3866L34.5952 29.5532"
                  stroke="#25D366"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-xl   text-gray-black placeholder:text-neutral-tertiary pl-2 "
                placeholder="جستجوی کمپین"
              />
            </div>

            <DatePicker
              value={date}
              highlightToday={false}
              onChange={(dateObject) => {
                if (!dateObject) return;

                const startDate = dateObject.toDate().setHours(0, 0, 0, 0);
                const endDate = dateObject.toDate().setHours(23, 59, 59, 999);

                const startISO = new Date(startDate).toISOString();
                const endISO = new Date(endDate).toISOString();

                setSearchParams((prev) => {
                  const params = new URLSearchParams(prev);
                  params.set("startDate", startISO);
                  params.set("endDate", endISO);
                  return params;
                });
              }}
              calendar={persian}
              locale={persian_fa}
              format="YYYY/MM/DD"
              className=""
              mapDays={({ date }) => {
                if (date.weekDay.index === 6) {
                  // جمعه
                  return { className: "weekend-day", disabled: true };
                }
              }}
              containerClassName="w-[263px] max-md:w-full "
              arrow={false}
              render={(valueString, openCalendar) => (
                <div
                  onClick={openCalendar}
                  className="flex  items-center gap-x-1.5   cursor-pointer border-2 border-neutral-tertiary   p-1.5   rounded-[5px] min-h-15"
                >
                  <svg
                    className="shrink-0 size-8 md:size-11"
                    viewBox="0 0 45 45"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 3.75V9.375"
                      stroke="#25D366"
                      strokeWidth="2.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M30 3.75V9.375"
                      stroke="#25D366"
                      strokeWidth="2.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.5625 17.0439H38.4375"
                      stroke="#25D366"
                      strokeWidth="2.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.625 24.3938V15.9375C5.625 10.3125 8.4375 6.5625 15 6.5625H30C36.5625 6.5625 39.375 10.3125 39.375 15.9375V31.875C39.375 37.5 36.5625 41.25 30 41.25H15C8.4375 41.25 5.625 37.5 5.625 31.875"
                      stroke="#25D366"
                      strokeWidth="2.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M29.4277 25.6875H29.4445"
                      stroke="#25D366"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M29.4277 31.3125H29.4445"
                      stroke="#25D366"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.4917 25.6875H22.5085"
                      stroke="#25D366"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22.4917 31.3125H22.5085"
                      stroke="#25D366"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5517 25.6875H15.5686"
                      stroke="#25D366"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15.5517 31.3125H15.5686"
                      stroke="#25D366"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <div
                    className={`text-center  text- text-lg sm:text-xl md:text-lg ${
                      valueString ? "text-secondary" : "text-neutral-tertiary"
                    } `}
                  >
                    {valueString || "فیلتر بر اساس تاریخ"}
                  </div>
                </div>
              )}
            />

            <img src="../../../../../public/images/excel.png" alt="excel" />
          </div>
          <div className="flex flex-col w-full grow">
            {/* <div className=" grow  bg-neutral-tertiary/47 rounded-[20px] p-3.5">
              <div className="flex items-center gap-4">
                <Select
                  options={options}
                  placeholder="فیلتر"
                  components={{ DropdownIndicator }}
                  classNames={{
                    control: () =>
                      "!border !border-[1.5px] !border-secondary rounded-[5px] *:h-9 !cursor-pointer     shadow-sm   !outline !outline-secondary focus:shadow-0 md:w-[263px] text-xl max-w-[222px]   ",
                    option: ({ isFocused, isSelected }) =>
                      `px-3 py-2 cursor-pointer !text-2xl border-r-6 border-neutral-tertiary ${
                        isSelected
                          ? "bg-green-600 text-white !cursor-pointer "
                          : isFocused
                          ? "!bg-neutral-primary !text-secondary border-secondary/70 !cursor-pointer"
                          : "bg-white !text-gray-black !cursor-pointer"
                      }`,
                    menu: () =>
                      "!mt-0 border border-gray-200 font-B-Homa rounded-lg shadow-lg bg-white overflow-hidden  max-w-[263px]",
                    placeholder: () =>
                      "   !text-neutral-tertiary text-lg text-xl  ",
                    singleValue: () => "!text-primary ",
                  }}
                />
              </div>

              <div
                className="relative    rounded-2xl border-[3px] border-secondary   mt-3  w-full overflow-auto     [&::-webkit-scrollbar]:w-3
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:w-9/12
  [&::-webkit-scrollbar-track]:bg-neutral-secondary
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#1DA45070]"
              >
                <table className=" w-full border-collapse text-center table-auto overflow-hidden ">
                  <thead className="bg-neutral-primary/80 text-gray-black *:font-B-Nazanin xl:text-2xl  text-nowrap border-b-[3px] border-secondary">
                    <tr>
                      <th scope="col" className=" border border-secondary"></th>
                      <th scope="col" className=" border border-secondary">
                        <button className="flex items-center  justify-evenly  w-full p-2  ">
                          <span>شماره مخاطب</span>

                          <svg
                            className="shrink-0"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                              fill="#075E54"
                            />
                            <path
                              opacity="0.4"
                              d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                              fill="#075E54"
                            />
                          </svg>
                        </button>
                      </th>
                      <th scope="col" className="border border-secondary ">
                        <button className="flex items-center justify-evenly w-full p-2  ">
                          <span>تاریخ ارسال</span>

                          <svg
                            className="shrink-0"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                              fill="#075E54"
                            />
                            <path
                              opacity="0.4"
                              d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                              fill="#075E54"
                            />
                          </svg>
                        </button>
                      </th>
                      <th scope="col" className="border border-secondary ">
                        <button className="flex items-center justify-evenly w-full p-2  ">
                          <span>وضعیت</span>

                          <svg
                            className="shrink-0"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                              fill="#075E54"
                            />
                            <path
                              opacity="0.4"
                              d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                              fill="#075E54"
                            />
                          </svg>
                        </button>
                      </th>
                      <th scope="col" className=" border border-secondary">
                        <button className="flex items-center justify-evenly w-full p-2  ">
                          <span>عملیات</span>

                          <svg
                            className="shrink-0"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                              fill="#075E54"
                            />
                            <path
                              opacity="0.4"
                              d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                              fill="#075E54"
                            />
                          </svg>
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="*:hover:bg-neutral-secondary">
                    <tr className="p-2 ">
                      <td className="border border-secondary p-2 ">
                        <CheckboxInput/>
                      </td>
                      <td className="border border-secondary p-2  lg:text-2xl">
                        admin
                      </td>

                      <td className="border border-secondary p-2  lg:text-2xl">
                        12/6
                      </td>
                      <td className="border border-secondary p-2 ">
                        <span className="text-primary text-2xl">ارسال شد</span>
                      </td>
                      <td className="border border-secondary p-2 ">
                        <button
                          className="custom-btn  text-lg md:text-[20px] text-gray-black bg-neutral-tertiary w-[93px] h-7  "
                          onClick={() => setIsModalOpen(true)}
                        >
                          جزئیات
                        </button>
                      </td>
                    </tr>
                    <tr className="p-2 ">
                      <td className="border border-secondary p-2 ">
                        <label className="flex items-center justify-center w-full h-full ">
                          <div className="size-8 border border-secondary rounded-xl cursor-pointer"></div>
                          <input type="checkbox" className="hidden" />
                        </label>
                      </td>
                      <td className="border border-secondary p-2  lg:text-2xl">
                        admin
                      </td>

                      <td className="border border-secondary p-2  lg:text-2xl">
                        12/6
                      </td>
                      <td className="border border-secondary p-2 ">
                        <span className="text-primary text-2xl">ارسال شد</span>
                      </td>
                      <td className="border border-secondary p-2 px-3">
                        <button
                          className="custom-btn  text-lg md:text-[20px] text-gray-black bg-neutral-tertiary w-[93px] h-7  "
                          onClick={() => setIsModalOpen(true)}
                        >
                          جزئیات
                        </button>
                      </td>
                    </tr>
                    <tr className="p-2 ">
                      <td className="border border-secondary p-2 px-3">
                        <label className="flex items-center justify-center w-full h-full ">
                          <div className="size-8 border border-secondary rounded-xl cursor-pointer"></div>
                          <input type="checkbox" className="hidden" />
                        </label>
                      </td>
                      <td className="border border-secondary p-2 px-3 lg:text-2xl">
                        admin
                      </td>

                      <td className="border border-secondary p-2 px-3 lg:text-2xl">
                        12/6
                      </td>
                      <td className="border border-secondary p-2 px-3">
                        <span className="text-primary text-2xl">ارسال شد</span>
                      </td>
                      <td className="border border-secondary p-2 px-3">
                        <button
                          className="custom-btn  text-lg md:text-[20px] text-gray-black bg-neutral-tertiary w-[93px] h-7  "
                          onClick={() => setIsModalOpen(true)}
                        >
                          جزئیات
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> */}

            <div
              className="grow max-h-[562px]    overflow-y-auto overflow-x-auto [&::-webkit-scrollbar]:w-3
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:w-9/12
  [&::-webkit-scrollbar-track]:bg-neutral-tertiary
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#1DA45070] pl-2 pb-3 "
            >
              <div className="relative  max-[1370px]:w-fit rounded-2xl border-[3px] border-secondary     overflow-hidden">
                <table className="  w-full border-collapse text-center table-auto ">
                  <thead className="bg-neutral-primary/80 text-gray-black *:font-B-Nazanin xl:text-2xl 2xl:text-[32px] text-nowrap border-b-[3px] border-secondary">
                    <tr>
                      <th scope="col" className=" border border-secondary"></th>
                      <th scope="col" className=" border border-secondary">
                        <button className="flex items-center  justify-evenly  w-full   p-3">
                          <span>عنوان کمپین</span>

                          <svg
                            className="shrink-0"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                              fill="#075E54"
                            />
                            <path
                              opacity="0.4"
                              d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                              fill="#075E54"
                            />
                          </svg>
                        </button>
                      </th>
                      <th scope="col" className="border border-secondary ">
                        <button className="flex items-center justify-evenly w-full   p-3">
                          <span>پیام های ارسالی</span>

                          <svg
                            className="shrink-0"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                              fill="#075E54"
                            />
                            <path
                              opacity="0.4"
                              d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                              fill="#075E54"
                            />
                          </svg>
                        </button>
                      </th>
                      <th scope="col" className="border border-secondary ">
                        <button className="flex items-center justify-evenly w-full   p-3">
                          <span>تاریخ</span>

                          <svg
                            className="shrink-0"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                              fill="#075E54"
                            />
                            <path
                              opacity="0.4"
                              d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                              fill="#075E54"
                            />
                          </svg>
                        </button>
                      </th>
                      <th scope="col" className=" border border-secondary">
                        <button className="flex items-center justify-evenly w-full   p-3">
                          <span>وضعیت</span>

                          <svg
                            className="shrink-0"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                              fill="#075E54"
                            />
                            <path
                              opacity="0.4"
                              d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                              fill="#075E54"
                            />
                          </svg>
                        </button>
                      </th>
                      <th scope="col" className=" border border-secondary">
                        <button className="flex items-center justify-evenly w-full   p-3">
                          <span>عملیات</span>

                          <svg
                            className="shrink-0"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M10.98 6.19L7.26999 2.47998C7.19999 2.40998 7.10998 2.35 7.00998 2.31C6.99998 2.31 6.98995 2.30999 6.97995 2.29999C6.89995 2.26999 6.80994 2.25 6.71994 2.25C6.51994 2.25 6.32997 2.32997 6.18997 2.46997L2.46994 6.19C2.17994 6.48 2.17994 6.96 2.46994 7.25C2.75994 7.54 3.24 7.54 3.53 7.25L5.97995 4.79999V21C5.97995 21.41 6.31995 21.75 6.72995 21.75C7.13995 21.75 7.47995 21.41 7.47995 21V4.81L9.91995 7.25C10.07 7.4 10.26 7.46997 10.45 7.46997C10.64 7.46997 10.83 7.4 10.98 7.25C11.27 6.96 11.27 6.49 10.98 6.19Z"
                              fill="#075E54"
                            />
                            <path
                              opacity="0.4"
                              d="M21.53 16.75C21.24 16.46 20.7599 16.46 20.4699 16.75L18.02 19.2V3C18.02 2.59 17.68 2.25 17.27 2.25C16.86 2.25 16.52 2.59 16.52 3V19.19L14.08 16.75C13.79 16.46 13.31 16.46 13.02 16.75C12.73 17.04 12.73 17.52 13.02 17.81L16.73 21.52C16.8 21.59 16.89 21.65 16.99 21.69C17 21.69 17.01 21.69 17.02 21.7C17.1 21.73 17.19 21.75 17.28 21.75C17.48 21.75 17.67 21.67 17.81 21.53L21.53 17.81C21.82 17.51 21.82 17.04 21.53 16.75Z"
                              fill="#075E54"
                            />
                          </svg>
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="*:hover:bg-neutral-secondary">
                    {campaigns?.map((campaign) => (
                      <tr key={campaign.id} className="p-2 ">
                        <td className="border border-secondary py-2.5 px-3">
                        <CheckboxInput/>
                        </td>
                        <td className="border border-secondary py-2.5 px-3 lg:text-2xl">
                          {campaign.title}
                        </td>
                        <td className="border border-secondary py-2.5 px-3 lg:text-2xl">
                          {campaign?.deliveredCount} / {campaign?.totalRecipients}
                        </td>
                        <td className="border border-secondary py-2.5 px-3 lg:text-2xl">
                          {new Date(campaign.createdAt).toLocaleString(
                            "fa-IR",
                            {
                              year: "numeric",
                              month: "numeric",
                              day: "numeric",
                            }
                          )}
                        </td>
                        <td className="border border-secondary py-2.5 px-3 *:text-2xl">
                          {generateStatus(campaign.status)}
                        </td>
                        <td className="border border-secondary py-2.5 px-3">
                          <button
                            className="custom-btn  text-lg md:text-[20px] text-gray-black bg-neutral-tertiary w-30 h-8 lg:w-[144px] lg:h-11"
                            onClick={() => setIsModalOpen(true)}
                          >
                            جزئیات
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button onClick={handleBackPageClick}>
                <svg
                  className="rotate-y-180"
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1493_1722)">
                    <path
                      opacity="0.4"
                      d="M24.6815 19.5249L36.2544 28.2103V41.0666C36.2544 43.2666 33.5961 44.3666 32.0377 42.8082L20.1669 30.9374C18.2648 29.0353 18.2648 25.9416 20.1669 24.0395L24.6815 19.5249Z"
                      fill="#25D366"
                    />
                    <path
                      d="M36.2544 13.9334V28.2105L24.6815 19.5251L32.0377 12.1688C33.5961 10.6334 36.2544 11.7334 36.2544 13.9334Z"
                      fill="#25D366"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1493_1722"
                      x="-4"
                      y="0"
                      width="63"
                      height="63"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1493_1722"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1493_1722"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>

              <span className="text-secondary text-xl">
                صفحه {pagination?.page} از {pagination?.pages}
              </span>
              <button onClick={handleNextPageClick}>
                <svg
                  width="55"
                  height="55"
                  viewBox="0 0 55 55"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_1493_1722)">
                    <path
                      opacity="0.4"
                      d="M24.6815 19.5249L36.2544 28.2103V41.0666C36.2544 43.2666 33.5961 44.3666 32.0377 42.8082L20.1669 30.9374C18.2648 29.0353 18.2648 25.9416 20.1669 24.0395L24.6815 19.5249Z"
                      fill="#25D366"
                    />
                    <path
                      d="M36.2544 13.9334V28.2105L24.6815 19.5251L32.0377 12.1688C33.5961 10.6334 36.2544 11.7334 36.2544 13.9334Z"
                      fill="#25D366"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_1493_1722"
                      x="-4"
                      y="0"
                      width="63"
                      height="63"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood floodOpacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="2" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_1493_1722"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_1493_1722"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        className="size-7.5"
        viewBox="0 0 31 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.5002 27.0885L0.478805 0.761593L30.7893 0.916123L15.5002 27.0885Z"
          fill="#D9D9D9"
        />
      </svg>
    </components.DropdownIndicator>
  );
};

export default Reports;
