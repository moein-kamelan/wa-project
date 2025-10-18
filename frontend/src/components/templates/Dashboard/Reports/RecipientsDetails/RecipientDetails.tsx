import React from "react";
import CheckboxInput from "../../../../modules/CheckboxInput/CheckboxInput";
import Pagination from "../../../../modules/Pagination/Pagination";

type RecipientsDetailsProps = {
  recipientsDetailsCampaign: any;
};

function RecipientsDetails({
  recipientsDetailsCampaign,
}: RecipientsDetailsProps) {
  const handleBackPageClick = () => {
    if (page > 1) setSearchParams({ page: String(page - 1) });
  };
  const handleNextPageClick = () => {
    if (pagination && page < pagination.pages)
      setSearchParams({ page: String(page + 1) });
  };

  return (
    <div className=" flex flex-col grow  bg-neutral-tertiary/47 rounded-[20px] p-3.5">
      <div className="grow">
        <div
          className="   relative    rounded-2xl border-[3px] border-secondary   mt-3  w-full overflow-auto     [&::-webkit-scrollbar]:w-3
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:w-9/12
  [&::-webkit-scrollbar-track]:bg-neutral-secondary
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-[#1DA45070]"
        >
          <table className=" w-full border-collapse text-center table-auto overflow-hidden ">
            <thead className="bg-neutral-primary/80 text-gray-black *:font-B-Nazanin xl:text-2xl  text-nowrap border-b-[3px] border-secondary">
              <tr>
                <th scope="col" className=" border border-secondary">
                  <CheckboxInput />
                </th>
                <th scope="col" className=" border border-secondary">
                  <button className="flex items-center  justify-evenly  w-full p-2  ">
                    <span>شماره مخاطب</span>
                  </button>
                </th>
                <th scope="col" className="border border-secondary ">
                  <button className="flex items-center justify-evenly w-full p-2  ">
                    <span>تاریخ ارسال</span>
                  </button>
                </th>
                <th scope="col" className="border border-secondary ">
                  <button className="flex items-center justify-evenly w-full p-2  ">
                    <span>وضعیت</span>
                  </button>
                </th>
              </tr>
            </thead>
            <tbody className="*:hover:bg-neutral-secondary">
              <tr className="p-2 ">
                <td className="border border-secondary p-2 ">
                  <CheckboxInput />
                </td>
                <td className="border border-secondary p-2  lg:text-2xl">
                  admin
                </td>

                <td className="border border-secondary p-2  lg:text-2xl">
                  12/6
                </td>
                <td className="border border-secondary p-2 ">
                  <span className="text-primary text-2xl">ارسال شد</span>
                </td>
              </tr>
              <tr className="p-2 ">
                <td className="border border-secondary p-2 ">
                  <label className="flex items-center justify-center w-full h-full ">
                    <div className="size-8 border border-secondary rounded-xl cursor-pointer"></div>
                    <input type="checkbox" className="hidden" />
                  </label>
                </td>
                <td className="border border-secondary p-2  lg:text-2xl">
                  admin
                </td>

                <td className="border border-secondary p-2  lg:text-2xl">
                  12/6
                </td>
                <td className="border border-secondary p-2 ">
                  <span className="text-primary text-2xl">ارسال شد</span>
                </td>
              </tr>
              <tr className="p-2 ">
                <td className="border border-secondary p-2 px-3">
                  <label className="flex items-center justify-center w-full h-full ">
                    <div className="size-8 border border-secondary rounded-xl cursor-pointer"></div>
                    <input type="checkbox" className="hidden" />
                  </label>
                </td>
                <td className="border border-secondary p-2 px-3 lg:text-2xl">
                  admin
                </td>

                <td className="border border-secondary p-2 px-3 lg:text-2xl">
                  12/6
                </td>
                <td className="border border-secondary p-2 px-3">
                  <span className="text-primary text-2xl">ارسال شد</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Pagination
        pagination={2}
        onClickBackPage={handleBackPageClick}
        onClickNextPage={handleNextPageClick}
      />
    </div>
  );
}

export default RecipientsDetails;
