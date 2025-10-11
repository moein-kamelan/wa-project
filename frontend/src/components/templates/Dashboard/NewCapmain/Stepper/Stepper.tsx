import React from "react";

type StepperProps = {
      step : number
}

function Stepper({step} : StepperProps) {
  return (
 <div className="hidden lg:block relative bg-secondary rounded-xl w-[70%] h-3 xl:h-3.5 mx-auto mt-7.5 mb-10 lg:mt-11 lg:mb-[51px]">


     <div className="flex items-center  justify-between w-full bottom-0 top-0 my-auto  absolute">
      <div className={`${step === 1 && "bg-secondary text-white"} transition-all duration-500 bg-primary text-secondary  rounded-full flex items-center justify-center lg:w-[52px] lg:h-[51px] w-[46px] h-[45px]`}>
      <svg className="lg:size-10 size-9" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 14C3.5 7 7 3.5 14 3.5H28C35 3.5 38.5 7 38.5 14V22.75C38.5 29.75 35 33.25 28 33.25H27.125C26.5825 33.25 26.0575 33.5125 25.725 33.95L23.1 37.45C21.945 38.99 20.055 38.99 18.9 37.45L16.275 33.95C15.995 33.565 15.3475 33.25 14.875 33.25H14C7 33.25 3.5 31.5 3.5 22.75V21" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M27.9824 14H29.7499" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.25 14H21.8925" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.25 22.75H22.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


      </div>
      
      <div className={`${step === 2 && "bg-secondary text-white"} transition-all duration-500 bg-primary text-secondary rounded-full flex items-center justify-center lg:w-[52px] lg:h-[51px] w-[46px] h-[45px]`}>
<svg className="lg:size-10 size-9" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 3.5V14L24.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 14L17.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 38.5H28C35 38.5 36.75 34.58 36.75 29.75V28C36.75 24.1325 36.75 21 29.75 21C28 21 27.51 21.3675 26.6 22.05L24.815 23.94C22.75 26.145 19.25 26.145 17.1675 23.94L15.4 22.05C14.49 21.3675 14 21 12.25 21C5.25 21 5.25 24.1325 5.25 28V29.75C5.25 34.58 5.25 38.5 14 38.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.75 21.0001V14.0001C8.75 10.4826 8.75 7.57757 14 7.07007" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M33.25 21.0001V14.0001C33.25 10.4826 33.25 7.57757 28 7.07007" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


      </div>
      
      <div className={`${step === 3 && "bg-secondary text-white"} transition-all duration-500 bg-primary text-secondary rounded-full flex items-center justify-center lg:w-[52px] lg:h-[51px] w-[46px] h-[45px]`}>

<svg className="lg:size-10 size-9" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 14V3.5L17.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 3.5L24.5 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 38.5H28C35 38.5 36.75 34.58 36.75 29.75V28C36.75 24.1325 36.75 21 29.75 21C28 21 27.51 21.3675 26.6 22.05L24.815 23.94C22.75 26.145 19.25 26.145 17.1675 23.94L15.4 22.05C14.49 21.3675 14 21 12.25 21C5.25 21 5.25 24.1325 5.25 28V29.75C5.25 34.58 5.25 38.5 14 38.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.75 21.0001V17.5001C8.75 13.9826 8.75 11.0776 14 10.5701" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M33.25 21.0001V17.5001C33.25 13.9826 33.25 11.0776 28 10.5701" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      </div>
      
      <div className={`${step === 4 && "bg-secondary text-white"} transition-all duration-500 bg-primary text-secondary rounded-full flex items-center justify-center lg:w-[52px] lg:h-[51px] w-[46px] h-[45px]`}>
<svg className="lg:size-10 size-9" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.0799 15.4175L7.96236 17.535C3.86736 21.63 3.86736 28.28 7.96236 32.3925" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.5774 21.2626L17.2549 25.5851C14.8574 27.9826 14.8574 31.8501 17.2549 34.2476C19.6524 36.6451 23.5199 36.6451 25.9174 34.2476L32.7249 27.4401C37.5024 22.6626 37.5024 14.8926 32.7249 10.1151C27.9474 5.33761 20.1774 5.33761 15.3999 10.1151" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


      </div>
      
      <div className={`${step === 5 && "bg-secondary text-white"} transition-all duration-500 bg-primary text-secondary rounded-full flex items-center justify-center lg:w-[52px] lg:h-[51px] w-[46px] h-[45px]`}>

<svg className="lg:size-10 size-9" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 14V22.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.0176 9.555C16.1176 8.4875 18.4801 7.875 21.0001 7.875C29.4526 7.875 36.3126 14.735 36.3126 23.1875" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21 38.4999C12.5475 38.4999 5.6875 31.6399 5.6875 23.1874C5.6875 19.7224 6.8425 16.5374 8.7675 13.9824" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.75 3.5H26.25" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M26.0752 32.3751V30.3451C26.0752 27.8426 27.8602 26.8101 30.0302 28.0701L31.7802 29.0851L33.5302 30.1001C35.7002 31.3601 35.7002 33.4076 33.5302 34.6676L31.7802 35.6826L30.0302 36.6976C27.8602 37.9576 26.0752 36.9251 26.0752 34.4226V32.3751Z" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

      </div>
      
      <div className={`${step === 6 && "bg-secondary text-white"} transition-all duration-500 bg-primary text-secondary rounded-full flex items-center justify-center lg:w-[52px] lg:h-[51px] w-[46px] h-[45px]  `}>
<svg className="lg:size-10 size-9" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.3335 14.9999V10.8333C3.3335 6.68325 6.6835 3.33325 10.8335 3.33325H15.0002" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M25 3.33325H29.1667C33.3167 3.33325 36.6667 6.68325 36.6667 10.8333V14.9999" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M36.6665 26.6667V29.1667C36.6665 33.3167 33.3165 36.6667 29.1665 36.6667H26.6665" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M15.0002 36.6667H10.8335C6.6835 36.6667 3.3335 33.3167 3.3335 29.1667V25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M28.3332 15.8333V24.1666C28.3332 27.4999 26.6665 29.1666 23.3332 29.1666H16.6665C13.3332 29.1666 11.6665 27.4999 11.6665 24.1666V15.8333C11.6665 12.4999 13.3332 10.8333 16.6665 10.8333H23.3332" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M31.6668 20H8.3335" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>


      </div>
      
      <div className={`${step === 7 && "bg-secondary text-white"} transition-all duration-500 bg-primary text-secondary rounded-full flex items-center justify-center lg:w-[52px]  lg:h-[51px]  w-[46px] h-[45px]`}>

<svg className="w-[25px] h-[19px] lg:w-[29px] lg:h-[22px] " viewBox="0 0 29 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M26.5811 1C26.9537 1.00007 27.3131 1.14992 27.5801 1.41992C27.8474 1.69029 27.9999 2.05913 28 2.44629C28 2.8336 27.8475 3.20317 27.5801 3.47363L10.667 20.5791L10.666 20.5801C10.534 20.7138 10.3781 20.8198 10.207 20.8916C10.0359 20.9634 9.85257 21 9.66797 21C9.4834 21 9.30002 20.9634 9.12891 20.8916C8.95768 20.8197 8.80101 20.714 8.66895 20.5801L8.66797 20.5791L1.41992 13.248C1.28759 13.1142 1.1816 12.9547 1.10938 12.7783C1.0372 12.602 1 12.4122 1 12.2207C1.00006 12.0294 1.03727 11.8402 1.10938 11.6641C1.1816 11.4877 1.28759 11.3282 1.41992 11.1943C1.6869 10.9244 2.04634 10.7745 2.41895 10.7744C2.60374 10.7744 2.78763 10.811 2.95898 10.8828C3.12992 10.9545 3.28589 11.06 3.41797 11.1934V11.1943L8.95605 16.7998L9.66797 17.5195L10.3789 16.7998L25.5811 1.41992C25.8481 1.14984 26.2083 1 26.5811 1Z" fill="currentColor" stroke="currentColor" strokeWidth="2"/>
</svg>

      </div>
    </div>
  
 </div>
  );
}

export default Stepper;
