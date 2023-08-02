import React, { useEffect } from "react";
import { getInvite } from "../../../Constants/InviteService";

const DiscordLink = ({ link, author }) => {
  const [invite, setInvite] = React.useState();
  const arr = link.split("/");

  useEffect(() => {
    setInvite(getInvite(arr[arr.length - 1]));
  }, [arr]);
  return (
    <div className="py-4 px-3.5 bg-[#2c2e33] rounded-[5px] flex flex-col mt-0.5 max-w-[27rem]">
      <h4 className="text-[11px] font-extrabold text-[#bbbbbb]">
        {invite
          ? "YOU'VE BEEN INVITED TO JOIN A SERVER"
          : "YOU RECEIVED AN INVITE, BUT..."}
      </h4>
      <div className="flex gap-1 items-center pt-4 w-full">
        <img
          src={invite ? invite.server.icon : "/invalidinvite.svg"}
          alt="invalid invite"
          className="w-12 mr-3 rounded-xl"
        />
        <div className="flex flex-col w-full pr-[70px] justify-center">
          <p
            className={`${
              invite ? "text-stone-50" : "text-red-500"
            } font-semibold`}
          >
            {invite ? invite.server.name : "Invalid Invite"}
          </p>
          <p className="text-[13px] text-[#aaaaaa]">
            {invite ? (
              <div className="flex gap-4 items-center ">
                <div className="flex items-center gap-1">
                  <span className="p-[4px] bg-green-600 rounded-full block"></span>
                  <p className="-translate-y-[1px]">
                    {invite.server.online} Online
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="p-[4px] bg-[#777777] rounded-full block"></span>
                  <p className="-translate-y-[1px]">
                    {invite.server.members} Members
                  </p>
                </div>
              </div>
            ) : (
              `Ask a name for a new invite!`
            )}
          </p>
        </div>
        <button
          className={`${
            invite
              ? "bg-[#2D7D46] hover:bg-[#206135] px-4"
              : "bg-[#5865F2] hover:bg-[#454fbd] px-3 "
          } transition py-2.5 rounded-[3px] font-semibold text-sm text-white`}
        >
          {invite ? "Join" : "Mention"}
        </button>
      </div>
    </div>
  );
};

export default DiscordLink;