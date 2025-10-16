import React from "react";

function CheckboxInput() {
  return (
<label className="flex items-center justify-center w-full h-full cursor-pointer">
  <input type="checkbox" className="hidden peer" />
  <div className="w-8 h-8 border border-secondary rounded-xl flex items-center justify-center 
                  peer-checked:bg-secondary">
    
  </div>
  <svg
    className="hidden peer-checked:block absolute w-5 h-5 text-white"
    width="30"
    height="21"
    viewBox="0 0 30 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M27.5673 2.01978L10.2053 18.5559L2.31348 11.0395"
      stroke="white"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</label>
  );
}

export default CheckboxInput;
