import React from "react";

const Status = ({ status, themeColor, size, className, isBig, background }) => {
  let bg;
  switch (status) {
    case "online":
      bg = "bg-[#2ea153]";
      break;
    case "dnd":
      bg = "bg-[#E63E41]";
      break;
    case "idle":
      bg = "bg-[#DFA731]";
      break;
    default:
      bg = "bg-[#777777]";
  }
  return (
    <div
      className={`${className} rounded-full ${isBig ? `w-[28px] h-[28px]` : 'w-[14px] h-[14px]' } z-30 absolute overflow-hidden translate-y-0.5 ${isBig ? 'p-[5px]' : 'p-[2px]'} ${
        background ? background : "bg-[#2d2f33]"
      }`}
    >
      <div
        className={`w-full h-full ${bg} rounded-full overflow-hidden relative flex justify-center items-center`}
      >
        {status === 'offline' && <div className={`${isBig ? 'p-[4px]' : 'p-[3px]'} bg-[#2d2f33] rounded-full`}></div>}
        {status === "dnd" && (
          <div className={`${isBig ? 'w-[16px] h-[6px] scale-y-[0.75]' : 'w-[8px] h-[4px] scale-y-[0.60]'} scale-x-90 bg-[#2d2f33] rounded-[1.5px]`}></div>
        )}
        {status === "idle" && (
          <div className="w-5/6 h-5/6 rounded-full bottom-1 right-1 absolute bg-[#2d2f33]"></div>
        )}
      </div>
    </div>
  );
};

export default Status;
