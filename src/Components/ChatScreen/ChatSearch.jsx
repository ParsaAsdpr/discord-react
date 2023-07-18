import React from "react";
import { IoIosSearch } from "react-icons/io";
const ChatSearch = ({ isWide }) => {
  return (
    <div
      dir="rtl"
      className={`flex items-center ${
        isWide && "w-full"
      } rounded-[3px] bg-[#202225] px-2`}
    >
      <IoIosSearch className="text-slate-300 text-lg" />
      <input
        dir="ltr"
        className={` bg-[#202225] ${
          isWide
            ? "w-full py-1.5 text-[15px]"
            : "w-28 py-0.5 text-[13px] focus:w-52"
        } outline-none text-slate-300 duration-300`}
        placeholder="Search"
      />
    </div>
  );
};

export default ChatSearch;
