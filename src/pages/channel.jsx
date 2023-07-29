import React, { useEffect, useState } from "react";
import ChatScreen from "../Components/ChatScreen/ChatScreen";
import ChatTopbar from "../Components/ChatScreen/ChatTopbar";
import MembersList from "../Components/ChatScreen/MembersList";
import TextBox from "../Components/ChatScreen/TextBox";
import DmsSidebar from "../Components/DmsSidebar/DmsSidebar";
import ServerSidebar from "../Components/ServerSidebar/ServerSidebar";
import { getMessages } from "../Constants/ChannelsDataService";
import { getServer } from "../Constants/ServersDataService";
import { useParams } from "react-router-dom";
import { getDms } from "../Constants/UserDmsService";
import DmProfileSidebar from "../Components/ChatScreen/DmProfileSidebar";
import { getUser } from "../Constants/MembersDataService";

export default function Channel(props) {
  const { serverID, channelID } = useParams();
  const user = getUser(channelID);

  const server = getServer(serverID);

  const [isChannelChanged, setIsChannelChanged] = useState(false);

  useEffect(() => {
    setIsChannelChanged(true);
  }, [channelID]);

  const navigateToChat = (newChatMessages) => {
    setIsChannelChanged(false);
  };

  return (
    <>
      {serverID !== "@me" ? (
        <div className="w-full flex h-screen ">
          <ServerSidebar
            serverName={server.name}
            isDiscoerable={server.isDiscoerable}
            isVerified={server.isVerified}
            boosters={server.boosters.length}
            serverID={serverID}
          ></ServerSidebar>
          <div className="flex flex-col w-full h-screen">
            <div className="w-full">
              <ChatTopbar channelName="community" />
            </div>
            <div className="flex h-full overflow-hidden">
              <div className="w-full h-full flex flex-col pr-1">
                {/* Add key prop to force remounting of ChatScreen when channel changes */}
                {isChannelChanged ? (
                  <ChatScreen
                    channelID={channelID}
                    messages={serverID !== "@me" ? getMessages(channelID) : getDms(channelID)}
                    key={channelID}
                  />
                ) : null}
                <TextBox channelName={"community"} />
              </div>
              <MembersList serverID={serverID} />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex w-full">
          <DmsSidebar />
          <div className="flex flex-col w-full h-screen">
            <div className="w-full">
              <ChatTopbar
                isDM
                channelName={user.name}
                channelIcon={user.avatar}
                channelDynamicIcon={user.dynamicAvatar}
              />
            </div>
            <div className="flex h-full overflow-hidden">
              <div className="w-full h-full flex flex-col pr-1">
                {/* Add key prop to force remounting of ChatScreen when channel changes */}
                {isChannelChanged ? (
                  <ChatScreen
                    channelID={channelID}
                    messages={serverID !== "@me" ? getMessages(channelID) : getDms(channelID)}
                    key={channelID}
                  />
                ) : null}
                <TextBox channelName={"community"} />
              </div>
              <DmProfileSidebar
                avatar={user.avatar}
                dynamicAvatar={user.dynamicAvatar}
                name={user.name}
                username={user.username}
                tag={user.tag}
                created={user.created}
                banner={user.banner}
                bannerColor={user.bannerColor}
                themeColors={user.themeColors}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
