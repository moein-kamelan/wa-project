import React, { useEffect, useState } from "react";

import Select, { components } from "react-select";
import AdminDashboardMain from "../../../components/modules/AdminDashboard/AdminDashboardMain/AdminDashboardMain";
import AdminDashboardHeader from "../../../components/modules/AdminDashboard/AdminDashboardHeader/AdminDashboardHeader";
import CustomInput from "../../../components/modules/CustomInput/CustomInput";
import InputContainer from "../../../components/modules/InputContainer/InputContainer";
import { axiosInstance } from "../../../utils/axios";
import useUsers from "../../../hooks/useUsers";

const options = [
  { value: "وضعیت کاربر", label: "وضعیت کاربر" },
  { value: "strawberry", label: "متعادل: 10 ثانیه" },
  { value: "vanilla", label: "سریع: 5 ثانیه" },
];

function UsersManagment() {
  const [firstName, setFirstName] = useState("");
  const [latName, setLatName] = useState("");
  const [phone, setPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalSection, setModalSection] = useState<
    "editInfos" | "sendDetails" | "restrictions"
  >("editInfos");
  const [isCollapseOpen, setIsCollapseOpen] = useState(false);
  const { data } = useUsers();
  // const [usersData , setUsersData] = useState<any>(null)

  // useEffect(() => {
  //   try {
  //     const fetchUsers = async() => {
  //       const response = await axiosInstance.get("api/admin/users" , {
  //         headers : {
<<<<<<< HEAD
  //           Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IlVTRVIiLCJpYXQiOjE3NjA2MTM3NzUsImV4cCI6MTc2MzIwNTc3NX0.CPnR2tSNUBYlQtl5ht--UU6Pq-6pvw3y8yr0SR7Js2Q
=======
  //           Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZDU2MDYxNmFlMjU1MTNlN2MzNDIxNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTc2MDYwMjU3MiwiZXhwIjoxNzYzMTk0NTcyfQ.cUOYmwNszystjjRaAek5Ef9024y99EbsFAxt72gyEww
>>>>>>> e7119f72d8fdb45b9bd98b02d8dbe2a7adfdc346

  //         }
  //       })
  //       console.log('response:', response)

  //       setUsersData(response.data)
  //     }
  //     fetchUsers()
  //   } catch (error) {
  //     console.log("error in fetching user list => " , error);

  //   }

  // } , [])

  return (
    <div className="flex flex-col h-screen overflow-y-auto relative ">
      <div
        className={`bg-secondary/35 inset-0 w-full h-full absolute z-20 transition-all duration-500 ${
          isModalOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={() => setIsModalOpen(false)}
      ></div>
      <AdminDashboardHeader>
        <span className="text-secondary text-[56px] text-shadow-[2px_4px_4px_rgb(255,255,255,0.75)]">
          مدیریت کاربران
        </span>
        <button className="custom-btn px-5 h-[55px] text-[32px]">
          +ایجاد کاربر
        </button>
      </AdminDashboardHeader>

      <AdminDashboardMain>
        <div className="grid grid-cols-1 gap-y-4 md:grid-cols-[2fr_1fr] mt-3.5 mb-[66px] ">
          <div className="flex items-center  w-full gap-8">
            <Select
              options={options}
              placeholder="وضعیت کاربر"
              components={{ DropdownIndicator }}
              classNames={{
                control: () =>
                  "!border !border-[1.5px] !border-secondary rounded-[5px]  !cursor-pointer     shadow-sm   !outline !outline-secondary focus:shadow-0 md:w-[263px] text-[32px] !text-secondary !bg-neutral-primary/30  max-w-[263px] ",
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
                placeholder: () => "   text-gray-black text-lg text-[32px]  ",
              }}
            />

            <img
              src="../../../../../public/images/admin-dashboard/excel.png"
              alt="excel"
            />
          </div>

          <div className="relative  rounded-[13px] bg-neutral-primary/33 h-[50px]  py-2 pl-4 border border-primary shadow-normal">
            <button className="absolute right-0-0 top-0 bottom-0 custom-btn shadow-none rounded-[13px] flex items-center justify-center size-[50px]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M28 28L22.2 22.2M25.3333 14.6667C25.3333 20.5577 20.5577 25.3333 14.6667 25.3333C8.77563 25.3333 4 20.5577 4 14.6667C4 8.77563 8.77563 4 14.6667 4C20.5577 4 25.3333 8.77563 25.3333 14.6667Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <input
              type="search"
              className="w-full pr-[68px] text-2xl"
              placeholder="جستجو ..."
            />
          </div>
        </div>

        <div className="relative rounded-2xl grow  w-98/100 mx-auto overflow-hidden  shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)] z-50 max-h-[1100px]">
          {isModalOpen && (
            <div className=" flex flex-col h-full ">
              <div className="bg-gradient-to-l from-[#D9D9D9] to-[#075E54] ">
                <div className="flex items-center justify-between pr-8 pl-4.5 py-6">
                  <div className="text-5xl">
                    <span className="text-secondary  text-shadow-[2px_4px_4px_rgb(255,255,255,0.75)]">
                      مدیریت کاربر :{" "}
                    </span>
                    <span className="font-inter text-white ">admin</span>
                  </div>

                  <button
                    className="self-start"
                    onClick={() => setIsModalOpen(false)}
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
                        fill="white"
                      />
                      <path
                        d="M33.5459 31.4247L26.1213 24.0001L33.5459 16.5755C34.1258 15.9956 34.1258 15.034 33.5459 14.4541C32.9661 13.8743 32.0044 13.8743 31.4246 14.4541L24 21.8788L16.5754 14.4541C15.9956 13.8743 15.0339 13.8743 14.4541 14.4541C13.8742 15.034 13.8742 15.9956 14.4541 16.5755L21.8787 24.0001L14.4541 31.4247C13.8742 32.0045 13.8742 32.9662 14.4541 33.546C15.0339 34.1259 15.9956 34.1259 16.5754 33.546L24 26.1214L31.4246 33.546C32.0044 34.1259 32.9661 34.1259 33.5459 33.546C34.1258 32.9662 34.1258 32.0045 33.5459 31.4247Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <div className=" flex items-center justify-evenly text-2xl border-b-4 border-neutral-tertiary bg-white">
                <button
                  className={`relative px-2 pt-7 pb-4 ${
                    modalSection === "editInfos"
                      ? "text-primary   bg-neutral-primary/35  after:w-full after:top-full after:right-0 after:left-0 after:bg-primary after:h-1  after:absolute"
                      : ""
                  } `}
                  onClick={() => setModalSection("editInfos")}
                >
                  ویرایش اطلاعات
                </button>
                <button
                  className={`relative px-2 pt-7 pb-4 ${
                    modalSection === "sendDetails"
                      ? "text-primary   bg-neutral-primary/35  after:w-full after:top-full after:right-0 after:left-0 after:bg-primary after:h-1  after:absolute"
                      : ""
                  } `}
                  onClick={() => setModalSection("sendDetails")}
                >
                  جزئیات ارسال
                </button>
                <button
                  className={`relative px-2 pt-7 pb-4 ${
                    modalSection === "restrictions"
                      ? "text-primary   bg-neutral-primary/35  after:w-full after:top-full after:right-0 after:left-0 after:bg-primary after:h-1  after:absolute"
                      : ""
                  } `}
                  onClick={() => setModalSection("restrictions")}
                >
                  محدودیت ها
                </button>
              </div>

              {modalSection === "editInfos" && (
                <div className="flex flex-wrap justify-center    gap-y-9 gap-x-[74px] py-6  px-8  overflow-y-auto bg-white grow">
                  <div className="py-9 px-6 w-full border border-neutral-tertiary h-full rounded-[61px] xl:max-w-[416px]">
                    <div className="flex flex-col gap-y-4">
                      <CustomInput
                        inputType={"text"}
                        labelText="نام"
                        value={firstName}
                        onChange={setFirstName}
                      />
                      <CustomInput
                        inputType={"text"}
                        labelText="نام خانوادگی"
                        value={latName}
                        onChange={setLatName}
                      />
                      <CustomInput
                        inputType={"phone"}
                        labelText="شماره تماس"
                        value={phone}
                        onChange={setPhone}
                      />
                    </div>
                  </div>
                  <div className="py-9 px-6  self-stretch  border border-neutral-tertiary  rounded-[61px] w-full xl:max-w-[416px]">
                    <div className="flex flex-col gap-y-4">
                      <CustomInput
                        inputType={"text"}
                        labelText="نام کاربری"
                        value={userName}
                        onChange={setUserName}
                      />
                      <CustomInput
                        inputType={"password"}
                        labelText="رمز عبور"
                        value={password}
                        onChange={setPassword}
                      />
                      <div className="flex items-center justify-between mb-auto mt-12">
                        <button className=" w-25 xl:w-[150px] lg:h-8 xl:h-11.5  xl:text-[22px] text-gray-black bg-neutral-tertiary rounded-[55px]">
                          انصراف
                        </button>
                        <button className="custom-btn w-25 xl:w-[150px] lg:h-8 xl:h-11.5  xl:text-[22px]">
                          ذخیره تغییرات
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {modalSection === "sendDetails" && (
                <div className="grow bg-white py-6 px-4 overflow-hidden">
                  <div className={`   `}>
                    <div
                      className="rounded-2xl shadow-normal   bg-neutral-tertiary px-5.5 py-7.5 grid grid-cols-3 cursor-pointer "
                      onClick={() => {
                        setIsCollapseOpen(!isCollapseOpen);
                      }}
                    >
                      <span className="text-2xl">16:02:36 -1404/06/25</span>
                      <span className="text-2xl justify-self-center text-semantic-success">
                        وضعیت : تکمیل
                      </span>
                      <button
                        className="flex items-center justify-center justify-self-end
               size-8 bg-secondary/40 rounded-xl "
                      >
                        <svg
                          className={`transition duration-400 ${
                            isCollapseOpen ? "rotate-180" : ""
                          }`}
                          width="12"
                          height="7"
                          viewBox="0 0 12 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 6.88009C5.74666 6.88009 5.49333 6.78676 5.29333 6.58676L0.586661 1.88009C0.199995 1.49342 0.199995 0.853425 0.586661 0.466758C0.973328 0.0800911 1.61333 0.0800911 1.99999 0.466758L6 4.46676L10 0.466758C10.3867 0.0800911 11.0267 0.0800911 11.4133 0.466758C11.8 0.853425 11.8 1.49342 11.4133 1.88009L6.70666 6.58676C6.50666 6.78676 6.25333 6.88009 6 6.88009Z"
                            fill="#075E54"
                          />
                        </svg>
                      </button>
                    </div>
                    <div
                      className={`-translate-y-2 !bg-neutral-tertiary/36 transition-all duration-400 opacity-0 invisible overflow-hidden max-h-0  rounded-bl-2xl rounded-br-2xl w-full px-5.5 shadow-normal font-B-Nazanin text-[28px]  ${
                        isCollapseOpen &&
                        "overflow-auto max-h-[1000px] py-6 opacity-100 visible"
                      }`}
                    >
                      <p>
                        متن پیام: سلام نام عزیز. برای اطلاع از تخفیف ها لینک زیر
                        را دنبال کنید. لینک
                      </p>
                      <div className="flex items-center">
                        <span>لینک فایل/فایل های ضمیمه:</span>
                        <span>catalog.jpg (2MB)</span>
                      </div>
                      <div className="flex items-center">
                        <span>لینک فایل اکسل مخاطبین : </span>
                        <span>catalog.jpg (2MB)</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {modalSection === "restrictions" && (
                <div className="grow bg-white py-7 px-12 overflow-y-auto">
                  <div className="flex flex-col ">
                    <InputContainer
                      text="وضعیت حساب"
                      textSize="text-base lg:text-[40px]"
                    ></InputContainer>
                    <InputContainer
                      text="محدودیت ارسال پیام"
                      extraText="(0=نامحدود)"
                      textSize="text-base lg:text-[40px]"
                    >
                      <CustomInput
                        className="main-input "
                        placeholder="salam"
                      />
                    </InputContainer>
                    <InputContainer
                      text="محدودیت اتصال حساب واتساپ"
                      textSize="text-base lg:text-[40px]"
                    >
                      <CustomInput
                        className="main-input "
                        placeholder="salam"
                      />
                    </InputContainer>
                  </div>
                </div>
              )}
            </div>
          )}

          {!isModalOpen && (
            <div className="bg-white/55  rounded-2xl h-full overflow-y-auto">
              <div className=" p-8">
                <div className="relative  w-full rounded-2xl border-[3px] border-secondary overflow-x-auto  max-h-[523px]   overflow-y-auto ">
                  <table className="w-full  border-collapse text-center table-auto ">
                    <thead className="bg-neutral-primary/80 text-gray-black *:font-B-Nazanin xl:text-2xl 2xl:text-[32px] text-nowrap border-b-[3px] border-secondary">
                      <tr>
                        <th scope="col" className=" border border-secondary">
                          <label className="flex items-center justify-center w-full h-full px-3   ">
                            <div className="size-8 border border-secondary rounded-xl cursor-pointer"></div>
                            <input type="checkbox" className="hidden" />
                          </label>
                        </th>
                        <th scope="col" className=" border border-secondary">
                          <button className="flex items-center  justify-evenly  w-full py-4  px-3">
                            <span>نام کاربری</span>

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
                          <button className="flex items-center justify-evenly w-full py-4  px-3">
                            <span>نام</span>

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
                          <button className="flex items-center justify-evenly w-full py-4  px-3">
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
                        <th scope="col" className=" border border-secondary">
                          <button className="flex items-center justify-evenly w-full py-4  px-3">
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
                          <button className="flex items-center justify-evenly w-full py-4  px-3">
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
                    <tbody>
                      {data?.users.map((user: any) => (
                        <tr className="p-2 " key={user.id}>
                          <td className="border border-secondary py-3 px-3">
                            <label className="flex items-center justify-center w-full h-full ">
                              <div className="size-8 border border-secondary rounded-xl cursor-pointer"></div>
                              <input type="checkbox" className="hidden" />
                            </label>
                          </td>
                          <td className="border border-secondary py-3 px-3 lg:text-2xl">
                            admin
                          </td>
                          <td className="border border-secondary py-3 px-3 lg:text-2xl">
                            {user.name}
                          </td>
                          <td className="border border-secondary py-3 px-3 lg:text-2xl">
                            {}
                          </td>
                          <td className="border border-secondary py-3 px-3">
                            <button className="bg-primary rounded-[55px] text-white  shadow-[4px_4px_4px_0_rgba(0,0,0,0.25)] w-34 h-8 max-w-40 lg:h-12 text-2xl lg:text-[32px]">
                              فعال
                            </button>
                          </td>
                          <td className="border border-secondary py-3 px-3">
                            <button
                              className="custom-btn  text-lg md:text-[20px] text-gray-black bg-neutral-tertiary w-30 h-8 lg:w-[144px] lg:h-11"
                              onClick={() => setIsModalOpen(true)}
                            >
                              مدیریت کاربر
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </AdminDashboardMain>
    </div>
  );
}

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

export default UsersManagment;
