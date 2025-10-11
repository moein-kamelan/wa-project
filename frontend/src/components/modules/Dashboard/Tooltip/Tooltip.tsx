import React from 'react'

function Tooltip({children}: {children: React.ReactNode}) {
  return (
    <div className=" transition-all duration-300 opacity-0 invisible absolute left-[calc(100%+14px)] top-0 bottom-0 my-auto bg-secondary text-white  text-sm px-3 rounded-[4px] h-fit text-nowrap
    group-hover:delay-800 group-hover:opacity-100 group-hover:visible group-hover:duration-300">
              <span className='text-base'>{children}</span>
              <svg className="absolute rotate-y-180 top-0 bottom-0 my-auto right-[calc(100%-2px)]" width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.73684 8.275L2.18875 1.10431C1.55177 0.499179 0.5 0.950714 0.5 1.82931V16.1707C0.5 17.0493 1.55177 17.5008 2.18875 16.8957L9.73684 9.725C10.1518 9.33075 10.1518 8.66925 9.73684 8.275Z" fill="#075E54"/>
</svg>

            </div>
  )
}

export default Tooltip