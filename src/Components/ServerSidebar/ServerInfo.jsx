import React from "react";
import { GoVerified } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiWorld } from "react-icons/bi";

const ServerInfo = ({ isVerified, serverName, isDiscoerable }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          {isVerified && (
            <div className="relative flex justify-center items-center">
              <div className="absolute w-2 h-2 bg-white"></div>
              <GoVerified className="text-[#41434A]" />
              <GoVerified className="text-[#41434A] absolute top-0 left-0" />
            </div>
          )}

          <p className="font-bold text-slate-200 ">{serverName}</p>
        </div>
        <MdKeyboardArrowDown className="text-slate-300 text-2xl" />
      </div>
      {isDiscoerable && (
        <div className="bg-stone-200 rounded-full px-2 py-0.5 bg-opacity-10 text-white text-xs flex gap-1 items-center mt-1 w-[100px]">
          <BiWorld />
          Discoverable
        </div>
      )}
    </div>
  );
};

export default ServerInfo;
