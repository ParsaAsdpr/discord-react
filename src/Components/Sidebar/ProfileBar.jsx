import React from "react";
import { IoMdMic } from "react-icons/io";
import { MdHeadset } from "react-icons/md";
import { RiSettings5Fill } from "react-icons/ri";
import Status from "../common/Status";
import ProfilePicture from "../common/ProfilePicture";

const ProfileBar = ({ name,username, status, customStatus, avatar, dynamicAvatar }) => {
  return (
    <div className="absolute bg-[#232428] right-0 translate-x-full w-[15rem] bottom-0 py-1.5 px-1.5 flex justify-between gap-3">
      <div className="flex gap-0.5 profile-bar hover:bg-white hover:bg-opacity-10 rounded-[4px] py-1 px-0.5 w-full cursor-pointer">
        <div className="h-full select-none relative rounded-full">
          <ProfilePicture staticUrl={avatar} dynamicUrl={dynamicAvatar} width={32} height={32} />
          <Status status={status} className={"top-[54%] -right-1"} />
        </div>
        <div className="flex flex-col pl-2">
          <p className="text-slate-100 font-bold text-[13px]">{name}</p>
          <div className="h-3 overflow-hidden">
            <p className="text-[#bbbbbb] text-[10.5px] tracking-wider duration-200">
              {status === "dnd"
                ? "Do Not Disturb"
                : status.charAt(0).toUpperCase() + status.slice(1)}
            </p>
            <p className="text-[#bbbbbb] text-[10.5px] tracking-wider">
              {username}
            </p>
          </div>
        </div>
      </div>
      <div className="flex text-xl text-gray-400 items-center mr-1.5">
        <IoMdMic className="hover:bg-white hover:bg-opacity-10 p-[5px] text-3xl rounded-[4px] cursor-pointer" />
        <MdHeadset className="hover:bg-white hover:bg-opacity-10 p-[5px] text-3xl rounded-[4px] cursor-pointer" />
        <RiSettings5Fill className="hover:bg-white hover:bg-opacity-10 p-[5px] text-3xl rounded-[4px] cursor-pointer" />
      </div>
    </div>
  );
};

export default ProfileBar;
