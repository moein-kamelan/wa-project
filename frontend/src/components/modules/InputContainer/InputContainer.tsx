import React from "react";

type InputContainerProps = {
  children: React.ReactNode;
  text: string;
  textSize?: string;
  extraText?: string;
  customClasses?: string;
  errorMessage1? : string | null;
  errorMessage2? : string | null;
};

function InputContainer({
  text,
  children,
  textSize,
  extraText,
  customClasses = "",
  errorMessage1 = "",
  errorMessage2 = "",
}: InputContainerProps) {
  return (
    <div className="flex flex-col">
      <div className="  mx-auto w-full ">
        <div
          className={`grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center pr-6 pl-11 py-5  bg-[#EEEEEE]/93 rounded-[20px]  gap-y-2 gap-x-4 ${customClasses}`}
        >
          <span
            className={`text-gray-black text-2xl w-fit ${
              textSize ? textSize : "lg:text-[40px]"
            } text-nowrap relative  `}
          >
            {text}
            {extraText && (
              <span className="absolute bottom-5/10 right-full  sm:right-8/10  sm:bottom-7/10 md:right-full md:bottom-4/10 text-lg xl:text-2xl">
                {extraText}
              </span>
            )}
          </span>

          <div className="justify-self-end">{children}</div>
        </div>
      </div>
 <div className=" flex items-center gap-x-4 basis-6 font-B-Nazanin text-semantic-error font-bold pr-4">
 {errorMessage1 && (
        <div className="flex items-center gap-x-1">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M9.99984 18.8963C14.6022 18.8963 18.3332 15.1583 18.3332 10.5473C18.3332 5.93623 14.6022 2.19824 9.99984 2.19824C5.39746 2.19824 1.6665 5.93623 1.6665 10.5473C1.6665 15.1583 5.39746 18.8963 9.99984 18.8963Z" fill="#F44336"/>
<path d="M10.8836 10.5484L12.8003 8.62811C13.042 8.38599 13.042 7.98524 12.8003 7.74311C12.5586 7.50099 12.1586 7.50099 11.917 7.74311L10.0003 9.66339L8.08363 7.74311C7.84196 7.50099 7.44196 7.50099 7.20029 7.74311C6.95863 7.98524 6.95863 8.38599 7.20029 8.62811L9.11696 10.5484L7.20029 12.4687C6.95863 12.7108 6.95863 13.1115 7.20029 13.3537C7.32529 13.4789 7.48363 13.5373 7.64196 13.5373C7.80029 13.5373 7.95863 13.4789 8.08363 13.3537L10.0003 11.4334L11.917 13.3537C12.042 13.4789 12.2003 13.5373 12.3586 13.5373C12.517 13.5373 12.6753 13.4789 12.8003 13.3537C13.042 13.1115 13.042 12.7108 12.8003 12.4687L10.8836 10.5484Z" fill="#F44336"/>
</svg>
        <span > {errorMessage1} </span>

       </div>
 )}
{errorMessage2 && (
         <div className="flex items-center gap-x-1">
        <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M9.99984 18.8963C14.6022 18.8963 18.3332 15.1583 18.3332 10.5473C18.3332 5.93623 14.6022 2.19824 9.99984 2.19824C5.39746 2.19824 1.6665 5.93623 1.6665 10.5473C1.6665 15.1583 5.39746 18.8963 9.99984 18.8963Z" fill="#F44336"/>
<path d="M10.8836 10.5484L12.8003 8.62811C13.042 8.38599 13.042 7.98524 12.8003 7.74311C12.5586 7.50099 12.1586 7.50099 11.917 7.74311L10.0003 9.66339L8.08363 7.74311C7.84196 7.50099 7.44196 7.50099 7.20029 7.74311C6.95863 7.98524 6.95863 8.38599 7.20029 8.62811L9.11696 10.5484L7.20029 12.4687C6.95863 12.7108 6.95863 13.1115 7.20029 13.3537C7.32529 13.4789 7.48363 13.5373 7.64196 13.5373C7.80029 13.5373 7.95863 13.4789 8.08363 13.3537L10.0003 11.4334L11.917 13.3537C12.042 13.4789 12.2003 13.5373 12.3586 13.5373C12.517 13.5373 12.6753 13.4789 12.8003 13.3537C13.042 13.1115 13.042 12.7108 12.8003 12.4687L10.8836 10.5484Z" fill="#F44336"/>
</svg>
        <span > {errorMessage2} </span>

       </div>
)}
      
 </div>
    </div>
  );
}

export default InputContainer;
