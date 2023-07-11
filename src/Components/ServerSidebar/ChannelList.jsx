import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ChannelButton from "./ChannelButton";

const ChannelList = ({ categoryName, channels }) => {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <ul className={`my-5 select-none ${isActive ? "" : "h-5 overflow-hidden"} pr-1.5`}>
      <div
        className="flex gap-0.5 text-[11.35px] font-[500] items-center cursor-pointer default-color hover:text-slate-200 duration-50 mb-1"
        onClick={handleClick}
      >
        <MdKeyboardArrowRight
          className={`${isActive && "rotate-90"} duration-100 text-[13px]`}
        />
        {categoryName.toUpperCase()}
      </div>
      {channels.map(channel => (
        <ChannelButton channelName={channel.name} key={channel._id} />
      ))}
    </ul>
  );
};

export default ChannelList;
