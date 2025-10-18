import React from "react";

type PaginationProps = {
    pagination : any;
    onClickBackPage : () => void;
    onClickNextPage : () => void;
}

function Pagination({ pagination, onClickBackPage, onClickNextPage } : PaginationProps) {
  return (
    <div className="flex items-center justify-center">
      <button onClick={onClickBackPage}>
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
      <button onClick={onClickNextPage}>
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
  );
}

export default Pagination;
