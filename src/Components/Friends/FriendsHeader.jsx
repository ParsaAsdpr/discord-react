import React from "react";
import FriendsIcon from "../common/Icons/FriendsIcon";
import HelpIcon from "../common/Icons/HelpIcon";
import InboxIcon from "../common/Icons/InboxIcon";
import NewGroupIcon from "../common/Icons/NewGroupIcon";
import FriendsTab from "./FriendsTab";
import RightSide from "./RightSide";
import { Link } from "react-router-dom";

const FriendsHeader = () => {
  return (
    <div className="w-full py-[12px] px-4 flex flex-row justify-between items-center shadow-[0_1px_0_#202225ee,0_2px_0_#00000001]">
      <div className="flex flex-row gap-4">
        <div className="flex flex-row gap-2 items-center pr-4 border-r border-r-stone-300 border-opacity-10">
          <FriendsIcon color="#a5a5a5" />
          <p className="text-[#eee] font-bold text-base">Friends</p>
        </div>
        <FriendsTab text="Online" url="#" />
        <FriendsTab text="All" url="#" />
        <FriendsTab text="Pending" url="#" />
        <FriendsTab text="Blocked" url="#" />
        <Link
          className="px-2 rounded-[0.25rem] bg-[#2D7D46] text-[#eee] font-medium"
          to="/"
        >
          Add Friend
        </Link>
      </div>
      <div className="flex flex-row gap-4">
        <div className="pr-4 border-r border-r-stone-300 border-opacity-20">
        <RightSide url='#' icon={<NewGroupIcon />} />
        </div>
        <RightSide url='#' icon={<InboxIcon />} />
          <RightSide url='#' icon={<HelpIcon />} />
      </div>
    </div>
  );
};

export default FriendsHeader;
