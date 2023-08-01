import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import ChannelButton from "./ChannelButton";

const ChannelList = ({ categoryName, serverId, channels, activeChannel, setActiveChannel }) => {
  const [isActive, setActive] = useState(false);
  
  const handleClick = () => {
    setActive(!isActive);
  };


  return (
    <ul
      className={`my-5 select-none pr-1.5`}
    >
      <div
        className="flex gap-0.5 text-[12px] scale-y-90 font-[600] items-center cursor-pointer default-color hover:text-slate-200 duration-50 mb-1"
        onClick={handleClick}
      >
        <MdKeyboardArrowRight
          className={`${isActive && "rotate-90"} duration-100 text-[13px]`}
        />
        {categoryName.toUpperCase()}
      </div>
      {channels.map((channel) => (
        <ChannelButton
          key={channel._id}
          channelName={channel.name}
          channelId={channel._id}
          isOpen={isActive} // Pass the isActive prop to ChannelButton
          isRead={channel.isRead}
          serverId={serverId}
          setActiveChannel={setActiveChannel}
          activeChannel={activeChannel}
        />
      ))}
    </ul>
  );
};

export default ChannelList;
