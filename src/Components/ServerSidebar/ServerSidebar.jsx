import React from "react";
import ServerInfo from "./ServerInfo";
import BoostGoal from "./BoostGoal";
import BrowseChannels from "./BrowseChannels";
import ChannelList from "./ChannelList";
import {
  getCategoryChannels,
  getServerCategories,
} from "../../Constants/ServerCategoriesService";

const ServerSidebar = ({
  children,
  serverName,
  isVerified,
  isDiscoerable,
  boosters,
  serverID,
}) => {
  const [activeChannel, setActiveChannel] = React.useState();

  const categories = getServerCategories(serverID);
  return (
    <div className="bg-[#2d2f33] h-screen w-[275px] py-3 px-0.5">
      <div className="px-4 flex flex-col">
        <ServerInfo
          isVerified={isVerified}
          serverName={serverName}
          isDiscoerable={isDiscoerable}
        />
        <div className="mt-8">
          <BoostGoal boosters={boosters} />
        </div>
      </div>
      <div className=" mt-3 px-1.5">
        <BrowseChannels />
      </div>
      {categories.map((category) => (
        <ChannelList
          categoryName={category.name}
          serverId={serverID}
          channels={getCategoryChannels(category._id)}
          key={category._id}
          activeChannel={activeChannel}
          setActiveChannel={setActiveChannel}
        />
      ))}
    </div>
  );
};

export default ServerSidebar;
