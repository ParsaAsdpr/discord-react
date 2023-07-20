import React, { useContext, useState } from "react";
import AddServer from "./actionButtons/AddServer";
import DownloadApps from "./actionButtons/DownloadApps";
import ExploreServers from "./actionButtons/ExploreServers";
import FriendsButton from "./FriendsButton";
import ServerButton from "./ServerButton";
import ProfileBar from "./ProfileBar";
import UserContext from "../../Context/UserContext";

const Sidebar = () => {
  const { activeGuild, setActiveGuild } = useState("1");
  const user = useContext(UserContext);


  const onFriendsClick = () => {
    setActiveGuild("1")
    console.log('clicked')
  }

  const onServerClick = (id) => {
    setActiveGuild(id)
    console.log('clicked')
  }


  return (
    <div className="h-screen relative p-3 w-[74px] bg-[#202225]">
      <FriendsButton activeGuild={activeGuild} onFriendsClick={onFriendsClick} />
      <div className="flex flex-col gap-2">
        {user.servers.map((server) => (
          <ServerButton
            // activeGuild={activeGuild}
            key={server._id}
            serverName={server.name}
            href={`/channels/${server._id}/${server.defaultChannel}`}
            serverAvatar={server.icon}
            // activeServer={activeGuild}
            onServerClick={onServerClick}
            isVerified={server.isVerified}
          />
        ))}
        <AddServer />
        <ExploreServers />
        <DownloadApps />
      </div>
      <ProfileBar name={user.name} tag={user.tag} status={user.status} avatar={user.avatar} />
    </div>
  );
};

export default Sidebar;
