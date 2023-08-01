import React, { useContext } from "react";
import AddServer from "./actionButtons/AddServer";
import DownloadApps from "./actionButtons/DownloadApps";
import ExploreServers from "./actionButtons/ExploreServers";
import FriendsButton from "./FriendsButton";
import ServerButton from "./ServerButton";
import ProfileBar from "./ProfileBar";
import UserContext from "../../Context/UserContext";

const Sidebar = () => {
  const user = useContext(UserContext);

  return (
    <div className="h-screen relative p-3 w-[74px] bg-[#202225]">
      <FriendsButton friendRequests={user.friendRequests} />
      <div className="flex flex-col gap-2">
        {user.servers.map((server) => (
          <ServerButton
            key={server._id}
            id={server._id}
            serverName={server.name}
            href={`/channels/${server._id}/${server.defaultChannel}`}
            serverAvatar={server.icon}
            isVerified={server.isVerified}
          />
        ))}
        <AddServer />
        <ExploreServers />
        <DownloadApps />
      </div>
      <ProfileBar name={user.name} username={user.username} status={user.status} avatar={user.avatar} dynamicAvatar={user.dynamicAvatar} />
    </div>
  );
};

export default Sidebar;
