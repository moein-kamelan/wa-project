import React from "react";

type StepMessageProps = {
  children: React.ReactNode;
  status: "success" | "error" | "uploading";
};

function StepMessage({ children, status }: StepMessageProps) {
  return (
    <div
      className={`sticky right-0 left-0 top-0 w-full flex gap-[6px] items-center pr-4 py-4 lg:text-3xl text-lg ${
        status === "error" && "bg-semantic-error/30 text-semantic-error"
      } ${
        status === "uploading" && "bg-semantic-accent/30 text-semantic-accent"
      } ${
        status === "success" && "bg-semantic-success/30 text-semantic-success"
      }`}
    >
      {status === "error" && (
        <img
          src="/public/images/dashboard/new-campaign/close-circle.png"
          alt="close-circle"
        />
      )}
      {status === "success" && (
        <img
          src="/public/images/dashboard/new-campaign/tick-square.png"
          alt="close-circle"
        />
      )}
      {status === "uploading" && (
        <img
          src="/public/images/dashboard/new-campaign/uploading.png"
          alt="close-circle"
        />
      )}
      {children}
    </div>
  );
}

export default StepMessage;
