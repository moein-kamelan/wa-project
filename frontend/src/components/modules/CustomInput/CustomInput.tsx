import React from "react";

type CustomInputProps = {
    inputType? : string ;
    labelText? : string ;
    placeholder? : string ;
    value? : string | number ;
    className? : string;
    labelClassName? : string;
    onChange: (value : string ) => void

}


function CustomInput({ inputType="string", labelText="", placeholder="", value="", onChange , className="", labelClassName="" , ...rest } : CustomInputProps) {
  return (
    <label className={`flex flex-col gap-0.5 min-w-[215px] ${labelClassName}`}>
      <span className="text-gray-black text-xl mr-4">{labelText}</span>
      <input
        type={inputType}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`text-gray-black placeholder:text-neutral-tertiary placeholder:text-xl text-xl border-2 border-primary w-full rounded-xl  p-3 h-[50px] ${className}`}
        {...rest}
      />
    </label>
  );
}

export default CustomInput;
