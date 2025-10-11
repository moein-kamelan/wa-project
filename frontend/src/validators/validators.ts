import { VariableRandomValueType } from "../types/dashboard/types";

export const isValideMessageVariable  = (
  variableRandomValue : any,
  message : any,
  checkedVariables : any
)  => {
  const usedVariables: string[] = [];

  for (const field in variableRandomValue) {
    const key = field as keyof VariableRandomValueType;
    const variableToken = variableRandomValue[key][1];

    if (message.includes(variableToken)) {
      usedVariables.push(key);
    }
  }

  const invalidVariables: string[] = [];

  usedVariables.forEach((key) => {
    if (!checkedVariables[key as keyof typeof checkedVariables]) {
      invalidVariables.push(key);
    }
  });

  console.log("invalidVariables:", invalidVariables);
  if (invalidVariables.length > 0) {
    return false;
  }
  return true;
};

export const validateStep1 = (
  message : string,
  setErrorMessage : any,
  variableRandomValue : any,
  checkedVariables : any,
) => {
  if (message.trim() === "") {
    setErrorMessage("ابتدا پیام متنی کمپین خود را ایجاد کنید.");
    setTimeout(() => {
      setErrorMessage(null);
    }, 3000);
    return;
  }

  if (
    !isValideMessageVariable(variableRandomValue, message, checkedVariables)
  ) {

    setErrorMessage("متغیر نوشته شده در متن انتخاب نشده");
    setTimeout(() => {
      setErrorMessage(null);
    }, 3000);

    return;
  }
  return true
};

export const validateStep2 = (file : File , setErrorMessage : (value : string | null) => any ) => {

      const validTypes = [
      "application/vnd.ms-excel", 
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" 
    ];
    const fileExtension = file.name.split(".").pop()?.toLowerCase();

    if (
      !validTypes.includes(file.type) &&
      !["xls", "xlsx"].includes(fileExtension || "")
    ) {
      setErrorMessage("فقط فایل اکسل مجاز است (.xls یا .xlsx)");

      setTimeout(() => {
      setErrorMessage(null);
    }, 3000);
      return;
    }

    const maxSize = 2 * 1024 * 1024

    if(file.size > maxSize) {
      setErrorMessage("حجم فایل بزرگتر از حد مجاز می باشد. (حداکثر حجم مجاز 20 مگابایت)")
      setTimeout(() => {
        setErrorMessage(null)
      }, 3000);
      return 
    }


    return true

}
