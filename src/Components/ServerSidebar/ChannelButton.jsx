import React, { useEffect } from "react";
import { BiHash } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";

const ChannelButton = ({
  channelName,
  isOpen,
  isRead,
  channelId,
  serverId,
  activeChannel,
  setActiveChannel,
}) => {
  const { channelID } = useParams();

  // useEffect(() => {
  channelID === channelId && setActiveChannel(channelID);
  // }, [channelID]);

  // console.log(activeChannel);

  const shouldDisplayChannel = !isOpen && isRead;

  return (
    <li>
      <Link
        className={`${
          activeChannel === channelId && "bg-[#3f4246] hover:bg-[#3d4044]"
        } ${
          !shouldDisplayChannel || activeChannel === channelId
            ? "block"
            : "hidden"
        } text-[15px] flex justify-between items-center channel-button font-semibold default-color ml-1.5 py-1 px-2 hover:bg-[#35373b] hover:text-slate-300 cursor-pointer rounded-[3px] mt-0.5`}
        to={`/channels/${serverId}/${channelId}`}
      >
        <div className="flex items-center gap-1 ">
          <BiHash className="text-[20px] default-color" />
          <p
            className={`${activeChannel === channelId && "text-white"} ${
              !isRead && "text-[#eeeeee]"
            }`}
          >
            {channelName}
          </p>
        </div>
        <svg
          className={`${
            activeChannel === channelId ? "block" : "hidden"
          } cursor-pointer default-color hover:text-slate-300`}
          aria-hidden="true"
          role="img"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M14 2H16V3H14V5H13V3H11V2H13V0H14V2Z"
          ></path>
          <path
            fill="currentColor"
            d="M6.5 8.00667C7.88 8.00667 9 6.88667 9 5.50667C9 4.12667 7.88 3.00667 6.5 3.00667C5.12 3.00667 4 4.12667 4 5.50667C4 6.88667 5.12 8.00667 6.5 8.00667Z"
          ></path>
          <path
            fill="currentColor"
            d="M6.5 8.34C3.26 8.34 1 9.98666 1 12.34V13.0067H12V12.34C12 9.98 9.74 8.34 6.5 8.34Z"
          ></path>
        </svg>
      </Link>
    </li>
  );
};

export default ChannelButton;
