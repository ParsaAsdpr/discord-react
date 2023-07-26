import React from "react";

const DayDivider = ({ date }) => {
  return (
    <div className="w-full px-4">
      <div className="relative border-t w-full border-t-[#bbbbbb21] mb-6 mt-5">
        <div className="absolute -translate-x-1/2 top-0 left-1/2 -translate-y-1/2 bg-[#31343a] px-1.5 text-[11px] font-semibold text-[#a0a0a0]">
          {date}
        </div>
      </div>
    </div>
  );
};

export default DayDivider;
