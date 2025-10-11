import React from "react";
import { NavLink } from "react-router-dom";

function CompactNavigation() {
  return (
    <div className="flex flex-col bg-secondary w-28 pt-35 shrink-0 z-50">
      <ul className="flex flex-col items-center">
        <li className="w-full  ">
          <NavLink
            className={({ isActive }) =>
              `flex item-center justify-center w-full h-full py-7 *:text-white *:hover:text-primary ${
                isActive && "text-white bg-white/35 *:hover:text-white"
              }`
            }
            to={"/admin-dashboard/home"}
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M51.3333 24.5C51.3333 21.6767 49.4433 18.06 47.1333 16.45L32.7133 6.34667C29.4466 4.06 24.1966 4.17667 21.0466 6.62667L8.46996 16.4267C6.36996 18.06 4.66663 21.5367 4.66663 24.1733V41.4633C4.66663 46.8767 9.07663 51.31 14.49 51.31H41.51C46.9233 51.31 51.3333 46.8767 51.3333 41.4867V34.2533"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 41.9767V34.9767"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>
        </li>
        <li className="w-full  ">
          <NavLink
            className={({ isActive }) =>
              `flex item-center justify-center w-full h-full py-7 *:text-white *:hover:text-primary ${
                isActive && "text-white bg-white/35 *:hover:text-white"
              }`
            }
            to={"/admin-dashboard/user-managment"}
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.3367 5.64666C26.6 4.33999 29.4 4.33999 31.6867 5.64666L45.5467 13.65C47.81 14.9566 49.21 17.3834 49.21 20.0201V35.98C49.21 38.5933 47.81 41.0201 45.5467 42.3501L31.6867 50.3534C29.4234 51.6601 26.6234 51.6601 24.3367 50.3534L10.4767 42.3501C8.21335 41.0434 6.81335 38.6167 6.81335 35.98V20.0201C6.81335 17.4067 8.21335 14.98 10.4767 13.65L14.91 11.0834"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27.9999 25.6667C31.0025 25.6667 33.4366 23.2325 33.4366 20.23C33.4366 17.2274 31.0025 14.7934 27.9999 14.7934C24.9973 14.7934 22.5632 17.2274 22.5632 20.23C22.5632 23.2325 24.9973 25.6667 27.9999 25.6667Z"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M37.3333 38.8733C37.3333 34.6733 33.1566 31.2667 28 31.2667C22.8433 31.2667 18.6666 34.6733 18.6666 38.8733"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>
        </li>
        <li className="w-full  ">
          <NavLink
            className={({ isActive }) =>
              `flex item-center justify-center w-full h-full py-7 *:text-white *:hover:text-primary ${
                isActive && "text-white bg-white/35 *:hover:text-white"
              }`
            }
            to={"/admin-dashboard/box"}
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.39661 17.36L27.9999 29.2833L48.4633 17.43"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 50.4233V29.26"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.57666 30.9167V34.6033C5.57666 37.8233 7.88666 41.7433 10.71 43.3067L23.17 50.2367C25.83 51.7067 30.1933 51.7067 32.8533 50.2367L45.3133 43.3067C48.1367 41.7433 50.4467 37.8233 50.4467 34.6033V21.3967C50.4467 18.1767 48.1367 14.2567 45.3133 12.6933L32.8533 5.76333C30.1933 4.29333 25.83 4.29333 23.17 5.76333L10.71 12.6933C7.88666 14.2567 5.57666 18.1767 5.57666 21.3967"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>
        </li>
        <li className="w-full  ">
          <NavLink
            className={({ isActive }) =>
              `flex item-center justify-center w-full h-full py-7 *:text-white *:hover:text-primary ${
                isActive && "text-white bg-white/35 *:hover:text-white"
              }`
            }
            to={"/admin-dashboard/stats"}
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.66663 51.3333H51.3333"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.75 9.33332V51.3333H33.25V9.33332C33.25 6.76666 32.2 4.66666 29.05 4.66666H26.95C23.8 4.66666 22.75 6.76666 22.75 9.33332Z"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.3333 23.3333C16.3333 20.7667 15.4 18.6667 12.6 18.6667H10.7333C7.93333 18.6667 7 20.7667 7 23.3333V51.3333H16.3333V32.6433"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M39.6666 35V51.3333H49V35C49 32.4333 48.0666 30.3333 45.2666 30.3333H43.4C40.6 30.3333 39.6666 32.4333 39.6666 35Z"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>
        </li>
        <li className="w-full  ">
          <NavLink
            className={({ isActive }) =>
              `flex item-center justify-center w-full h-full py-7 *:text-white *:hover:text-primary ${
                isActive && "text-white bg-white/35 *:hover:text-white"
              }`
            }
            to={"/admin-dashboard/setting"}
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M35 28C35 24.1267 31.8733 21 28 21C24.1267 21 21 24.1267 21 28C21 31.8733 24.1267 35 28 35C28.9567 35 29.89 34.8133 30.73 34.44"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M16.0533 48.02L18.5967 49.49C20.44 50.5866 22.82 49.9333 23.9167 48.09L24.1733 47.6466C26.2733 43.9833 29.7267 43.9833 31.85 47.6466L32.1067 48.09C33.2033 49.9333 35.5833 50.5866 37.4267 49.49L41.4633 47.18C43.5867 45.9666 44.31 43.2366 43.0967 41.1366C40.9733 37.4733 42.7 34.4866 46.9233 34.4866C49.35 34.4866 51.3567 32.5033 51.3567 30.0533V25.9466C51.3567 23.52 49.3733 21.5133 46.9233 21.5133C44.5667 21.5133 42.98 20.58 42.42 19.11C41.9767 17.9666 42.1633 16.4733 43.0967 14.8633C44.31 12.74 43.5867 10.0333 41.4633 8.81998L39.5733 7.74664"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M31.8266 8.35333C29.7266 12.0167 26.2733 12.0167 24.15 8.35333L23.8933 7.90999C22.82 6.06666 20.44 5.41333 18.5966 6.50999L14.56 8.81999C12.4366 10.0333 11.7133 12.7633 12.9266 14.8867C15.05 18.5267 13.3233 21.5133 9.09996 21.5133C6.67329 21.5133 4.66663 23.4967 4.66663 25.9467V30.0533C4.66663 32.48 6.64996 34.4867 9.09996 34.4867C13.3233 34.4867 15.05 37.4733 12.9266 41.1367"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>
        </li>
        <li className="w-full  ">
          <button
            className={
              "flex items-center justify-center text-white hover:text-primary w-full h-full py-7"
            }
          >
            <svg
              width="56"
              height="56"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M40.6933 33.9733L46.6666 28L40.6933 22.0267"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M34.44 28H46.5033"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.7733 28H27.3467"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.9767 15.12C11.0833 18.2933 9.33333 22.6567 9.33333 28C9.33333 39.6667 17.6867 46.6667 28 46.6667"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M28 9.33331C25.55 9.33331 23.2167 9.72998 21.07 10.4766"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default CompactNavigation;
