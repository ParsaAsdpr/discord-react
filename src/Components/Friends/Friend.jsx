import React from "react";
import Status from "../common/Status";
import { useNavigate } from "react-router-dom";
import { BiSolidMessage } from "react-icons/bi";

const Friend = ({ avatar, name, status }) => {
  const navigate = useNavigate();
  return (
    <div className=" px-3 hover:bg-stone-200 hover:bg-opacity-5 mx-4 rounded-md w-full friend">
      <div className=" cursor-pointer items-center flex justify-between border-t-stone-200 border-t border-opacity-5">
        <div className=" flex gap-2 py-3 w-full">
          <span className="h-full relative">
            <img
              src={avatar}
              alt="pfp"
              className="w-8 h-8 rounded-full overflow-hidden"
            />
            <Status status={status} className="top-[54%] -right-0.5" />
          </span>
          <div className="flex flex-col gap-1 justify-center">
            <h3 className="font-bold text-[16px] text-slate-200 leading-none">
              {name}
            </h3>
            <h3 className="font-semibold text-[13px] text-[#bbbbbb] leading-none">
              {status === "dnd"
                ? "Do Not Disturb"
                : status.charAt(0).toUpperCase() + status.slice(1)}
            </h3>
          </div>
        </div>
        <div className="flex gap-2 friend-buttons">
          <span
          onClick={() => navigate(`/`)}
            className="rounded-full flex items-center justify-center w-9 h-9 text-[18px] text-[#bbbbbb] bg-[#222222] bg-opacity-30"
          >
            <BiSolidMessage />
          </span>
          <button className="rounded-full text-center w-9 h-9 rotate-90 text-2xl text-[#bbbbbb] bg-[#222222] bg-opacity-30">
            <p className="-translate-y-1/4">...</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Friend;
