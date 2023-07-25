import React from "react";
import { BiHash } from "react-icons/bi";
import Tag from "../common/Tag";
import HelpIcon from "../common/Icons/HelpIcon";
import HeaderRightSide from "../Friends/HeaderRightSide";
import InboxIcon from "../common/Icons/InboxIcon";
import ChatSearch from "./ChatSearch";
import MembersListIcon from "../common/Icons/MembersListIcon";
import { BsPinAngleFill } from "react-icons/bs";
import NotificationMute from "../common/Icons/NotificationMute";
import Threats from "../common/Icons/Threats";
import UserProfileIcon from "../common/Icons/UserProfileIcon";
import AddFriendIcon from "../common/Icons/AddFriendIcon";
import VideoCallIcon from "../common/Icons/VideoCallIcon";
import CallIcon from "../common/Icons/CallIcon";
import ProfilePicture from "../common/ProfilePicture";

const ChatTopbar = ({ isDM, channelName, channelIcon, channelDynamicIcon }) => {
  return (
    <div className="w-full py-[12px] bg-[#33353a] px-4 flex flex-row items-center justify-between shadow-[0_1px_0_#202225ee,0_2px_0_#00000001]">
      {isDM ? (
        <>
          <div className="flex flex-row items-center">
            <div className="flex items-center gap-3 pr-4">
              <ProfilePicture staticUrl={channelIcon} dynamicUrl={channelDynamicIcon} width={24} height={24} />
              <p className="text-slate-200 font-bold text-[15px]">
                {channelName}
              </p>
            </div>
          </div>
          <div dir="rtl" className="flex items-center gap-4">
            <HeaderRightSide url="#" icon={<HelpIcon />} />
            <HeaderRightSide url="#" icon={<InboxIcon />} />
            <ChatSearch />
            <HeaderRightSide url={"#"} icon={<UserProfileIcon />} />
            <HeaderRightSide url={"#"} icon={<AddFriendIcon />} />
            <HeaderRightSide
              url={"#"}
              icon={<BsPinAngleFill className="text-[22px]" />}
            />
            <HeaderRightSide url={"#"} icon={<VideoCallIcon />} />
            <HeaderRightSide url={"#"} icon={<CallIcon />} />
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row items-center">
            <div className="flex gap-2 pr-4 border-r border-r-stone-500 border-opacity-30">
              <BiHash className="default-color text-2xl" />
              <p className="text-slate-200 font-bold text-[15px]">
                {channelName}
              </p>
            </div>
            <div>
              <p className="text-[13.4px] font-semibold text-[#afafaf] pl-4 ">
                Remember <Tag>community</Tag> Channel is to be used to have
                conversations or free speech amongst Community and Staff! It is
                not to be used to post Links. Links must be post...
              </p>
            </div>
          </div>
          <div dir="rtl" className="flex items-center gap-4">
            <HeaderRightSide url="#" icon={<HelpIcon />} />
            <HeaderRightSide url="#" icon={<InboxIcon />} />
            <ChatSearch />
            <HeaderRightSide url={"#"} icon={<MembersListIcon />} />
            <HeaderRightSide
              url={"#"}
              icon={<BsPinAngleFill className="text-[22px]" />}
            />
            <HeaderRightSide url={"#"} icon={<NotificationMute />} />
            <HeaderRightSide url={"#"} icon={<Threats />} />
          </div>
        </>
      )}
    </div>
  );
};

export default ChatTopbar;
