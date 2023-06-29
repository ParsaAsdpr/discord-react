import React, { useContext } from "react";
import { IoMdMic } from "react-icons/io";
import { MdHeadset } from "react-icons/md";
import { RiSettings5Fill } from "react-icons/ri";
import UserContext from "../../Context/UserContext";

const ProfileBar = () => {
  const { username, tag, status, customStatus, avatarURL } =
    useContext(UserContext);
  return (
    <div className="absolute bg-[#232428] right-0 translate-x-full w-[15rem] bottom-0 py-2.5 px-2 flex justify-between">
      <div className="flex">
        <div className="h-full select-none overflow-hidden rounded-full">
            <img
              className="rounded-full"
              alt="pfp"
              src={avatarURL}
              width={32}
              height={32}
            />
        </div>
        <div className="flex flex-col pl-2">
          <p className="text-slate-100 font-bold text-[13px]">{username}</p>
          <p className="text-[#bbbbbb] text-[10.5px] tracking-wider">
            {username}#{tag}
          </p>
        </div>
      </div>
      <div className="flex gap-3 text-xl text-gray-400 items-center mr-1.5">
        <IoMdMic />
        <MdHeadset className="text-[22px] translate-y-0.5" />
        <RiSettings5Fill />
      </div>
    </div>
  );
};

export default ProfileBar;
