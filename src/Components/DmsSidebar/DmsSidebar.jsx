import React from "react";
import DmsButton from "./DmsButton";
import SearchDms from "./SearchDms";
import FriendsIcon from "../common/Icons/FriendsIcon";
import NitroIcon from "../common/Icons/NitroIcon";
import { GoPlus } from "react-icons/go";
import DmContact from "./DmContact";

const DmsSidebar = () => {
  return (
    <div className="bg-[#2F3136] h-screen w-[17.5rem]">
      <SearchDms />
      <div className="flex flex-col gap-0.5 p-2">
        <DmsButton text="Friends" svg={<FriendsIcon color={'currentColor'} />} />
        <DmsButton text="Nitro" svg={<NitroIcon />} />
      </div>

      <div className="mt-2 px-2">
        <h3
          className="flex px-3 cursor-default flex-row justify-between items-center text-[11px] text-[#96989D] hover:text-[#eeeeee] font-bold"
          style={{ letterSpacing: "0.8px" }}
        >
          DIRECT MESSAGES <GoPlus className="text-sm" />
        </h3>
        <div className="flex flex-col mt-2 gap-0.5">
            <DmContact name='DANIHIT' avatar='/Avatars/danihit.jpeg' />
        </div>
      </div>
    </div>
  );
};

export default DmsSidebar;
