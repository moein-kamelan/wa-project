import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Auth() {
  return (
    <div className="bg-neutral-tertiary flex flex-col h-screen max-h-screen overflow-hidden">
      <div className="bg-white text-center text-secondary text-4xl tablet:text-5xl desktop:text-[58px] py-8 shrink-0 ">
        <h1>پلتفرم ارسال پیام واتساپ</h1>
      </div>
      <div className=" flex flex-col  max-2xl:px-10 2xl:container mx-auto  grow w-full ">
        <div className=" grow relative w-full grid grid-cols-1 md:grid-cols-2 items-end pt-6 pb-9  overflow-hidden  flex-wrap  max-h-[900px]">
          <div className=" shrink-0 items-center relative hidden md:flex z-10">
            <svg
              className="shrink-0"
              width="548"
              height="361"
              viewBox="0 0 548 361"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_g_82_179)">
                <path
                  d="M525.887 25.8447L370.32 307.095C359.92 325.698 344.026 335 322.64 335H295.174V139.663L187.068 307.974C175.496 325.991 158.431 335 135.872 335H104.671L127.742 81.2158H25.5693L59.4072 25.8447H156.526C168.392 25.8447 178.572 28.5547 187.068 33.9746C198.494 41.4453 204.207 53.0908 204.207 68.9111C204.207 71.2549 204.061 73.6719 203.768 76.1621L187.947 225.137L292.757 58.8037C300.228 46.9385 306.893 38.8818 312.752 34.6338C320.955 28.7744 332.161 25.8447 346.37 25.8447H367.903V220.742L473.372 25.8447H525.887Z"
                  fill="url(#paint0_linear_82_179)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_g_82_179"
                  x="0.449335"
                  y="0.724726"
                  width="550.557"
                  height="359.395"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.056211352348327637 0.056211352348327637"
                    numOctaves="3"
                    seed="8786"
                  />
                  <feDisplacementMap
                    in="shape"
                    scale="50.240001678466797"
                    xChannelSelector="R"
                    yChannelSelector="G"
                    result="displacedImage"
                    width="100%"
                    height="100%"
                  />
                  <feMerge result="effect1_texture_82_179">
                    <feMergeNode in="displacedImage" />
                  </feMerge>
                </filter>
                <linearGradient
                  id="paint0_linear_82_179"
                  x1="53.5"
                  y1="46.5"
                  x2="413.5"
                  y2="228"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.3125" stop-color="#075E54" />
                  <stop offset="1" stop-color="#D9D9D9" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              className="shrink-0 absolute -left-60 xl:-left-10 lg:-bottom-40 -z-20"
              width="727"
              height="943"
              viewBox="0 0 727 943"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_g_82_61)">
                <path
                  d="M626.988 100C605.918 104.637 584.082 110.952 563.503 118.021C375.69 182.671 211.687 332.938 142.84 525.294C71.8803 718.369 97.299 929.937 165.304 1115.51C172.695 1135.73 180.746 1156.24 189.477 1177.03C183.133 1155.39 177.386 1134.18 172.207 1113.39C124.055 922.141 111.651 720.246 178.526 538.352C243.746 357.286 388.075 208.245 566.2 124.718C585.714 115.621 606.609 107.075 626.988 100Z"
                  fill="#075E54"
                  fill-opacity="0.88"
                />
              </g>
              <defs>
                <filter
                  id="filter0_g_82_61"
                  x="0.446228"
                  y="-1.52588e-05"
                  width="726.541"
                  height="1277.03"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="BackgroundImageFix"
                    result="shape"
                  />
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.20876826345920563 0.20876826345920563"
                    numOctaves="3"
                    seed="5358"
                  />
                  <feDisplacementMap
                    in="shape"
                    scale="200"
                    xChannelSelector="R"
                    yChannelSelector="G"
                    result="displacedImage"
                    width="100%"
                    height="100%"
                  />
                  <feMerge result="effect1_texture_82_61">
                    <feMergeNode in="displacedImage" />
                  </feMerge>
                </filter>
              </defs>
            </svg>
          </div>

          <div className="  md:justify-self-end shrink-0 bg-white md:w-[500px] lg:w-[629px] self-stretch rounded-2xl shadow-normal overflow-hidden max-h-[811px] z-50 ">
            <div className="h-16 flex items-center ">
              <NavLink
                to={"/auth/login"}
                className={({ isActive }) =>
                  ` text-4xl  flex-1 text-center py-3 ${
                    isActive
                      ? "text-black bg-neutral-primary"
                      : "bg-white text-secondary"
                  }`
                }
              >
                ورود
              </NavLink>
              <NavLink
                to={"/auth/register"}
                className={({ isActive }) =>
                  ` text-4xl  flex-1 text-center py-3 ${
                    isActive
                      ? "text-black bg-neutral-primary"
                      : "bg-white text-secondary"
                  }`
                }
              >
                ثبت نام
              </NavLink>
            </div>
            <div className="py-6 px-4 sm:px-26 flex flex-col justify-center">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
