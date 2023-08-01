import React from "react";
import DmsButton from "./DmsButton";
import SearchDms from "./SearchDms";
import FriendsIcon from "../common/Icons/FriendsIcon";
import NitroIcon from "../common/Icons/NitroIcon";
import DmContact from "./DmContact";
import UserContext from "../../Context/UserContext";

const DmsSidebar = () => {
  const { recentDms } = React.useContext(UserContext);

  return (
    <div className="bg-[#2b2d31] h-screen w-[17.5rem] dm-sidebar">
      <SearchDms />
      <div className="flex flex-col gap-0.5 p-2">
        <DmsButton
          text="Friends"
          svg={<FriendsIcon color={"currentColor"} />}
          url={"/channels/@me"}
        />
        <DmsButton text="Nitro" svg={<NitroIcon />} url={"/channels/@me"} />
      </div>

      <div className="mt-2 px-2">
        <h3
          className="flex px-3 cursor-default flex-row justify-between items-center text-[11px] text-[#96989D] hover:text-[#dfdfdf] font-bold"
          style={{ letterSpacing: "0.8px" }}
        >
          DIRECT MESSAGES <p className="text-2xl font-semibold leading-none -translate-y-0.5">+</p>
        </h3>
        <div className="flex flex-col mt-2 gap-0.5">
          {recentDms.map(dm => (
            <DmContact id={dm._id} key={dm._id} name={dm.name} avatar={dm.avatar} status={dm.status} customStatus={dm.customStatus} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DmsSidebar;
