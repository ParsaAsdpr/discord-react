import React from "react";
import { GoVerified } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import VerifiedIcon from "../common/Icons/VerifiedIcon";

const ServerInfo = ({ isVerified, serverName, isDiscoerable }) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          {isVerified && (
            <div className="relative flex justify-center items-center">
              <VerifiedIcon />
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
