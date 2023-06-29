import React, { useContext } from "react";
import AddServer from "./actionButtons/AddServer";
import DownloadApps from "./actionButtons/DownloadApps";
import ExploreServers from "./actionButtons/ExploreServers";
import FriendsButton from "./FriendsButton";
import ServerButton from "./ServerButton";
import ProfileBar from "./ProfileBar";
import UserContext from "../../Context/UserContext";

const Sidebar = () => {
  let text = "Parsatopia";
  const { servers } = useContext(UserContext);
  return (
    <div className="h-screen relative p-3 w-[74px] bg-[#202225]">
      <FriendsButton />
      <div className="flex flex-col gap-2">
        {servers.map((server) => (
          <ServerButton
            key={server._id}
            serverName={server.name}
            href={`/channels/${server._id}/${server.defaultChannel._id}`}
            serverAvatar={server.icon}
          />
        ))}
        <AddServer />
        <ExploreServers />
        <DownloadApps />
      </div>
      <ProfileBar />
    </div>
  );
};

export default Sidebar;
