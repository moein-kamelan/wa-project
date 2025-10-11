import React from "react";

type SmallStepperProps = {
    step : number 
}


function SmallStepper({step} : SmallStepperProps) {
  return (
    <div className="px-4 w-fit mobile:w-[273px] h-11.5 bg-white/65 flex items-center justify-center  gap-4 rounded-2xl mx-auto mb-2 mt-7.5 lg:hidden">
      <div className={` size-2 mobile:size-4   rounded-full  bg-primary ${step === 1 && "size-4 mobile:size-6 bg-secondary"}`}></div>
      <div className={`size-2 mobile:size-4   rounded-full bg-primary ${step === 2 && "size-4 mobile:size-6 bg-secondary"}`}></div>
      <div className={`size-2 mobile:size-4   rounded-full bg-primary ${step === 3 && "size-4 mobile:size-6 bg-secondary"}`}></div>
      <div className={`size-2 mobile:size-4   rounded-full bg-primary ${step === 4 && "size-4 mobile:size-6 bg-secondary"}`}></div>
      <div className={`size-2 mobile:size-4   rounded-full bg-primary ${step === 5 && "size-4 mobile:size-6 bg-secondary"}`}></div>
      <div className={`size-2 mobile:size-4   rounded-full bg-primary ${step === 6 && "size-4 mobile:size-6 bg-secondary"}`}></div>
      <div className={`size-2 mobile:size-4   rounded-full bg-primary ${step === 7 && "size-4 mobile:size-6 bg-secondary"}`}></div>
    </div>
  );
}

export default SmallStepper;
