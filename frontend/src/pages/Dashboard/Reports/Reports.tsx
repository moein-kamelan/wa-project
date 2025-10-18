import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import ReportsHeader from "../../../components/modules/Dashboard/Reports/ReporstsHeader/ReportsHeader";
import qs from "qs";
import DatePicker, { DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { axiosInstance } from "../../../utils/axios";
import CheckboxInput from "../../../components/modules/CheckboxInput/CheckboxInput";
import Pagination from "../../../components/modules/Pagination/Pagination";
import RecipientsDetails from "../../../components/templates/Dashboard/Reports/RecipientsDetails/RecipientDetails";

function Reports() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [campaigns, setCampaigns] = useState<any[] | null>(null);
  const [pagination, setPagination] = useState<any>();
  const [date, setDate] = useState<DateObject | null>(null);
  const [title, setTitle] = useState<string>("");
  const headerTitle = calculateTitle(searchParams.get("status"));
  const [recipientsDetailsCampaign, setRecipientsDetailsCampaign] =
    useState<any>(null);

  const page = Number(searchParams.get("page")) || 1;
  const startDate = searchParams.get("startDate");

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const mainStatus = calculateStatus(searchParams.get("status"));
        const response = await axiosInstance.get(`/api/campaigns`, {
          params: {
            page,
            limit: 7,
            status: mainStatus,
            title,
            startDate,
          },
          paramsSerializer: function (params) {
            return qs.stringify(params, { arrayFormat: "repeat" });
          },
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA2MTM3NzUsImV4cCI6MTc2MzIwNTc3NX0.CPnR2tSNUBYlQtl5ht--UU6Pq-6pvw3y8yr0SR7Js2Q",
          },
        });
        console.log("response:", response);
        setRecipientsDetailsCampaign(null);
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
        return ["DRAFT", "READY"];
      }
      case "blocked": {
        return ["FAILED", "PAUSED"];
      }
      default: {
        return ["DRAFT", "READY", "RUNNING", "COMPLETED", "PAUSED", "FAILED"];
      }
    }
  }

  const generateStatus = (status: string) => {
    switch (status) {
      case "RUNNING": {
        return (
          <span className="text-4xl  bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            در حال ارسال
          </span>
        );
      }

      case "COMPLETED": {
        return <span className="text-primary">ارسال شد</span>;
      }
      case "DRAFT":
      case "READY": {
        return <span className="text-neutral-tertiary">در انتظار ارسال</span>;
      }
      case "PAUSED":
      case "FAILED": {
        return <span className="text-semantic-error ">ارسال ناموفق</span>;
      }
    }
  };

  const handleBackPageClick = () => {
    if (page > 1) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", String(page - 1));
      setSearchParams(params);
    }
  };
  const handleNextPageClick = () => {
    if (pagination && page < pagination.pages) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("page", String(page + 1));
      setSearchParams(params);
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative ">
      <div className="inset-0 w-full h-screen bg-secondary/35 absolute z-10 hidden"></div>
      <ReportsHeader title={headerTitle} />
      <div className="flex flex-col relative  bg-white mx-16 grow mb-12.5 rounded-2xl shadow-[1px_2px_5px_0px_rgba(0,0,0,0.25)] pt-4.5 px-8 gap-y-3.5">
        {recipientsDetailsCampaign && (
          <button
            className="absolute left-2 top-2"
            onClick={() => setRecipientsDetailsCampaign(null)}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.4"
                d="M32.38 4H15.62C8.34 4 4 8.34 4 15.62V32.36C4 39.66 8.34 44 15.62 44H32.36C39.64 44 43.98 39.66 43.98 32.38V15.62C44 8.34 39.66 4 32.38 4Z"
                fill="#075E54"
              />
              <path
                d="M33.5459 31.4247L26.1213 24.0001L33.5459 16.5755C34.1258 15.9956 34.1258 15.034 33.5459 14.4541C32.9661 13.8743 32.0044 13.8743 31.4246 14.4541L24 21.8788L16.5754 14.4541C15.9956 13.8743 15.0339 13.8743 14.4541 14.4541C13.8742 15.034 13.8742 15.9956 14.4541 16.5755L21.8787 24.0001L14.4541 31.4247C13.8742 32.0045 13.8742 32.9662 14.4541 33.546C15.0339 34.1259 15.9956 34.1259 16.5754 33.546L24 26.1214L31.4246 33.546C32.0044 34.1259 32.9661 34.1259 33.5459 33.546C34.1258 32.9662 34.1258 32.0045 33.5459 31.4247Z"
                fill="#075E54"
              />
            </svg>
          </button>
        )}

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
              highlightToday={true}
              currentDate={false}
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
                setDate(dateObject);
              }}
              calendar={persian}
              locale={persian_fa}
              format="YYYY/MM/DD"
              className=""
              mapDays={({ date }) => {
                if (date.weekDay.index === 6) {
                  // جمعه
                  return { className: "weekend-day" };
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
            {recipientsDetailsCampaign ? (
              <RecipientsDetails
                recipientsDetailsCampaign={recipientsDetailsCampaign}
              />
            ) : (
              <div className="flex flex-col grow">
                <div
                  className="grow max-h-[562px]     overflow-x-auto [&::-webkit-scrollbar]:w-3
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:w-9/12
  [&::-webkit-scrollbar-track]:bg-neutral-tertiary
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#1DA45070]  pb-3 "
                >
                  <div className="relative  max-[1370px]:w-fit rounded-2xl border-[3px] border-secondary     overflow-hidden">
                    <table className="  w-full border-collapse text-center table-auto ">
                      <thead className="bg-neutral-primary/80 text-gray-black *:font-B-Nazanin xl:text-2xl 2xl:text-[32px] text-nowrap border-b-[3px] border-secondary">
                        <tr>
                          <th scope="col" className=" border border-secondary">
                            <CheckboxInput />
                          </th>
                          <th scope="col" className=" border border-secondary">
                            <button className="flex items-center  justify-evenly  w-full   p-3">
                              <span>عنوان کمپین</span>
                            </button>
                          </th>
                          <th scope="col" className="border border-secondary ">
                            <button className="flex items-center justify-evenly w-full   p-3">
                              <span>پیام های ارسالی</span>
                            </button>
                          </th>
                          <th scope="col" className="border border-secondary ">
                            <button className="flex items-center justify-evenly w-full   p-3">
                              <span>تاریخ</span>
                            </button>
                          </th>
                          <th scope="col" className=" border border-secondary">
                            <button className="flex items-center justify-evenly w-full   p-3">
                              <span>وضعیت</span>
                            </button>
                          </th>
                          <th scope="col" className=" border border-secondary">
                            <button className="flex items-center justify-evenly w-full   p-3">
                              <span>عملیات</span>
                            </button>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="*:hover:bg-neutral-secondary">
                        {campaigns?.map((campaign) => (
                          <tr key={campaign.id} className="p-2 ">
                            <td className="border border-secondary py-2.5 px-3">
                              <CheckboxInput />
                            </td>
                            <td className="border border-secondary py-2.5 px-3 lg:text-2xl overflow-x-hidden text-ellipsis max-w-50">
                              {campaign.title}
                            </td>
                            <td className="border border-secondary py-2.5 px-3 lg:text-2xl">
                              {campaign?.deliveredCount} /{" "}
                              {campaign?.totalRecipients}
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
                                className="custom-btn  py-2.5 px-3"
                                onClick={() =>
                                  setRecipientsDetailsCampaign(campaign)
                                }
                              >
                                مشاهده جزئیات
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <Pagination
                  pagination={pagination}
                  onClickBackPage={handleBackPageClick}
                  onClickNextPage={handleNextPageClick}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;
