import React from "react";

const FirstMessage = ({ username, avatar, message, roleColor, time }) => {
  const handleProfileClick = () => {

  }
  return (
    <div className="mt-1 pl-4 hover:bg-[#00000010] py-1">
      <div className="flex">
        <span className="h-full pr-[14px] select-none">
          <img
            className="rounded-full cursor-pointer w-[40px] h-[40px]"
            alt="pfp"
            src={avatar}
          />
        </span>
        <div className="flex flex-col">
          <div className="flex">
            <p
              className=" leading-none pr-2.5"
              style={{ color: roleColor }}
            >
              {username}
            </p>
            <p className="text-[11px] text-gray-400 leading-5">Today at 12:06</p>
          </div>
          <p className="text-slate-300 text-[15.5px] pt-[1px]">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default FirstMessage;
