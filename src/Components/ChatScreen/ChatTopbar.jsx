import React from "react";
import { BiHash } from "react-icons/bi";
import Tag from "../common/Tag";
import HelpIcon from "../common/Icons/HelpIcon";
import RightSide from "../Friends/RightSide";
import InboxIcon from "../common/Icons/InboxIcon";
import SearchDms from "../DmsSidebar/SearchDms";
import ChatSearch from "./ChatSearch";
import MembersListIcon from "../common/Icons/MembersListIcon";
import {BsPinAngleFill} from 'react-icons/bs'
import NotificationMute from "../common/Icons/NotificationMute";
import Threats from "../common/Icons/Threats";

const ChatTopbar = () => {
  return (
    <div className="w-full py-[12px] bg-[#33353a] px-4 flex flex-row items-center justify-between shadow-[0_1px_0_#202225ee,0_2px_0_#00000001]">
      <div className="flex flex-row items-center">
        <div className="flex gap-2 pr-4 border-r border-r-stone-500 border-opacity-30">
          <BiHash className="default-color text-2xl" />
          <p className="text-slate-200 font-bold text-[15px]">community</p>
        </div>
        <div>
          <p className="text-[13.4px] font-semibold text-[#afafaf] pl-4 ">
            Remember <Tag>community</Tag> Channel is to be used to have
            conversations or free speech amongst Community and Staff! It is not
            to be used to post Links. Links must be post...
          </p>
        </div>
      </div>
      <div dir="rtl" className="flex items-center gap-4">
        <RightSide url='#' icon={<HelpIcon />} />
        <RightSide url='#' icon={<InboxIcon />} />
        <ChatSearch />
        <RightSide url={'#'} icon={<MembersListIcon />} />
        <RightSide url={'#'} icon={<BsPinAngleFill className="text-[22px]" />} />
        <RightSide url={'#'} icon={<NotificationMute />} />
        <RightSide url={'#'} icon={<Threats/>} />
      </div>
    </div>
  );
};

export default ChatTopbar;
