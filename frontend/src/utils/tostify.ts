import { toast } from "react-toastify";

export const showErrorToast = (text: string) => {
  toast.error(text, {
    position: "top-right",

    className:
      "!bg-[#FFA1A1] !text-semantic-error rounded-[6px]  !font-Yekan !pl-8",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    rtl: true,
    progress: undefined,
  });
};
